"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const exception_factory_1 = require("../exceptions/exception.factory");
function validate(schema, target = 'body') {
    return (req, _res, next) => {
        const result = schema.safeParse(req[target]);
        if (!result.success) {
            const details = result.error.issues.map((i) => ({
                path: i.path.join('.'),
                message: i.message,
            }));
            next(exception_factory_1.ExceptionFactory.validation('Request validation failed', details));
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        req[target] = result.data;
        next();
    };
}
//# sourceMappingURL=validate.middleware.js.map