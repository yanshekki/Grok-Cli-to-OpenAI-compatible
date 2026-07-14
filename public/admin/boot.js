// Cache-bust: load app.js with the same ?v= as this script (server-injected).
const V = new URL(import.meta.url).searchParams.get('v') || '1';
await import(`/admin/app.js?v=${V}`);
