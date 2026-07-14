"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSse = initSse;
exports.writeSseData = writeSseData;
exports.writeSseDone = writeSseDone;
function initSse(res) {
    res.status(200);
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    if (typeof res.flushHeaders === 'function') {
        res.flushHeaders();
    }
}
function writeSseData(res, data) {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
}
function writeSseDone(res) {
    res.write('data: [DONE]\n\n');
}
//# sourceMappingURL=stream.js.map