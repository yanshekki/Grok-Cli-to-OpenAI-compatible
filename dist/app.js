"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const pino_http_1 = __importDefault(require("pino-http"));
const env_1 = require("./config/env");
const cors_2 = require("./config/cors");
const routes_1 = __importDefault(require("./routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const request_id_middleware_1 = require("./middlewares/request-id.middleware");
const rate_limit_middleware_1 = require("./middlewares/rate-limit.middleware");
const error_middleware_1 = require("./middlewares/error.middleware");
const logger_1 = require("./utils/logger");
require("./interfaces/express.interface");
function createApp() {
    const app = (0, express_1.default)();
    if (env_1.env.TRUST_PROXY) {
        app.set('trust proxy', 1);
    }
    app.disable('x-powered-by');
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false, // admin SPA inline styles
    }));
    app.use((0, cors_1.default)(cors_2.corsOptions));
    app.use(request_id_middleware_1.requestIdMiddleware);
    app.use((0, pino_http_1.default)({
        logger: logger_1.logger,
        genReqId: (req) => req.requestId,
        customProps: (req) => ({
            requestId: req.requestId,
        }),
        autoLogging: {
            ignore: (req) => req.url === '/health' ||
                req.url === '/ready' ||
                (req.url?.startsWith('/admin') && !req.url.startsWith('/admin/api')),
        },
    }));
    app.use(express_1.default.json({ limit: env_1.env.BODY_LIMIT }));
    app.use(express_1.default.urlencoded({ extended: false, limit: env_1.env.BODY_LIMIT }));
    app.use(rate_limit_middleware_1.globalRateLimiter);
    // Admin JSON API
    app.use('/admin/api', admin_routes_1.default);
    // Admin SPA static files
    const adminDir = node_path_1.default.join(process.cwd(), 'public', 'admin');
    app.use('/admin', express_1.default.static(adminDir, { index: 'index.html' }));
    app.get(['/admin', '/admin/*'], (req, res, next) => {
        if (req.path.startsWith('/admin/api')) {
            next();
            return;
        }
        res.sendFile(node_path_1.default.join(adminDir, 'index.html'), (err) => {
            if (err)
                next();
        });
    });
    app.use(routes_1.default);
    app.use(error_middleware_1.notFoundHandler);
    app.use(error_middleware_1.errorMiddleware);
    return app;
}
//# sourceMappingURL=app.js.map