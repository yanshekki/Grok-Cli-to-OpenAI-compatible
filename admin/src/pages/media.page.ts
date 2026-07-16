import { appRoot, escapeHtml } from '../lib/dom';
import { t, tx } from '../i18n';
import { mediaService } from '../services/media.service';
import { bindShell, shell } from '../components/shell';
import { uiConfirm } from '../lib/confirm';
import { listRows, listTotal, type ListEnvelope } from '../lib/list';
import { getState, onErr, patchState } from '../state/store';
import type { MediaAssetRow, MediaJobRow } from '../types/api/media';
import type { RenderCtx } from '../router';

export async function renderMediaPage(ctx: RenderCtx): Promise<void> {
  const kind = getState().mediaKind || '';
  const [assetsRes, jobsRes] = await Promise.all([
    mediaService.listAssets({ kind: kind || undefined, limit: 50 }),
    mediaService.listJobs({ limit: 30 }).catch(() => ({ data: [], total: 0 })),
  ]);
  const assets = listRows(assetsRes as ListEnvelope<MediaAssetRow>);
  const jobs = listRows(jobsRes as ListEnvelope<MediaJobRow>);
  const assetsTotal = listTotal(assetsRes as ListEnvelope<MediaAssetRow>, assets);

  const assetRows = assets.length
    ? assets
        .map((a) => {
          const isImg = String(a.mime || '').startsWith('image/');
          const preview = isImg
            ? `<button type="button" class="btn ghost sm" data-media-preview="${escapeHtml(a.id)}">${escapeHtml(t('media.preview'))}</button>`
            : '—';
          return `<tr>
            <td class="mono">${escapeHtml(String(a.id).slice(0, 8))}…</td>
            <td>${escapeHtml(a.kind || '')}</td>
            <td>${escapeHtml(a.mime || '')}</td>
            <td>${escapeHtml(String(a.bytes ?? ''))}</td>
            <td>${escapeHtml(a.provider || '')}</td>
            <td class="muted" title="${escapeHtml(a.prompt || '')}">${escapeHtml((a.prompt || '—').slice(0, 40))}</td>
            <td class="muted">${escapeHtml((a.created_at || '').slice(0, 19))}</td>
            <td class="row-actions">
              ${preview}
              <button type="button" class="btn ghost sm" data-media-dl="${escapeHtml(a.id)}">${escapeHtml(t('media.download'))}</button>
              <button type="button" class="btn danger sm" data-media-del="${escapeHtml(a.id)}">${escapeHtml(t('media.delete'))}</button>
            </td>
          </tr>`;
        })
        .join('')
    : `<tr><td colspan="8" class="muted">${escapeHtml(tx('media.empty', t('common.empty')))}</td></tr>`;

  const jobRows = jobs.length
    ? jobs
        .map(
          (j) => `<tr>
          <td class="mono">${escapeHtml(String(j.id).slice(0, 8))}…</td>
          <td>${escapeHtml(j.status || '')}</td>
          <td class="muted" title="${escapeHtml(j.prompt || '')}">${escapeHtml((j.prompt || '—').slice(0, 48))}</td>
          <td class="mono">${escapeHtml(j.result_asset_id ? String(j.result_asset_id).slice(0, 8) + '…' : '—')}</td>
          <td class="muted">${escapeHtml((j.created_at || '').slice(0, 19))}</td>
        </tr>`,
        )
        .join('')
    : `<tr><td colspan="5" class="muted">${escapeHtml(t('media.jobsEmpty'))}</td></tr>`;

  appRoot().innerHTML = shell(`
    <div class="topbar">
      <h2>${escapeHtml(t('media.title'))}</h2>
      <div class="toolbar">
        <select id="media-kind" class="input sm">
          <option value="">${escapeHtml(t('media.allKinds'))}</option>
          <option value="image" ${kind === 'image' ? 'selected' : ''}>image</option>
          <option value="video" ${kind === 'video' ? 'selected' : ''}>video</option>
          <option value="audio" ${kind === 'audio' ? 'selected' : ''}>audio</option>
        </select>
        <button type="button" class="btn secondary sm" id="media-refresh">${escapeHtml(t('dash.refresh'))}</button>
      </div>
    </div>
    <p class="page-hint">${escapeHtml(t('media.intro'))}</p>
    <div class="panel">
      <div class="panel-h"><strong>${escapeHtml(t('media.assets'))}</strong>
        <span class="muted">(${assetsTotal})</span>
      </div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr>
            <th>ID</th><th>${escapeHtml(t('media.kind'))}</th><th>MIME</th>
            <th>${escapeHtml(t('media.bytes'))}</th><th>${escapeHtml(t('media.provider'))}</th>
            <th>${escapeHtml(t('media.prompt'))}</th><th>${escapeHtml(t('media.created'))}</th>
            <th></th>
          </tr></thead>
          <tbody>${assetRows}</tbody>
        </table>
      </div>
    </div>
    <div class="panel" style="margin-top:1rem">
      <div class="panel-h"><strong>${escapeHtml(t('media.jobs'))}</strong></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr>
            <th>ID</th><th>${escapeHtml(t('media.status'))}</th>
            <th>${escapeHtml(t('media.prompt'))}</th><th>Asset</th>
            <th>${escapeHtml(t('media.created'))}</th>
          </tr></thead>
          <tbody>${jobRows}</tbody>
        </table>
      </div>
    </div>
    <div id="media-preview-box" class="panel" style="margin-top:1rem;display:none">
      <div class="panel-h"><strong>${escapeHtml(t('media.preview'))}</strong></div>
      <div class="panel-pad" id="media-preview-pad"></div>
    </div>
  `);

  bindShell(ctx.rerender);

  document.getElementById('media-refresh')?.addEventListener('click', () => {
    renderMediaPage(ctx).catch(onErr);
  });
  document.getElementById('media-kind')?.addEventListener('change', (e) => {
    patchState({
      mediaKind: (e.target as HTMLSelectElement).value || '',
    });
    renderMediaPage(ctx).catch(onErr);
  });

  document.querySelectorAll('[data-media-preview]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        const id = (btn as HTMLElement).getAttribute('data-media-preview')!;
        const blob = await mediaService.downloadBlob(id);
        const url = URL.createObjectURL(blob);
        const box = document.getElementById('media-preview-box');
        const pad = document.getElementById('media-preview-pad');
        if (box && pad) {
          box.style.display = '';
          pad.innerHTML = `<img src="${url}" alt="preview" style="max-width:100%;max-height:420px;border-radius:8px" />`;
        }
      } catch (e) {
        onErr(e);
      }
    });
  });

  document.querySelectorAll('[data-media-dl]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        const id = (btn as HTMLElement).getAttribute('data-media-dl')!;
        const blob = await mediaService.downloadBlob(id);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `media-${id.slice(0, 8)}`;
        a.click();
      } catch (e) {
        onErr(e);
      }
    });
  });

  document.querySelectorAll('[data-media-del]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = (btn as HTMLElement).getAttribute('data-media-del')!;
      if (
        !(await uiConfirm({
          message: t('media.deleteConfirm'),
          variant: 'danger',
          confirmText: t('media.delete'),
        }))
      )
        return;
      try {
        await mediaService.remove(id);
        await renderMediaPage(ctx);
      } catch (e) {
        onErr(e);
      }
    });
  });
}
