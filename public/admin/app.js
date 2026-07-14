const API = '/admin/api';
const KEY_STORAGE = 'gog_admin_key';

const state = {
  key: sessionStorage.getItem(KEY_STORAGE) || '',
  page: 'dashboard',
  me: null,
  error: '',
  modal: null,
};

async function api(path, options = {}) {
  const headers = {
    ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    ...(state.key ? { Authorization: `Bearer ${state.key}` } : {}),
    ...(options.headers || {}),
  };
  const res = await fetch(`${API}${path}`, { ...options, headers });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { error: { message: text } };
  }
  if (!res.ok) {
    const msg = data?.error?.message || res.statusText || 'Request failed';
    if (res.status === 401 || res.status === 403) {
      if (state.page !== 'login') {
        logout(false);
      }
    }
    throw new Error(msg);
  }
  return data;
}

function logout(clear = true) {
  if (clear) sessionStorage.removeItem(KEY_STORAGE);
  state.key = '';
  state.me = null;
  state.page = 'login';
  render();
}

function setPage(page) {
  state.page = page;
  state.modal = null;
  state.error = '';
  render();
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function badgeStatus(s) {
  const c =
    s === 'success' ? 'success' : s === 'error' || s === 'timeout' ? 'error' : 'pending';
  return `<span class="badge ${c}">${escapeHtml(s || '-')}</span>`;
}

function badgeMode(m) {
  return `<span class="badge ${m === 'agent' ? 'agent' : 'safe'}">${escapeHtml(m || 'safe')}</span>`;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function fmtTime(iso) {
  if (!iso) return '-';
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function showError(msg) {
  state.error = msg;
  const box = document.querySelector('#flash-error');
  if (box) {
    box.hidden = !msg;
    box.textContent = msg;
  }
}

async function ensureMe() {
  if (!state.key) return false;
  const data = await api('/me');
  state.me = data.data;
  return true;
}

function shell(content) {
  return `
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">Grok Gateway<small>Admin Panel</small></div>
      ${nav('dashboard', '儀表板')}
      ${nav('chats', 'Chat 記錄')}
      ${nav('keys', 'API Keys')}
      ${nav('documents', '文件')}
      ${nav('audit', 'Audit Logs')}
      ${nav('settings', '安全設定')}
      ${nav('system', '系統狀態')}
      <div class="sidebar-foot">
        <div>${escapeHtml(state.me?.name || '')}</div>
        <div>${escapeHtml(state.me?.keyPrefix || '')}…</div>
        <button class="btn secondary sm" style="margin-top:10px;width:100%" id="btn-logout">登出</button>
      </div>
    </aside>
    <main class="main">
      <div id="flash-error" class="error-box" ${state.error ? '' : 'hidden'}>${escapeHtml(state.error)}</div>
      ${content}
    </main>
  </div>
  ${state.modal || ''}
  `;
}

function nav(id, label) {
  return `<button class="nav-btn ${state.page === id ? 'active' : ''}" data-nav="${id}">${label}</button>`;
}

async function renderLogin() {
  document.getElementById('app').innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <h1>Admin 登入</h1>
        <p>貼上 <strong>admin API key</strong>（seed 產生、只顯示一次）。資料會存放在本瀏覽器 sessionStorage。</p>
        <div id="flash-error" class="error-box" ${state.error ? '' : 'hidden'}>${escapeHtml(state.error)}</div>
        <label>Admin API Key</label>
        <input id="login-key" type="password" placeholder="gk_live_..." autocomplete="off" />
        <button class="btn" id="btn-login" style="width:100%">進入控制台</button>
      </div>
    </div>
  `;
  document.getElementById('btn-login').onclick = async () => {
    const key = document.getElementById('login-key').value.trim();
    if (!key) return showError('請輸入 API key');
    state.key = key;
    try {
      await ensureMe();
      sessionStorage.setItem(KEY_STORAGE, key);
      state.page = 'dashboard';
      state.error = '';
      render();
    } catch (e) {
      state.key = '';
      showError(e.message);
    }
  };
}

async function renderDashboard() {
  const { data } = await api('/stats');
  const t = data.totals;
  const rows = (data.recentChats || [])
    .map(
      (c) => `
    <tr>
      <td><button class="linkish" data-chat="${c.id}">${escapeHtml(c.requestId)}</button></td>
      <td>${escapeHtml(c.model)}</td>
      <td>${badgeStatus(c.status)}</td>
      <td>${badgeMode(c.policyMode || '-')}</td>
      <td>${c.durationMs ?? '-'} ms</td>
      <td>${fmtTime(c.createdAt)}</td>
    </tr>`,
    )
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar"><h2>儀表板</h2><span class="muted">最近 24h 請求：${t.chats24h}</span></div>
    <div class="grid">
      <div class="card"><div class="label">總 Chat</div><div class="value">${t.chats}</div></div>
      <div class="card"><div class="label">成功</div><div class="value">${t.success}</div></div>
      <div class="card"><div class="label">錯誤/逾時</div><div class="value">${t.errors}</div></div>
      <div class="card"><div class="label">文件</div><div class="value">${t.documents}</div></div>
      <div class="card"><div class="label">活躍 Keys</div><div class="value">${t.activeKeys}/${t.totalKeys}</div></div>
      <div class="card"><div class="label">Grok 併發</div><div class="value">${data.concurrency.active}/${data.concurrency.max}</div></div>
    </div>
    <div class="panel">
      <div class="panel-h"><strong>最近 Chat</strong></div>
      <table>
        <thead><tr><th>Request</th><th>Model</th><th>Status</th><th>Mode</th><th>耗時</th><th>時間</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="6" class="empty">暫無資料</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  document.querySelectorAll('[data-chat]').forEach((b) => {
    b.onclick = () => openChat(b.dataset.chat);
  });
}

async function renderChats() {
  const q = new URLSearchParams({ limit: '50' });
  const status = document.getElementById('f-status')?.value;
  const model = document.getElementById('f-model')?.value;
  const search = document.getElementById('f-q')?.value;
  if (status) q.set('status', status);
  if (model) q.set('model', model);
  if (search) q.set('q', search);

  const data = await api(`/chats?${q}`);
  const rows = (data.items || [])
    .map(
      (c) => `
    <tr>
      <td><button class="linkish" data-chat="${c.id}">${escapeHtml(c.requestId)}</button></td>
      <td>${escapeHtml(c.apiKey?.name || '')}<div class="muted">${escapeHtml(c.apiKey?.keyPrefix || '')}</div></td>
      <td>${escapeHtml(c.model)}</td>
      <td>${badgeStatus(c.status)} ${badgeMode(c.policyMode || '-')}</td>
      <td><div class="muted">${escapeHtml(c.promptPreview)}</div></td>
      <td><div class="muted">${escapeHtml(c.contentPreview)}</div></td>
      <td>${fmtTime(c.createdAt)}</td>
    </tr>`,
    )
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar"><h2>Chat 記錄</h2><span class="muted">共 ${data.total} 筆（可解密查看完整 in/out）</span></div>
    <div class="panel">
      <div class="panel-h">
        <div class="toolbar">
          <select id="f-status">
            <option value="">全部狀態</option>
            <option value="success">success</option>
            <option value="error">error</option>
            <option value="timeout">timeout</option>
            <option value="pending">pending</option>
          </select>
          <input id="f-model" placeholder="model 篩選" />
          <input id="f-q" placeholder="搜尋 prompt/response 預覽" style="min-width:220px" />
          <button class="btn secondary sm" id="btn-filter">篩選</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Request</th><th>API Key</th><th>Model</th><th>狀態</th>
            <th>Prompt 預覽</th><th>Response 預覽</th><th>時間</th>
          </tr>
        </thead>
        <tbody>${rows || `<tr><td colspan="7" class="empty">暫無資料</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  if (status) document.getElementById('f-status').value = status;
  if (model) document.getElementById('f-model').value = model;
  if (search) document.getElementById('f-q').value = search;
  document.getElementById('btn-filter').onclick = () => renderChats().catch(onErr);
  document.querySelectorAll('[data-chat]').forEach((b) => {
    b.onclick = () => openChat(b.dataset.chat);
  });
}

async function openChat(id) {
  const { data } = await api(`/chats/${id}`);
  const r = data.response || {};
  state.modal = `
    <div class="modal-back" id="modal-back">
      <div class="modal">
        <div class="modal-h">
          <div>
            <strong>Chat 詳情</strong>
            <div class="muted">${escapeHtml(data.requestId)} · ${badgeStatus(data.status)} ${badgeMode(data.policyMode || '-')}</div>
          </div>
          <button class="btn secondary sm" id="modal-close">關閉</button>
        </div>
        <div class="modal-b">
          <div class="grid" style="margin-bottom:14px">
            <div class="card"><div class="label">Model</div><div class="value" style="font-size:1rem">${escapeHtml(data.model)}</div></div>
            <div class="card"><div class="label">耗時</div><div class="value" style="font-size:1rem">${data.durationMs ?? '-'} ms</div></div>
            <div class="card"><div class="label">API Key</div><div class="value" style="font-size:1rem">${escapeHtml(data.apiKey?.name || '')}</div></div>
            <div class="card"><div class="label">Stream</div><div class="value" style="font-size:1rem">${data.stream ? 'yes' : 'no'}</div></div>
          </div>
          ${data.errorMessage ? `<div class="error-box">${escapeHtml(data.errorMessage)}</div>` : ''}
          <div class="block">
            <h4>Prompt（輸入 · 完整明文）</h4>
            <div class="pre">${escapeHtml(data.prompt)}</div>
            <button class="btn secondary sm" data-copy="prompt">複製 Prompt</button>
          </div>
          <div class="block">
            <h4>Reasoning / Thought</h4>
            <div class="pre">${escapeHtml(r.reasoning_content || '（無）')}</div>
          </div>
          <div class="block">
            <h4>Content（輸出 · 完整明文）</h4>
            <div class="pre">${escapeHtml(r.content || '（無）')}</div>
            <button class="btn secondary sm" data-copy="content">複製 Content</button>
          </div>
          <div class="block">
            <h4>Raw Response 儲存值</h4>
            <div class="pre">${escapeHtml(r.raw || '')}</div>
          </div>
          <div class="muted">IP: ${escapeHtml(data.ip || '-')} · UA: ${escapeHtml(data.userAgent || '-')} · ${fmtTime(data.createdAt)}</div>
        </div>
      </div>
    </div>
  `;
  // re-render current page body with modal - simpler: inject modal
  const app = document.getElementById('app');
  const existing = document.getElementById('modal-back');
  if (existing) existing.remove();
  app.insertAdjacentHTML('beforeend', state.modal);
  document.getElementById('modal-close').onclick = () => {
    state.modal = null;
    document.getElementById('modal-back')?.remove();
  };
  document.getElementById('modal-back').onclick = (e) => {
    if (e.target.id === 'modal-back') {
      state.modal = null;
      document.getElementById('modal-back')?.remove();
    }
  };
  document.querySelector('[data-copy="prompt"]')?.addEventListener('click', () => {
    navigator.clipboard.writeText(data.prompt || '');
  });
  document.querySelector('[data-copy="content"]')?.addEventListener('click', () => {
    navigator.clipboard.writeText(r.content || '');
  });
}

async function renderKeys() {
  const { data } = await api('/keys');
  const rows = data
    .map(
      (k) => `
    <tr>
      <td>${escapeHtml(k.name)}<div class="muted">${escapeHtml(k.keyPrefix)}…</div></td>
      <td>${escapeHtml(k.role)}</td>
      <td>${badgeMode(k.mode)}</td>
      <td>${k.rateLimit}/min</td>
      <td>${k.isActive ? '<span class="badge success">active</span>' : '<span class="badge error">revoked</span>'}</td>
      <td>${fmtTime(k.createdAt)}</td>
      <td>
        <button class="btn secondary sm" data-edit="${k.id}">編輯</button>
        ${k.isActive ? `<button class="btn danger sm" data-revoke="${k.id}">撤銷</button>` : ''}
      </td>
    </tr>`,
    )
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>API Keys</h2>
      <button class="btn" id="btn-new-key">新增 Key</button>
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>名稱</th><th>Role</th><th>Mode</th><th>Rate</th><th>狀態</th><th>建立</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="7" class="empty">暫無</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  document.getElementById('btn-new-key').onclick = () => showKeyForm();
  document.querySelectorAll('[data-edit]').forEach((b) => {
    const key = data.find((x) => x.id === b.dataset.edit);
    b.onclick = () => showKeyForm(key);
  });
  document.querySelectorAll('[data-revoke]').forEach((b) => {
    b.onclick = async () => {
      if (!confirm('確定撤銷此 key？')) return;
      await api(`/keys/${b.dataset.revoke}`, { method: 'DELETE' });
      renderKeys().catch(onErr);
    };
  });
}

function showKeyForm(existing) {
  const isEdit = Boolean(existing);
  state.modal = `
    <div class="modal-back" id="modal-back">
      <div class="modal" style="max-width:560px">
        <div class="modal-h">
          <strong>${isEdit ? '編輯 API Key' : '新增 API Key'}</strong>
          <button class="btn secondary sm" id="modal-close">關閉</button>
        </div>
        <div class="modal-b">
          <div class="form-grid">
            <label class="full">名稱<input id="k-name" value="${escapeHtml(existing?.name || '')}" /></label>
            <label>Role
              <select id="k-role">
                <option value="client">client</option>
                <option value="admin">admin</option>
              </select>
            </label>
            <label>Mode
              <select id="k-mode">
                <option value="safe">safe（對外安全）</option>
                <option value="agent">agent（全能力）</option>
              </select>
            </label>
            <label>Rate limit / min<input id="k-rate" type="number" value="${existing?.rateLimit ?? 60}" /></label>
            <label>Max turns（可空）<input id="k-turns" type="number" value="${existing?.maxTurns ?? ''}" /></label>
            <label>Timeout ms（可空）<input id="k-timeout" type="number" value="${existing?.timeoutMs ?? ''}" /></label>
            ${isEdit ? `<label class="full">啟用
              <select id="k-active"><option value="true">active</option><option value="false">revoked</option></select>
            </label>` : ''}
          </div>
          <div style="margin-top:14px;display:flex;gap:8px">
            <button class="btn" id="k-save">儲存</button>
          </div>
          <pre id="k-created" class="pre" style="display:none;margin-top:12px"></pre>
        </div>
      </div>
    </div>`;
  document.getElementById('modal-back')?.remove();
  document.getElementById('app').insertAdjacentHTML('beforeend', state.modal);
  document.getElementById('k-role').value = existing?.role || 'client';
  document.getElementById('k-mode').value = existing?.mode || 'safe';
  if (isEdit) document.getElementById('k-active').value = String(existing.isActive);
  document.getElementById('modal-close').onclick = () => document.getElementById('modal-back')?.remove();
  document.getElementById('k-save').onclick = async () => {
    const body = {
      name: document.getElementById('k-name').value.trim(),
      role: document.getElementById('k-role').value,
      mode: document.getElementById('k-mode').value,
      rateLimit: Number(document.getElementById('k-rate').value || 60),
      maxTurns: document.getElementById('k-turns').value
        ? Number(document.getElementById('k-turns').value)
        : null,
      timeoutMs: document.getElementById('k-timeout').value
        ? Number(document.getElementById('k-timeout').value)
        : null,
    };
    if (isEdit) {
      body.isActive = document.getElementById('k-active').value === 'true';
      await api(`/keys/${existing.id}`, { method: 'PATCH', body: JSON.stringify(body) });
      document.getElementById('modal-back')?.remove();
      renderKeys().catch(onErr);
    } else {
      const res = await api('/keys', { method: 'POST', body: JSON.stringify(body) });
      const box = document.getElementById('k-created');
      box.style.display = 'block';
      box.textContent = `已建立（明文 key 只顯示一次）:\n${res.data.key}`;
    }
  };
}

async function renderDocuments() {
  const data = await api('/documents?limit=50');
  const rows = (data.data || [])
    .map(
      (d) => `
    <tr>
      <td><button class="linkish" data-doc="${d.id}">${escapeHtml(d.originalName)}</button></td>
      <td>${escapeHtml(d.apiKey?.name || '')}</td>
      <td>${escapeHtml(d.mimeType)}</td>
      <td>${d.sizeBytes}</td>
      <td>${fmtTime(d.createdAt)}</td>
      <td><button class="btn danger sm" data-del="${d.id}">刪除</button></td>
    </tr>`,
    )
    .join('');
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar"><h2>文件</h2><span class="muted">共 ${data.total} 個</span></div>
    <div class="panel">
      <table>
        <thead><tr><th>檔名</th><th>API Key</th><th>MIME</th><th>大小</th><th>時間</th><th></th></tr></thead>
        <tbody>${rows || `<tr><td colspan="6" class="empty">暫無</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  document.querySelectorAll('[data-doc]').forEach((b) => {
    b.onclick = () => openDocument(b.dataset.doc);
  });
  document.querySelectorAll('[data-del]').forEach((b) => {
    b.onclick = async () => {
      if (!confirm('刪除此文件？')) return;
      await api(`/documents/${b.dataset.del}`, { method: 'DELETE' });
      renderDocuments().catch(onErr);
    };
  });
}

async function openDocument(id) {
  const { data: doc } = await api(`/documents/${id}`);
  document.getElementById('modal-back')?.remove();
  document.getElementById('app').insertAdjacentHTML(
    'beforeend',
    `
    <div class="modal-back" id="modal-back">
      <div class="modal">
        <div class="modal-h">
          <div>
            <strong>文件詳情</strong>
            <div class="muted">${escapeHtml(doc.originalName)} · ${escapeHtml(doc.mimeType)} · ${doc.sizeBytes} bytes</div>
          </div>
          <button class="btn secondary sm" id="modal-close">關閉</button>
        </div>
        <div class="modal-b">
          <div class="grid" style="margin-bottom:14px">
            <div class="card"><div class="label">API Key</div><div class="value" style="font-size:1rem">${escapeHtml(doc.apiKey?.name || '')}</div></div>
            <div class="card"><div class="label">Checksum</div><div class="value" style="font-size:.75rem;word-break:break-all">${escapeHtml(doc.checksumSha256 || '')}</div></div>
            <div class="card"><div class="label">建立時間</div><div class="value" style="font-size:1rem">${fmtTime(doc.createdAt)}</div></div>
          </div>
          <div class="block">
            <h4>解密內容預覽</h4>
            <div class="pre" id="doc-content">${escapeHtml(doc.content || '（無）')}</div>
            <button class="btn secondary sm" id="doc-copy">複製內容</button>
          </div>
        </div>
      </div>
    </div>`,
  );
  document.getElementById('modal-close').onclick = () => document.getElementById('modal-back')?.remove();
  document.getElementById('modal-back').onclick = (e) => {
    if (e.target.id === 'modal-back') document.getElementById('modal-back')?.remove();
  };
  document.getElementById('doc-copy').onclick = () => {
    navigator.clipboard.writeText(doc.content || '');
  };
}

async function renderAudit() {
  const data = await api('/audit-logs?limit=100');
  const rows = (data.data || [])
    .map(
      (a) => `
    <tr>
      <td>${fmtTime(a.createdAt)}</td>
      <td>${escapeHtml(a.action)}</td>
      <td>${escapeHtml(a.resource || '')} ${escapeHtml(a.resourceId || '')}</td>
      <td>${escapeHtml(a.apiKey?.name || '-')}</td>
      <td class="muted">${escapeHtml(a.metaJson || '')}</td>
    </tr>`,
    )
    .join('');
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar"><h2>Audit Logs</h2></div>
    <div class="panel">
      <table>
        <thead><tr><th>時間</th><th>Action</th><th>Resource</th><th>Key</th><th>Meta</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="5" class="empty">暫無</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
}

async function renderSettings() {
  const { data } = await api('/settings');
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar"><h2>安全設定</h2></div>
    <div class="panel">
      <div class="modal-b">
        <p class="muted">對外安全模式會強制 sandbox cwd、停 always-approve、限制 tools。全域開啟時即使 key 設 agent 也會降級為 safe。</p>
        <div class="switch-row">
          <input type="checkbox" id="s-global" ${data.globalSafeMode ? 'checked' : ''} />
          <label for="s-global">全域 Safe Mode（強制所有 key）</label>
        </div>
        <div class="form-grid">
          <label>Safe tools 模式
            <select id="s-tools">
              <option value="none">none（禁危險 tools）</option>
              <option value="readonly">readonly（只讀）</option>
            </select>
          </label>
          <label>Safe max turns<input id="s-turns" type="number" value="${data.safeMaxTurns}" /></label>
          <label>Safe timeout (ms)<input id="s-timeout" type="number" value="${data.safeTimeoutMs}" /></label>
          <label>預設 model<input id="s-model" value="${escapeHtml(data.defaultModel)}" /></label>
          <label class="full"><span class="switch-row" style="margin:0">
            <input type="checkbox" id="s-panel" ${data.adminPanelEnabled ? 'checked' : ''} />
            啟用 Admin Panel API
          </span></label>
        </div>
        <div style="margin-top:16px">
          <button class="btn" id="s-save">儲存設定</button>
        </div>
      </div>
    </div>
  `);
  bindShell();
  document.getElementById('s-tools').value = data.safeToolsMode || 'none';
  document.getElementById('s-save').onclick = async () => {
    try {
      await api('/settings', {
        method: 'PUT',
        body: JSON.stringify({
          globalSafeMode: document.getElementById('s-global').checked,
          safeToolsMode: document.getElementById('s-tools').value,
          safeMaxTurns: Number(document.getElementById('s-turns').value),
          safeTimeoutMs: Number(document.getElementById('s-timeout').value),
          defaultModel: document.getElementById('s-model').value.trim(),
          adminPanelEnabled: document.getElementById('s-panel').checked,
        }),
      });
      state.error = '';
      const bar = document.querySelector('#flash-error');
      if (bar) {
        bar.hidden = false;
        bar.style.background = 'rgba(34,197,94,.15)';
        bar.style.borderColor = 'rgba(34,197,94,.4)';
        bar.style.color = '#bbf7d0';
        bar.textContent = '設定已儲存';
        setTimeout(() => {
          bar.hidden = true;
          bar.removeAttribute('style');
        }, 2000);
      }
    } catch (e) {
      onErr(e);
    }
  };
}

async function renderSystem() {
  const { data } = await api('/system');
  const v = data.version || {};
  const updateBadge = v.updateAvailable
    ? '<span class="badge warn">有更新</span>'
    : '<span class="badge success">最新 / 未知</span>';
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>系統狀態</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="btn-check-update">檢查更新</button>
        <button class="btn sm" id="btn-one-click-update">一鍵更新並重啟</button>
      </div>
    </div>
    <div class="grid">
      <div class="card"><div class="label">Database</div><div class="value" style="font-size:1.2rem">${escapeHtml(data.database)}</div></div>
      <div class="card"><div class="label">Grok CLI</div><div class="value" style="font-size:1.2rem">${escapeHtml(data.grokCli)}</div></div>
      <div class="card"><div class="label">Concurrency</div><div class="value" style="font-size:1.2rem">${data.concurrency.active}/${data.concurrency.max}</div></div>
      <div class="card"><div class="label">版本</div><div class="value" style="font-size:1.1rem">${escapeHtml(v.current || '?')} ${updateBadge}</div></div>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>自我更新</strong><span class="muted">等同 CLI：gctoac update</span></div>
      <div class="modal-b">
        <p class="muted">會按安裝方式自動選擇：git pull、npm global、或 GitHub 安裝。更新後會重啟 gateway（約 10–30 秒），之後請重新整理本頁。</p>
        <div class="grid">
          <div class="card"><div class="label">目前版本</div><div class="value" style="font-size:1rem">${escapeHtml(v.current || '-')}</div></div>
          <div class="card"><div class="label">npm latest</div><div class="value" style="font-size:1rem">${escapeHtml(v.latestNpm || 'n/a')}</div></div>
          <div class="card"><div class="label">GitHub latest</div><div class="value" style="font-size:1rem">${escapeHtml(v.latestGithub || 'n/a')}</div></div>
          <div class="card"><div class="label">安裝方式</div><div class="value" style="font-size:.9rem">${escapeHtml(v.channel || '-')} · ${escapeHtml(v.installSource || '')}</div></div>
        </div>
        <pre id="update-log" class="pre" style="display:none;margin-top:12px"></pre>
      </div>
    </div>
    <div class="panel"><div class="modal-b"><pre class="pre">${escapeHtml(JSON.stringify({ env: data.env, version: v }, null, 2))}</pre></div></div>
  `);
  bindShell();
  document.getElementById('btn-check-update').onclick = async () => {
    try {
      const res = await api('/system/update-check');
      const d = res.data || {};
      alert(
        `目前: ${d.current}\nnpm: ${d.latestNpm || 'n/a'}\nGitHub: ${d.latestGithub || 'n/a'}\n可更新: ${d.updateAvailable ? '是' : '否'}`,
      );
      renderSystem().catch(onErr);
    } catch (e) {
      onErr(e);
    }
  };
  document.getElementById('btn-one-click-update').onclick = async () => {
    if (
      !confirm(
        '確定要一鍵更新並重啟 gateway？\n過程約 10–30 秒，期間 API 會短暫中斷。',
      )
    ) {
      return;
    }
    const logEl = document.getElementById('update-log');
    try {
      const btn = document.getElementById('btn-one-click-update');
      if (btn) btn.disabled = true;
      const res = await api('/system/update', {
        method: 'POST',
        body: JSON.stringify({ restart: true }),
      });
      if (logEl) {
        logEl.style.display = 'block';
        logEl.textContent =
          (res.data && (res.data.message || JSON.stringify(res.data, null, 2))) ||
          'Update scheduled';
      }
      alert(
        (res.data && res.data.message) ||
          '已排程更新，請約 30 秒後重新整理頁面。',
      );
    } catch (e) {
      onErr(e);
    }
  };
}

function bindShell() {
  document.querySelectorAll('[data-nav]').forEach((b) => {
    b.onclick = () => setPage(b.dataset.nav);
  });
  document.getElementById('btn-logout')?.addEventListener('click', () => logout(true));
}

function onErr(e) {
  console.error(e);
  showError(e.message || String(e));
}

async function render() {
  const app = document.getElementById('app');
  try {
    if (!state.key) {
      await renderLogin();
      return;
    }
    if (!state.me) await ensureMe();
    if (state.page === 'dashboard') await renderDashboard();
    else if (state.page === 'chats') await renderChats();
    else if (state.page === 'keys') await renderKeys();
    else if (state.page === 'documents') await renderDocuments();
    else if (state.page === 'audit') await renderAudit();
    else if (state.page === 'settings') await renderSettings();
    else if (state.page === 'system') await renderSystem();
    else await renderDashboard();
  } catch (e) {
    app.innerHTML = shell(`<div class="error-box">${escapeHtml(e.message)}</div>`);
    bindShell();
  }
}

render();
