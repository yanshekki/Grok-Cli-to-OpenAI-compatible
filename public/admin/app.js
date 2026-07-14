import {
  t,
  getLocale,
  setLocale,
  langSwitchHtml,
} from './i18n.js';

const API = '/admin/api';
const KEY_STORAGE = 'gog_admin_key';

/** @type {ReturnType<typeof setInterval> | null} */
let ddosTimer = null;
let ddosPaused = false;

const state = {
  key: sessionStorage.getItem(KEY_STORAGE) || '',
  page: 'dashboard',
  me: null,
  error: '',
  modal: null,
  chatFilter: {
    q: '',
    status: '',
    model: '',
    apiKeyId: '',
    from: '',
    to: '',
    policyMode: '',
    hasDocuments: '',
    limit: 50,
    offset: 0,
  },
  models: [],
  keys: [],
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
      if (state.page !== 'login') logout(false);
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
  if (page === 'chats') state.chatFilter.offset = 0;
  if (page !== 'ddos' && ddosTimer) {
    clearInterval(ddosTimer);
    ddosTimer = null;
  }
  render();
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
    return new Date(iso).toLocaleString(getLocale() === 'zh-Hant' ? 'zh-HK' : 'en-US');
  } catch {
    return iso;
  }
}

function fmtBytes(n) {
  if (n == null) return '-';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

function showError(msg) {
  state.error = msg;
  const box = document.querySelector('#flash-error');
  if (box) {
    box.hidden = !msg;
    box.textContent = msg;
  }
}

function badgeStatus(s) {
  const c =
    s === 'success' ? 'success' : s === 'error' || s === 'timeout' ? 'error' : 'pending';
  const label =
    s === 'success'
      ? t('status.success')
      : s === 'error'
        ? t('status.error')
        : s === 'timeout'
          ? t('status.timeout')
          : s === 'pending'
            ? t('status.pending')
            : s || '-';
  return `<span class="badge ${c}">${escapeHtml(label)}</span>`;
}

function badgeMode(m) {
  return `<span class="badge ${m === 'agent' ? 'agent' : 'safe'}">${escapeHtml(m || 'safe')}</span>`;
}

function isImageMime(m) {
  return String(m || '').toLowerCase().startsWith('image/');
}

function poweredByFooter() {
  return `
  <footer class="site-footer">
    <a class="powered-by" href="https://ysk.hk/" target="_blank" rel="noopener noreferrer">
      <img src="/admin/assets/logo.svg" alt="" width="22" height="22" />
      <span>${escapeHtml(t('common.powered'))} <strong>YSK Limited</strong></span>
    </a>
  </footer>`;
}

function shell(content) {
  return `
  <div class="app-shell">
    <div class="layout">
      <aside class="sidebar">
        <div class="brand">
          <img class="brand-logo" src="/admin/assets/logo.svg" alt="YSK" width="40" height="40" />
          <div class="brand-text">
            <strong>${escapeHtml(t('brand'))}</strong>
            <small>${escapeHtml(t('brandSub'))}</small>
          </div>
        </div>
        ${langSwitchHtml()}
        ${nav('dashboard', t('nav.dashboard'))}
        ${nav('chats', t('nav.chats'))}
        ${nav('keys', t('nav.keys'))}
        ${nav('documents', t('nav.documents'))}
        ${nav('audit', t('nav.audit'))}
        ${nav('settings', t('nav.settings'))}
        ${nav('usage', t('nav.usage'))}
        ${nav('ddos', t('nav.ddos'))}
        ${nav('pm2', t('nav.pm2'))}
        ${nav('system', t('nav.system'))}
        <div class="sidebar-foot">
          <div>${escapeHtml(state.me?.name || '')}</div>
          <div>${escapeHtml(state.me?.keyPrefix || '')}…</div>
          <button class="btn secondary sm" style="margin-top:10px;width:100%" id="btn-logout">${escapeHtml(t('logout'))}</button>
        </div>
      </aside>
      <main class="main">
        <div id="flash-error" class="error-box" ${state.error ? '' : 'hidden'}>${escapeHtml(state.error)}</div>
        ${content}
      </main>
    </div>
    ${poweredByFooter()}
  </div>
  ${state.modal || ''}
  `;
}

function nav(id, label) {
  return `<button class="nav-btn ${state.page === id ? 'active' : ''}" data-nav="${id}">${escapeHtml(label)}</button>`;
}

function bindShell() {
  document.querySelectorAll('[data-nav]').forEach((b) => {
    b.onclick = () => setPage(b.dataset.nav);
  });
  document.getElementById('btn-logout')?.addEventListener('click', () => logout(true));
  document.querySelectorAll('[data-lang]').forEach((b) => {
    b.onclick = () => {
      setLocale(b.dataset.lang);
      render().catch(onErr);
    };
  });
}

function onErr(e) {
  console.error(e);
  showError(e.message || String(e));
}

async function ensureMe() {
  if (!state.key) return false;
  const data = await api('/me');
  state.me = data.data;
  return true;
}

async function loadModels(refresh = false) {
  try {
    const res = await api(`/models${refresh ? '?refresh=1' : ''}`);
    state.models = res.data?.models || [];
    return res.data;
  } catch {
    state.models = [];
    return { models: [], source: 'fallback', defaultModel: '' };
  }
}

async function loadKeys() {
  try {
    const res = await api('/keys');
    state.keys = res.data || [];
  } catch {
    state.keys = [];
  }
}

async function renderLogin() {
  document.getElementById('app').innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-brand">
          <img src="/admin/assets/logo.svg" alt="YSK Limited" width="56" height="56" />
          <h1 class="brand-title">${escapeHtml(t('loginTitle'))}</h1>
        </div>
        ${langSwitchHtml()}
        <p>${t('loginHint')}</p>
        <div id="flash-error" class="error-box" ${state.error ? '' : 'hidden'}>${escapeHtml(state.error)}</div>
        <label>${escapeHtml(t('loginLabel'))}</label>
        <input id="login-key" type="password" placeholder="gk_live_..." autocomplete="off" />
        <button class="btn" id="btn-login" style="width:100%">${escapeHtml(t('loginBtn'))}</button>
      </div>
      ${poweredByFooter()}
    </div>
  `;
  document.querySelectorAll('[data-lang]').forEach((b) => {
    b.onclick = () => {
      setLocale(b.dataset.lang);
      renderLogin().catch(onErr);
    };
  });
  document.getElementById('btn-login').onclick = async () => {
    const key = document.getElementById('login-key').value.trim();
    if (!key) return showError(t('needKey'));
    state.key = key;
    try {
      await ensureMe();
      sessionStorage.setItem(KEY_STORAGE, key);
      state.page = 'dashboard';
      state.error = '';
      render().catch(onErr);
    } catch (e) {
      state.key = '';
      showError(e.message);
    }
  };
}

async function renderDashboard() {
  const res = await api('/stats');
  const d = res.data || {};
  const tot = d.totals || {};
  const rows = (d.recentChats || [])
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
    <div class="topbar"><h2>${escapeHtml(t('dash.title'))}</h2><span class="muted">${escapeHtml(t('dash.last24'))}：${tot.chats24h ?? 0}</span></div>
    <div class="grid">
      <div class="card"><div class="label">${escapeHtml(t('dash.totalChat'))}</div><div class="value">${tot.chats ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('dash.success'))}</div><div class="value">${tot.success ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('dash.errors'))}</div><div class="value">${tot.errors ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('dash.docs'))}</div><div class="value">${tot.documents ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('dash.keys'))}</div><div class="value">${tot.activeKeys ?? 0}/${tot.totalKeys ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('dash.concurrent'))}</div><div class="value">${d.concurrency?.active ?? 0}/${d.concurrency?.max ?? 0}</div></div>
    </div>
    <div class="panel">
      <div class="panel-h"><strong>${escapeHtml(t('dash.recent'))}</strong></div>
      <table>
        <thead><tr><th>${escapeHtml(t('chats.request'))}</th><th>Model</th><th>Status</th><th>Mode</th><th>${escapeHtml(t('chats.duration'))}</th><th>${escapeHtml(t('chats.time'))}</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="6" class="empty">${escapeHtml(t('dash.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  document.querySelectorAll('[data-chat]').forEach((b) => {
    b.onclick = () => openChat(b.dataset.chat);
  });
}

function attachChips(docs) {
  if (!docs?.length) return `<span class="muted">—</span>`;
  return docs
    .map((d) => {
      const img = isImageMime(d.mimeType);
      return `<span class="chip ${img ? 'img' : ''}" title="${escapeHtml(d.mimeType)}">${escapeHtml(d.originalName || t('chats.file'))}</span>`;
    })
    .join(' ');
}

async function renderChats() {
  await Promise.all([loadModels(), loadKeys()]);
  const f = state.chatFilter;
  const q = new URLSearchParams();
  q.set('limit', String(f.limit));
  q.set('offset', String(f.offset));
  if (f.status) q.set('status', f.status);
  if (f.model) q.set('model', f.model);
  if (f.apiKeyId) q.set('apiKeyId', f.apiKeyId);
  if (f.q) q.set('q', f.q);
  if (f.from) q.set('from', new Date(f.from).toISOString());
  if (f.to) {
    const end = new Date(f.to);
    end.setHours(23, 59, 59, 999);
    q.set('to', end.toISOString());
  }
  if (f.policyMode) q.set('policyMode', f.policyMode);
  if (f.hasDocuments !== '') q.set('hasDocuments', f.hasDocuments);

  const data = await api(`/chats?${q}`);
  const total = data.total || 0;
  const page = Math.floor(f.offset / f.limit) + 1;
  const pages = Math.max(1, Math.ceil(total / f.limit));

  const modelOpts = [
    `<option value="">${escapeHtml(t('chats.allModels'))}</option>`,
    ...state.models.map(
      (m) =>
        `<option value="${escapeHtml(m)}" ${f.model === m ? 'selected' : ''}>${escapeHtml(m)}</option>`,
    ),
  ].join('');

  const keyOpts = [
    `<option value="">${escapeHtml(t('chats.allKeys'))}</option>`,
    ...state.keys.map(
      (k) =>
        `<option value="${k.id}" ${f.apiKeyId === k.id ? 'selected' : ''}>${escapeHtml(k.name)} (${escapeHtml(k.keyPrefix)})</option>`,
    ),
  ].join('');

  const rows = (data.items || [])
    .map(
      (c) => `
    <tr>
      <td><button class="linkish" data-chat="${c.id}">${escapeHtml(c.requestId)}</button></td>
      <td>${escapeHtml(c.apiKey?.name || '')}<div class="muted">${escapeHtml(c.apiKey?.keyPrefix || '')}</div></td>
      <td>${escapeHtml(c.model)}</td>
      <td>${badgeStatus(c.status)} ${badgeMode(c.policyMode || '-')}</td>
      <td>${attachChips(c.documents)} ${c.documentCount ? `<span class="muted">×${c.documentCount}</span>` : ''}</td>
      <td><div class="muted">${escapeHtml(c.promptPreview)}</div></td>
      <td><div class="muted">${escapeHtml(c.contentPreview)}</div></td>
      <td>${fmtTime(c.createdAt)}</td>
    </tr>`,
    )
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('chats.title'))}</h2>
      <span class="muted">${escapeHtml(t('chats.total'))} ${total} · ${escapeHtml(t('chats.decrypt'))}</span>
    </div>
    <div class="panel">
      <div class="filter-bar">
        <label>${escapeHtml(t('chats.search'))}
          <input class="wide" type="search" id="f-q" value="${escapeHtml(f.q)}" placeholder="${escapeHtml(t('chats.search'))}" />
        </label>
        <label>${escapeHtml(t('chats.status'))}
          <select id="f-status">
            <option value="">${escapeHtml(t('chats.allStatus'))}</option>
            ${['success', 'error', 'timeout', 'pending']
              .map(
                (s) =>
                  `<option value="${s}" ${f.status === s ? 'selected' : ''}>${s}</option>`,
              )
              .join('')}
          </select>
        </label>
        <label>${escapeHtml(t('chats.model'))}
          <select id="f-model">${modelOpts}</select>
        </label>
        <label>${escapeHtml(t('chats.apiKey'))}
          <select id="f-key">${keyOpts}</select>
        </label>
        <label>${escapeHtml(t('chats.mode'))}
          <select id="f-mode">
            <option value="">${escapeHtml(t('chats.allModes'))}</option>
            <option value="safe" ${f.policyMode === 'safe' ? 'selected' : ''}>safe</option>
            <option value="agent" ${f.policyMode === 'agent' ? 'selected' : ''}>agent</option>
          </select>
        </label>
        <label>${escapeHtml(t('chats.from'))}
          <input type="date" id="f-from" value="${escapeHtml(f.from)}" />
        </label>
        <label>${escapeHtml(t('chats.to'))}
          <input type="date" id="f-to" value="${escapeHtml(f.to)}" />
        </label>
        <label class="check">
          <input type="checkbox" id="f-docs" ${f.hasDocuments === 'true' ? 'checked' : ''} />
          ${escapeHtml(t('chats.hasDocs'))}
        </label>
        <label>${escapeHtml(t('chats.perPage'))}
          <select id="f-limit">
            ${[20, 50, 100]
              .map(
                (n) =>
                  `<option value="${n}" ${f.limit === n ? 'selected' : ''}>${n}</option>`,
              )
              .join('')}
          </select>
        </label>
        <button class="btn sm" id="btn-filter">${escapeHtml(t('chats.filter'))}</button>
        <button class="btn secondary sm" id="btn-reset">${escapeHtml(t('chats.reset'))}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(t('chats.request'))}</th>
            <th>${escapeHtml(t('chats.apiKey'))}</th>
            <th>Model</th>
            <th>${escapeHtml(t('chats.status'))}</th>
            <th>${escapeHtml(t('chats.attachments'))}</th>
            <th>${escapeHtml(t('chats.prompt'))}</th>
            <th>${escapeHtml(t('chats.response'))}</th>
            <th>${escapeHtml(t('chats.time'))}</th>
          </tr>
        </thead>
        <tbody>${rows || `<tr><td colspan="8" class="empty">${escapeHtml(t('common.empty'))}</td></tr>`}</tbody>
      </table>
      <div class="pagination">
        <span class="muted">${escapeHtml(t('chats.page'))} ${page} / ${pages} · ${total}</span>
        <div class="pages">
          <button class="btn secondary sm" id="pg-prev" ${f.offset <= 0 ? 'disabled' : ''}>${escapeHtml(t('chats.prev'))}</button>
          <button class="btn secondary sm" id="pg-next" ${f.offset + f.limit >= total ? 'disabled' : ''}>${escapeHtml(t('chats.next'))}</button>
        </div>
      </div>
    </div>
  `);
  bindShell();

  const applyFilter = () => {
    state.chatFilter.q = document.getElementById('f-q').value.trim();
    state.chatFilter.status = document.getElementById('f-status').value;
    state.chatFilter.model = document.getElementById('f-model').value;
    state.chatFilter.apiKeyId = document.getElementById('f-key').value;
    state.chatFilter.policyMode = document.getElementById('f-mode').value;
    state.chatFilter.from = document.getElementById('f-from').value;
    state.chatFilter.to = document.getElementById('f-to').value;
    state.chatFilter.hasDocuments = document.getElementById('f-docs').checked
      ? 'true'
      : '';
    state.chatFilter.limit = Number(document.getElementById('f-limit').value) || 50;
    state.chatFilter.offset = 0;
    renderChats().catch(onErr);
  };

  document.getElementById('btn-filter').onclick = applyFilter;
  document.getElementById('f-q').onkeydown = (e) => {
    if (e.key === 'Enter') applyFilter();
  };
  document.getElementById('btn-reset').onclick = () => {
    state.chatFilter = {
      q: '',
      status: '',
      model: '',
      apiKeyId: '',
      from: '',
      to: '',
      policyMode: '',
      hasDocuments: '',
      limit: 50,
      offset: 0,
    };
    renderChats().catch(onErr);
  };
  document.getElementById('pg-prev').onclick = () => {
    state.chatFilter.offset = Math.max(0, f.offset - f.limit);
    renderChats().catch(onErr);
  };
  document.getElementById('pg-next').onclick = () => {
    state.chatFilter.offset = f.offset + f.limit;
    renderChats().catch(onErr);
  };
  document.querySelectorAll('[data-chat]').forEach((b) => {
    b.onclick = () => openChat(b.dataset.chat);
  });
}

async function openChat(id) {
  const { data } = await api(`/chats/${id}`);
  const r = data.response || {};
  const docs = data.documents || [];

  let attachHtml = `<p class="muted">${escapeHtml(t('chats.noAttach'))}</p>`;
  if (docs.length) {
    const parts = [];
    for (const d of docs) {
      let preview = '';
      if (isImageMime(d.mimeType)) {
        try {
          const full = await api(`/documents/${d.id}`);
          if (full.data?.imageDataUrl) {
            preview = `<img class="preview" src="${full.data.imageDataUrl}" alt="${escapeHtml(d.originalName)}" />`;
          }
        } catch {
          preview = `<span class="muted">${escapeHtml(t('chats.previewFailed'))}</span>`;
        }
      }
      parts.push(`
        <div class="attach-item">
          <div style="flex:1;min-width:0">
            <strong>${escapeHtml(d.originalName)}</strong>
            <div class="muted">${escapeHtml(d.mimeType)} · ${fmtBytes(d.sizeBytes)}</div>
            ${preview}
          </div>
          <button class="btn secondary sm" data-open-doc="${d.id}">${escapeHtml(t('chats.openFile'))}</button>
        </div>`);
    }
    attachHtml = `<div class="attach-list">${parts.join('')}</div>`;
  }

  state.modal = `
    <div class="modal-back" id="modal-back">
      <div class="modal">
        <div class="modal-h">
          <div>
            <strong>${escapeHtml(t('chats.detail'))}</strong>
            <div class="muted">${escapeHtml(data.requestId)} · ${badgeStatus(data.status)} ${badgeMode(data.policyMode || '-')}</div>
          </div>
          <button class="btn secondary sm" id="modal-close">${escapeHtml(t('chats.close'))}</button>
        </div>
        <div class="modal-b">
          <div class="grid" style="margin-bottom:14px">
            <div class="card"><div class="label">Model</div><div class="value" style="font-size:1rem">${escapeHtml(data.model)}</div></div>
            <div class="card"><div class="label">${escapeHtml(t('chats.duration'))}</div><div class="value" style="font-size:1rem">${data.durationMs ?? '-'} ms</div></div>
            <div class="card"><div class="label">API Key</div><div class="value" style="font-size:1rem">${escapeHtml(data.apiKey?.name || '')}</div></div>
            <div class="card"><div class="label">${escapeHtml(t('chats.stream'))}</div><div class="value" style="font-size:1rem">${data.stream ? 'yes' : 'no'}</div></div>
          </div>
          ${data.errorMessage ? `<div class="error-box">${escapeHtml(data.errorMessage)}</div>` : ''}
          <div class="block">
            <h4>${escapeHtml(t('chats.attachments'))}</h4>
            ${attachHtml}
          </div>
          <div class="block">
            <h4>Prompt</h4>
            <div class="pre">${escapeHtml(data.prompt)}</div>
            <button class="btn secondary sm" data-copy="prompt">${escapeHtml(t('chats.copyPrompt'))}</button>
          </div>
          <div class="block">
            <h4>${escapeHtml(t('chats.reasoning'))}</h4>
            <div class="pre">${escapeHtml(r.reasoning_content || t('chats.none'))}</div>
          </div>
          <div class="block">
            <h4>${escapeHtml(t('chats.content'))}</h4>
            <div class="pre">${escapeHtml(r.content || t('chats.none'))}</div>
            <button class="btn secondary sm" data-copy="content">${escapeHtml(t('chats.copyContent'))}</button>
          </div>
          <div class="block">
            <h4>${escapeHtml(t('chats.raw'))}</h4>
            <div class="pre">${escapeHtml(r.raw || '')}</div>
          </div>
          <div class="muted">IP: ${escapeHtml(data.ip || '-')} · UA: ${escapeHtml(data.userAgent || '-')} · ${fmtTime(data.createdAt)}</div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal-back')?.remove();
  document.getElementById('app').insertAdjacentHTML('beforeend', state.modal);
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
  document.querySelectorAll('[data-open-doc]').forEach((b) => {
    b.onclick = () => openDocument(b.dataset.openDoc);
  });
}

async function renderKeys() {
  let usageMap = {};
  try {
    const u = await api('/usage');
    for (const row of u.data?.perKey || []) {
      usageMap[row.apiKeyId] = row;
    }
  } catch {
    /* ignore */
  }
  const { data } = await api('/keys');
  const rows = data
    .map((k) => {
      const u = usageMap[k.id];
      const reqs = u?.requests ?? '—';
      const util = u ? Math.round((u.utilization || 0) * 100) : 0;
      const wl = k.ipWhitelist || [];
      const wlLabel = wl.length ? `${wl.length} IP` : t('keys.ipAll');
      return `
    <tr>
      <td>${escapeHtml(k.name)}<div class="muted">${escapeHtml(k.keyPrefix)}…</div></td>
      <td>${escapeHtml(k.role)}</td>
      <td>${badgeMode(k.mode)}</td>
      <td>${k.rateLimit}/min</td>
      <td title="${escapeHtml(wl.join(', '))}">${escapeHtml(wlLabel)}</td>
      <td>
        <div>${reqs} <span class="muted">(${escapeHtml(t('keys.usage24'))})</span></div>
        <div class="usage-bar ${util > 80 ? 'warn' : ''}"><span style="width:${util}%"></span></div>
      </td>
      <td>${k.isActive ? `<span class="badge success">${escapeHtml(t('common.active'))}</span>` : `<span class="badge error">${escapeHtml(t('common.revoked'))}</span>`}</td>
      <td>${fmtTime(k.createdAt)}</td>
      <td>
        <button class="btn secondary sm" data-edit="${k.id}">${escapeHtml(t('keys.edit'))}</button>
        ${k.isActive ? `<button class="btn danger sm" data-revoke="${k.id}">${escapeHtml(t('keys.revoke'))}</button>` : ''}
      </td>
    </tr>`;
    })
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('keys.title'))}</h2>
      <button class="btn" id="btn-new-key">${escapeHtml(t('keys.new'))}</button>
    </div>
    <div class="panel">
      <table>
        <thead><tr>
          <th>${escapeHtml(t('keys.name'))}</th><th>${escapeHtml(t('keys.role'))}</th>
          <th>${escapeHtml(t('keys.mode'))}</th><th>${escapeHtml(t('keys.rate'))}</th>
          <th>${escapeHtml(t('keys.ipWhitelistCol'))}</th>
          <th>${escapeHtml(t('keys.usage24'))}</th><th>${escapeHtml(t('keys.status'))}</th>
          <th>${escapeHtml(t('keys.created'))}</th><th></th>
        </tr></thead>
        <tbody>${rows || `<tr><td colspan="9" class="empty">${escapeHtml(t('keys.empty'))}</td></tr>`}</tbody>
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
      if (!confirm(t('keys.confirmRevoke'))) return;
      await api(`/keys/${b.dataset.revoke}`, { method: 'DELETE' });
      renderKeys().catch(onErr);
    };
  });
}

function showKeyForm(existing) {
  const isEdit = Boolean(existing);
  const wlText = (existing?.ipWhitelist || []).join('\n');
  state.modal = `
    <div class="modal-back" id="modal-back">
      <div class="modal" style="max-width:560px">
        <div class="modal-h">
          <strong>${isEdit ? t('keys.edit') : t('keys.new')}</strong>
          <button class="btn secondary sm" id="modal-close">${escapeHtml(t('common.cancel'))}</button>
        </div>
        <div class="modal-b">
          <div class="form-grid">
            <label class="full">${escapeHtml(t('keys.name'))}<input id="k-name" value="${escapeHtml(existing?.name || '')}" /></label>
            <label>${escapeHtml(t('keys.role'))}
              <select id="k-role">
                <option value="client">${escapeHtml(t('keys.roleClient'))}</option>
                <option value="admin">${escapeHtml(t('keys.roleAdmin'))}</option>
              </select>
            </label>
            <label>${escapeHtml(t('keys.mode'))}
              <select id="k-mode">
                <option value="safe">${escapeHtml(t('keys.modeSafe'))}</option>
                <option value="agent">${escapeHtml(t('keys.modeAgent'))}</option>
              </select>
            </label>
            <label>${escapeHtml(t('keys.rate'))}<input id="k-rate" type="number" value="${existing?.rateLimit ?? 60}" /></label>
            <label>${escapeHtml(t('keys.maxTurns'))}<input id="k-turns" type="number" value="${existing?.maxTurns ?? ''}" /></label>
            <label>${escapeHtml(t('keys.timeoutMs'))}<input id="k-timeout" type="number" value="${existing?.timeoutMs ?? ''}" /></label>
            <label class="full">${escapeHtml(t('keys.ipWhitelist'))}
              <textarea id="k-ip" rows="4" placeholder="127.0.0.1&#10;203.0.113.0/24">${escapeHtml(wlText)}</textarea>
              <span class="muted" style="font-weight:500;text-transform:none">${escapeHtml(t('keys.ipWhitelistHint'))}</span>
            </label>
            ${
              isEdit
                ? `<label class="full">${escapeHtml(t('keys.status'))}
              <select id="k-active"><option value="true">${escapeHtml(t('common.active'))}</option><option value="false">${escapeHtml(t('common.revoked'))}</option></select>
            </label>`
                : ''
            }
          </div>
          <div style="margin-top:14px"><button class="btn" id="k-save">${escapeHtml(t('common.save'))}</button></div>
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
    const ipWhitelist = document
      .getElementById('k-ip')
      .value.split(/[\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean);
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
      ipWhitelist,
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
      box.textContent = `${t('keys.keyOnce')}\n${res.data?.key || JSON.stringify(res.data)}`;
    }
  };
}

async function renderDocuments() {
  const data = await api('/documents?limit=50');
  const rows = (data.data || [])
    .map(
      (d) => `
    <tr>
      <td><button class="linkish" data-doc="${d.id}">${escapeHtml(d.originalName)}</button>
        ${isImageMime(d.mimeType) ? `<span class="chip img">${escapeHtml(t('chats.img'))}</span>` : ''}</td>
      <td>${escapeHtml(d.apiKey?.name || '')}</td>
      <td>${escapeHtml(d.mimeType)}</td>
      <td>${fmtBytes(d.sizeBytes)}</td>
      <td>${fmtTime(d.createdAt)}</td>
      <td><button class="btn danger sm" data-del="${d.id}">${escapeHtml(t('docs.delete'))}</button></td>
    </tr>`,
    )
    .join('');
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar"><h2>${escapeHtml(t('docs.title'))}</h2><span class="muted">${escapeHtml(t('docs.total'))} ${data.total}</span></div>
    <div class="panel">
      <table>
        <thead><tr>
          <th>${escapeHtml(t('docs.file'))}</th><th>API Key</th><th>${escapeHtml(t('docs.mime'))}</th>
          <th>${escapeHtml(t('docs.size'))}</th><th>${escapeHtml(t('docs.time'))}</th><th></th>
        </tr></thead>
        <tbody>${rows || `<tr><td colspan="6" class="empty">${escapeHtml(t('docs.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  document.querySelectorAll('[data-doc]').forEach((b) => {
    b.onclick = () => openDocument(b.dataset.doc);
  });
  document.querySelectorAll('[data-del]').forEach((b) => {
    b.onclick = async () => {
      if (!confirm(t('docs.confirmDel'))) return;
      await api(`/documents/${b.dataset.del}`, { method: 'DELETE' });
      renderDocuments().catch(onErr);
    };
  });
}

async function openDocument(id) {
  const { data: doc } = await api(`/documents/${id}`);
  document.getElementById('modal-back')?.remove();
  const preview = doc.imageDataUrl
    ? `<img class="preview" src="${doc.imageDataUrl}" alt="" style="max-width:100%;margin-bottom:12px" />`
    : `<div class="pre" id="doc-content">${escapeHtml(doc.content || t('chats.none'))}</div>`;
  document.getElementById('app').insertAdjacentHTML(
    'beforeend',
    `
    <div class="modal-back" id="modal-back">
      <div class="modal">
        <div class="modal-h">
          <div>
            <strong>${escapeHtml(t('docs.detail'))}</strong>
            <div class="muted">${escapeHtml(doc.originalName)} · ${escapeHtml(doc.mimeType)} · ${fmtBytes(doc.sizeBytes)}</div>
          </div>
          <button class="btn secondary sm" id="modal-close">${escapeHtml(t('chats.close'))}</button>
        </div>
        <div class="modal-b">
          <div class="block">
            <h4>${escapeHtml(t('docs.preview'))}</h4>
            ${preview}
            ${doc.imageDataUrl ? '' : `<button class="btn secondary sm" id="doc-copy">${escapeHtml(t('docs.copy'))}</button>`}
          </div>
        </div>
      </div>
    </div>`,
  );
  document.getElementById('modal-close').onclick = () =>
    document.getElementById('modal-back')?.remove();
  document.getElementById('modal-back').onclick = (e) => {
    if (e.target.id === 'modal-back') document.getElementById('modal-back')?.remove();
  };
  document.getElementById('doc-copy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(doc.content || '');
  });
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
    <div class="topbar"><h2>${escapeHtml(t('audit.title'))}</h2></div>
    <div class="panel">
      <table>
        <thead><tr>
          <th>${escapeHtml(t('chats.time'))}</th><th>${escapeHtml(t('audit.action'))}</th>
          <th>${escapeHtml(t('audit.resource'))}</th><th>${escapeHtml(t('audit.key'))}</th>
          <th>${escapeHtml(t('audit.meta'))}</th>
        </tr></thead>
        <tbody>${rows || `<tr><td colspan="5" class="empty">${escapeHtml(t('audit.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
}

async function renderSettings() {
  const [{ data }, catalog] = await Promise.all([api('/settings'), loadModels()]);
  const modelOpts = (catalog.models || state.models || [])
    .map(
      (m) =>
        `<option value="${escapeHtml(m)}" ${data.defaultModel === m ? 'selected' : ''}>${escapeHtml(m)}</option>`,
    )
    .join('');
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('settings.title'))}</h2>
      <button class="btn secondary sm" id="btn-refresh-models">${escapeHtml(t('settings.refreshModels'))}</button>
    </div>
    <div class="panel">
      <div class="modal-b">
        <p class="muted">${escapeHtml(t('settings.hint'))}</p>
        <div class="switch-row">
          <input type="checkbox" id="s-global" ${data.globalSafeMode ? 'checked' : ''} />
          <label for="s-global">${escapeHtml(t('settings.globalSafe'))}</label>
        </div>
        <div class="form-grid">
          <label>${escapeHtml(t('settings.tools'))}
            <select id="s-tools">
              <option value="none">${escapeHtml(t('settings.toolsNone'))}</option>
              <option value="readonly">${escapeHtml(t('settings.toolsReadonly'))}</option>
            </select>
          </label>
          <label>${escapeHtml(t('settings.maxTurns'))}<input id="s-turns" type="number" value="${data.safeMaxTurns}" /></label>
          <label>${escapeHtml(t('settings.timeout'))}<input id="s-timeout" type="number" value="${data.safeTimeoutMs}" /></label>
          <label class="full">${escapeHtml(t('settings.defaultModel'))}
            <select id="s-model">${modelOpts || `<option value="${escapeHtml(data.defaultModel)}">${escapeHtml(data.defaultModel)}</option>`}</select>
            <span class="muted" style="font-weight:500;text-transform:none;margin-top:4px">${escapeHtml(t('settings.modelSource'))}${catalog.source ? ` · ${catalog.source}` : ''}</span>
          </label>
          <label class="full"><span class="switch-row" style="margin:0">
            <input type="checkbox" id="s-panel" ${data.adminPanelEnabled ? 'checked' : ''} />
            ${escapeHtml(t('settings.panel'))}
          </span></label>
        </div>
        <div style="margin-top:16px">
          <button class="btn" id="s-save">${escapeHtml(t('settings.save'))}</button>
        </div>
      </div>
    </div>
  `);
  bindShell();
  document.getElementById('s-tools').value = data.safeToolsMode || 'none';
  document.getElementById('btn-refresh-models').onclick = async () => {
    await loadModels(true);
    renderSettings().catch(onErr);
  };
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
      const bar = document.querySelector('#flash-error');
      if (bar) {
        bar.hidden = false;
        bar.style.background = 'rgba(16,185,129,.12)';
        bar.style.borderColor = 'rgba(16,185,129,.35)';
        bar.style.color = '#047857';
        bar.textContent = t('settings.saved');
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

async function renderUsage() {
  const { data } = await api('/usage');
  const tot = data.totals || {};
  const limits = data.limits || {};
  const modelRows = (data.byModel || [])
    .map(
      (m) =>
        `<tr><td>${escapeHtml(m.model)}</td><td>${m.requests}</td></tr>`,
    )
    .join('');
  const keyRows = (data.perKey || [])
    .map((k) => {
      const util = Math.round((k.utilization || 0) * 100);
      return `<tr>
        <td>${escapeHtml(k.name)}<div class="muted">${escapeHtml(k.keyPrefix)}</div></td>
        <td>${k.requests}</td>
        <td>${k.rateLimit}/min</td>
        <td>
          <div>${util}%</div>
          <div class="usage-bar ${util > 80 ? 'warn' : ''}"><span style="width:${util}%"></span></div>
        </td>
        <td>${k.isActive ? badgeStatus('success') : badgeStatus('error')}</td>
      </tr>`;
    })
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('usage.title'))}</h2>
      <button class="btn secondary sm" id="btn-usage-refresh">${escapeHtml(t('usage.refresh'))}</button>
    </div>
    <p class="muted">${escapeHtml(t('usage.window'))}: ${fmtTime(data.from)} → ${fmtTime(data.to)} (${data.windowMinutes} min)</p>
    <div class="grid">
      <div class="card"><div class="label">${escapeHtml(t('usage.requests'))}</div><div class="value">${tot.requests ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('usage.success'))}</div><div class="value">${tot.success ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('usage.errors'))}</div><div class="value">${tot.errors ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('usage.errorRate'))}</div><div class="value">${Math.round((tot.errorRate || 0) * 100)}%</div></div>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${escapeHtml(t('usage.limits'))}</strong></div>
      <div class="modal-b">
        <div class="grid">
          <div class="card"><div class="label">${escapeHtml(t('usage.global'))}</div><div class="value" style="font-size:1rem">${limits.globalMax} / ${limits.globalWindowMs}ms</div></div>
          <div class="card"><div class="label">${escapeHtml(t('usage.ipMax'))}</div><div class="value" style="font-size:1rem">${limits.ipMax}</div></div>
          <div class="card"><div class="label">${escapeHtml(t('usage.burst'))}</div><div class="value" style="font-size:1rem">${limits.chatBurstMax}</div></div>
          <div class="card"><div class="label">${escapeHtml(t('usage.block'))}</div><div class="value" style="font-size:1rem">${limits.blockFailedAuthThreshold}</div></div>
          <div class="card"><div class="label">${escapeHtml(t('usage.concurrent'))}</div><div class="value" style="font-size:1rem">${limits.grokMaxConcurrent}</div></div>
        </div>
      </div>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${escapeHtml(t('usage.byModel'))}</strong></div>
      <table>
        <thead><tr><th>Model</th><th>${escapeHtml(t('usage.requests'))}</th></tr></thead>
        <tbody>${modelRows || `<tr><td colspan="2" class="empty">${escapeHtml(t('common.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
    <div class="panel">
      <div class="panel-h"><strong>${escapeHtml(t('usage.byKey'))}</strong></div>
      <table>
        <thead><tr>
          <th>${escapeHtml(t('keys.name'))}</th>
          <th>${escapeHtml(t('usage.requests'))}</th>
          <th>${escapeHtml(t('usage.rateLimit'))}</th>
          <th>${escapeHtml(t('usage.util'))}</th>
          <th>${escapeHtml(t('keys.status'))}</th>
        </tr></thead>
        <tbody>${keyRows || `<tr><td colspan="5" class="empty">${escapeHtml(t('common.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();
  document.getElementById('btn-usage-refresh').onclick = () => renderUsage().catch(onErr);
}

async function renderSystem() {
  const { data } = await api('/system');
  const v = data.version || {};
  const updateBadge = v.updateAvailable
    ? '<span class="badge warn">update</span>'
    : '<span class="badge success">ok</span>';
  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('system.title'))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="btn-check-update">${escapeHtml(t('system.checkUpdate'))}</button>
        <button class="btn sm" id="btn-one-click-update">${escapeHtml(t('system.oneClick'))}</button>
      </div>
    </div>
    <div class="grid">
      <div class="card"><div class="label">Database</div><div class="value" style="font-size:1.2rem">${escapeHtml(data.database)}</div></div>
      <div class="card"><div class="label">Grok CLI</div><div class="value" style="font-size:1.2rem">${escapeHtml(data.grokCli)}</div></div>
      <div class="card"><div class="label">Concurrency</div><div class="value" style="font-size:1.2rem">${data.concurrency.active}/${data.concurrency.max}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('system.current'))}</div><div class="value" style="font-size:1.1rem">${escapeHtml(v.current || '?')} ${updateBadge}</div></div>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${escapeHtml(t('system.selfUpdate'))}</strong></div>
      <div class="modal-b">
        <p class="muted">${escapeHtml(t('system.selfHint'))}</p>
        <div class="grid">
          <div class="card"><div class="label">${escapeHtml(t('system.current'))}</div><div class="value" style="font-size:1rem">${escapeHtml(v.current || '-')}</div></div>
          <div class="card"><div class="label">${escapeHtml(t('system.npm'))}</div><div class="value" style="font-size:1rem">${escapeHtml(v.latestNpm || 'n/a')}</div></div>
          <div class="card"><div class="label">${escapeHtml(t('system.github'))}</div><div class="value" style="font-size:1rem">${escapeHtml(v.latestGithub || 'n/a')}</div></div>
          <div class="card"><div class="label">${escapeHtml(t('system.install'))}</div><div class="value" style="font-size:.9rem">${escapeHtml(v.channel || '-')} · ${escapeHtml(v.installSource || '')}</div></div>
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
        `current: ${d.current}\nnpm: ${d.latestNpm || 'n/a'}\nGitHub: ${d.latestGithub || 'n/a'}\nupdate: ${d.updateAvailable}`,
      );
      renderSystem().catch(onErr);
    } catch (e) {
      onErr(e);
    }
  };
  document.getElementById('btn-one-click-update').onclick = async () => {
    if (!confirm(t('system.confirmUpdate'))) return;
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
      alert((res.data && res.data.message) || t('system.scheduled'));
    } catch (e) {
      onErr(e);
    }
  };
}


async function renderDdos() {
  if (ddosTimer) {
    clearInterval(ddosTimer);
    ddosTimer = null;
  }
  const [conn, bl, st] = await Promise.all([
    api('/ddos/connections'),
    api('/ddos/blacklist'),
    api('/ddos/stats'),
  ]);
  const active = conn.data?.active || [];
  const recent = conn.data?.recent || [];
  const bans = bl.data || [];
  const stats = st.data || {};

  const liveRows = active
    .map(
      (c) => `
    <tr>
      <td>${escapeHtml(c.ip)}</td>
      <td>${escapeHtml(c.method)}</td>
      <td class="muted" style="max-width:220px;word-break:break-all">${escapeHtml(c.path)}</td>
      <td>${escapeHtml(c.apiKeyName || c.apiKeyPrefix || '—')}</td>
      <td><span class="badge pending">${escapeHtml(t('status.active'))}</span></td>
      <td>${Date.now() - c.startedAt} ms</td>
      <td><button class="btn danger sm" data-ban="${escapeHtml(c.ip)}">${escapeHtml(t('ddos.ban'))}</button></td>
    </tr>`,
    )
    .join('');

  const recentRows = recent
    .slice(0, 40)
    .map(
      (c) => `
    <tr>
      <td>${escapeHtml(c.ip)}</td>
      <td>${escapeHtml(c.method)} ${escapeHtml(c.path)}</td>
      <td>${c.statusCode ?? '—'}</td>
      <td>${c.durationMs ?? '—'} ms</td>
      <td><button class="btn danger sm" data-ban="${escapeHtml(c.ip)}">${escapeHtml(t('ddos.ban'))}</button></td>
    </tr>`,
    )
    .join('');

  const banRows = bans
    .map(
      (b) => `
    <tr>
      <td>${escapeHtml(b.ip)}</td>
      <td>${escapeHtml(b.reason || '—')}</td>
      <td>${escapeHtml(b.source || '')}</td>
      <td>${b.expiresAt ? fmtTime(b.expiresAt) : escapeHtml(t('ddos.permanent'))}</td>
      <td><button class="btn secondary sm" data-unban="${escapeHtml(b.ip)}">${escapeHtml(t('ddos.unban'))}</button></td>
    </tr>`,
    )
    .join('');

  const topIps = (stats.topIps || [])
    .map((x) => `<tr><td>${escapeHtml(x.ip)}</td><td>${x.requests}</td>
      <td><button class="btn danger sm" data-ban="${escapeHtml(x.ip)}">${escapeHtml(t('ddos.ban'))}</button></td></tr>`)
    .join('');

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('ddos.title'))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="ddos-refresh">${escapeHtml(t('ddos.refresh'))}</button>
        <button class="btn secondary sm" id="ddos-pause">${escapeHtml(ddosPaused ? t('ddos.resume') : t('ddos.pause'))}</button>
      </div>
    </div>
    <div class="grid">
      <div class="card"><div class="label">${escapeHtml(t('ddos.activeConn'))}</div><div class="value">${stats.activeConnections ?? active.length}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('ddos.rateHits'))}</div><div class="value">${stats.rateLimitedHits ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('ddos.blockedHits'))}</div><div class="value">${stats.blockedHits ?? 0}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('ddos.blacklist'))}</div><div class="value">${bans.length}</div></div>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${escapeHtml(t('ddos.live'))}</strong></div>
      <table>
        <thead><tr>
          <th>${escapeHtml(t('ddos.ip'))}</th><th>${escapeHtml(t('ddos.method'))}</th>
          <th>${escapeHtml(t('ddos.path'))}</th><th>${escapeHtml(t('ddos.key'))}</th>
          <th>${escapeHtml(t('ddos.state'))}</th><th>${escapeHtml(t('ddos.duration'))}</th>
          <th>${escapeHtml(t('common.actions'))}</th>
        </tr></thead>
        <tbody>${liveRows || `<tr><td colspan="7" class="empty">${escapeHtml(t('ddos.emptyLive'))}</td></tr>`}</tbody>
      </table>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${escapeHtml(t('ddos.recent'))}</strong></div>
      <table>
        <thead><tr>
          <th>${escapeHtml(t('ddos.ip'))}</th><th>${escapeHtml(t('ddos.path'))}</th>
          <th>HTTP</th><th>${escapeHtml(t('ddos.duration'))}</th><th></th>
        </tr></thead>
        <tbody>${recentRows || `<tr><td colspan="5" class="empty">${escapeHtml(t('common.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
    <div class="panel" style="margin-bottom:14px">
      <div class="panel-h"><strong>${escapeHtml(t('ddos.blacklist'))}</strong></div>
      <div class="filter-bar">
        <label>${escapeHtml(t('ddos.ip'))}<input id="ban-ip" placeholder="1.2.3.4" /></label>
        <label>${escapeHtml(t('ddos.reason'))}<input id="ban-reason" placeholder="${escapeHtml(t('ddos.reasonPh'))}" class="wide" /></label>
        <label>${escapeHtml(t('ddos.ttl'))}
          <select id="ban-ttl">
            <option value="">${escapeHtml(t('ddos.ttlPerm'))}</option>
            <option value="3600">${escapeHtml(t('ddos.ttl1h'))}</option>
            <option value="86400">${escapeHtml(t('ddos.ttl24h'))}</option>
            <option value="604800">${escapeHtml(t('ddos.ttl7d'))}</option>
          </select>
        </label>
        <button class="btn sm" id="ban-add">${escapeHtml(t('ddos.addBan'))}</button>
      </div>
      <table>
        <thead><tr>
          <th>${escapeHtml(t('ddos.ip'))}</th><th>${escapeHtml(t('ddos.reason'))}</th>
          <th>${escapeHtml(t('ddos.source'))}</th><th>${escapeHtml(t('ddos.expires'))}</th><th></th>
        </tr></thead>
        <tbody>${banRows || `<tr><td colspan="5" class="empty">${escapeHtml(t('ddos.emptyBan'))}</td></tr>`}</tbody>
      </table>
    </div>
    <div class="panel">
      <div class="panel-h"><strong>${escapeHtml(t('ddos.topIps'))}</strong></div>
      <table>
        <thead><tr><th>${escapeHtml(t('ddos.ip'))}</th><th>${escapeHtml(t('usage.requests'))}</th><th></th></tr></thead>
        <tbody>${topIps || `<tr><td colspan="3" class="empty">${escapeHtml(t('common.empty'))}</td></tr>`}</tbody>
      </table>
    </div>
  `);
  bindShell();

  const banIp = async (ip) => {
    if (!ip || !confirm(t('ddos.banConfirm'))) return;
    await api('/ddos/blacklist', {
      method: 'POST',
      body: JSON.stringify({ ip, reason: 'manual from admin', ttlSeconds: null }),
    });
    renderDdos().catch(onErr);
  };

  document.querySelectorAll('[data-ban]').forEach((b) => {
    b.onclick = () => banIp(b.dataset.ban);
  });
  document.querySelectorAll('[data-unban]').forEach((b) => {
    b.onclick = async () => {
      if (!confirm(t('ddos.unbanConfirm'))) return;
      await api(`/ddos/blacklist/${encodeURIComponent(b.dataset.unban)}`, {
        method: 'DELETE',
      });
      renderDdos().catch(onErr);
    };
  });
  document.getElementById('ban-add').onclick = async () => {
    const ip = document.getElementById('ban-ip').value.trim();
    if (!ip) return;
    const ttl = document.getElementById('ban-ttl').value;
    await api('/ddos/blacklist', {
      method: 'POST',
      body: JSON.stringify({
        ip,
        reason: document.getElementById('ban-reason').value.trim() || undefined,
        ttlSeconds: ttl ? Number(ttl) : null,
      }),
    });
    renderDdos().catch(onErr);
  };
  document.getElementById('ddos-refresh').onclick = () => renderDdos().catch(onErr);
  document.getElementById('ddos-pause').onclick = () => {
    ddosPaused = !ddosPaused;
    renderDdos().catch(onErr);
  };

  if (!ddosPaused && state.page === 'ddos') {
    ddosTimer = setInterval(() => {
      if (state.page === 'ddos' && !ddosPaused) renderDdos().catch(() => undefined);
    }, 2000);
  }
}

async function renderPm2() {
  const st = await api('/pm2/status');
  const d = st.data || {};
  const app = d.app;
  let logsText = '';
  try {
    const lg = await api('/pm2/logs?lines=80');
    logsText = (lg.data?.stdout || '') + (lg.data?.stderr ? '\n' + lg.data.stderr : '');
  } catch (e) {
    logsText = e.message || '';
  }

  const statusLabel = app
    ? escapeHtml(app.status || '—')
    : escapeHtml(d.message || t('pm2.empty'));

  document.getElementById('app').innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('pm2.title'))}</h2>
      <div class="toolbar">
        <button class="btn secondary sm" id="pm2-refresh">${escapeHtml(t('pm2.refresh'))}</button>
        <button class="btn sm" id="pm2-start" ${!d.available ? 'disabled' : ''}>${escapeHtml(t('pm2.start'))}</button>
        <button class="btn secondary sm" id="pm2-stop" ${!app ? 'disabled' : ''}>${escapeHtml(t('pm2.stop'))}</button>
        <button class="btn sm" id="pm2-restart" ${!app ? 'disabled' : ''}>${escapeHtml(t('pm2.restart'))}</button>
        <button class="btn secondary sm" id="pm2-reload" ${!app ? 'disabled' : ''}>${escapeHtml(t('pm2.reload'))}</button>
      </div>
    </div>
    <p class="muted">${escapeHtml(t('pm2.hint'))}</p>
    ${!d.available ? `<div class="error-box">${escapeHtml(d.message || t('pm2.unavailable'))}</div>` : ''}
    <div class="grid">
      <div class="card"><div class="label">${escapeHtml(t('pm2.app'))}</div><div class="value" style="font-size:1rem">${escapeHtml(d.appName || 'grok-openai-gateway')}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('pm2.status'))}</div><div class="value" style="font-size:1rem">${statusLabel}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('pm2.pid'))}</div><div class="value" style="font-size:1rem">${app?.pid ?? '—'}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('pm2.restarts'))}</div><div class="value" style="font-size:1rem">${app?.restarts ?? '—'}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('pm2.cpu'))}</div><div class="value" style="font-size:1rem">${app?.cpu != null ? app.cpu + '%' : '—'}</div></div>
      <div class="card"><div class="label">${escapeHtml(t('pm2.memory'))}</div><div class="value" style="font-size:1rem">${app?.memory != null ? Math.round(app.memory / 1024 / 1024) + ' MB' : '—'}</div></div>
    </div>
    <div class="panel">
      <div class="panel-h"><strong>${escapeHtml(t('pm2.logs'))}</strong></div>
      <div class="modal-b"><pre class="pre" style="max-height:420px">${escapeHtml(logsText || t('common.empty'))}</pre></div>
    </div>
  `);
  bindShell();
  document.getElementById('pm2-refresh').onclick = () => renderPm2().catch(onErr);
  document.getElementById('pm2-start').onclick = async () => {
    try {
      await api('/pm2/start', { method: 'POST', body: '{}' });
      renderPm2().catch(onErr);
    } catch (e) {
      onErr(e);
    }
  };
  document.getElementById('pm2-stop').onclick = async () => {
    if (!confirm(t('pm2.confirmStop'))) return;
    try {
      await api('/pm2/stop', { method: 'POST', body: '{}' });
      renderPm2().catch(onErr);
    } catch (e) {
      onErr(e);
    }
  };
  document.getElementById('pm2-restart').onclick = async () => {
    if (!confirm(t('pm2.confirmRestart'))) return;
    try {
      await api('/pm2/restart', { method: 'POST', body: '{}' });
      renderPm2().catch(onErr);
    } catch (e) {
      onErr(e);
    }
  };
  document.getElementById('pm2-reload').onclick = async () => {
    try {
      await api('/pm2/reload', { method: 'POST', body: '{}' });
      renderPm2().catch(onErr);
    } catch (e) {
      onErr(e);
    }
  };
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
    else if (state.page === 'usage') await renderUsage();
    else if (state.page === 'ddos') await renderDdos();
    else if (state.page === 'pm2') await renderPm2();
    else if (state.page === 'system') await renderSystem();
    else await renderDashboard();
  } catch (e) {
    app.innerHTML = shell(`<div class="error-box">${escapeHtml(e.message)}</div>`);
    bindShell();
  }
}

render();
