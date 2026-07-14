"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestIdMiddleware = requestIdMiddleware;
const id_1 = require("../utils/id");
function requestIdMiddleware(req, res, next) {
    const incoming = req.header('x-request-id');
    const requestId = incoming && /^[a-zA-Z0-9_\-]{8,128}$/.test(incoming) ? incoming : (0, id_1.createRequestId)();
    req.requestId = requestId;
    res.setHeader('X-Request-Id', requestId);
    next();
}
//# sourceMappingURL=request-id.middleware.js.map