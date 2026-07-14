"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = info;
exports.ok = ok;
exports.warn = warn;
exports.fail = fail;
exports.baseUrls = baseUrls;
function info(msg) {
    console.log(msg);
}
function ok(msg) {
    console.log(`✓ ${msg}`);
}
function warn(msg) {
    console.warn(`⚠ ${msg}`);
}
function fail(msg) {
    console.error(`✗ ${msg}`);
}
function baseUrls(port, host = '127.0.0.1') {
    const h = host === '0.0.0.0' ? '127.0.0.1' : host;
    return {
        api: `http://${h}:${port}/v1`,
        admin: `http://${h}:${port}/admin/`,
        health: `http://${h}:${port}/health`,
    };
}
//# sourceMappingURL=print.js.map