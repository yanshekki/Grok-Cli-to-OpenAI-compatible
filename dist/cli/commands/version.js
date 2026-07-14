"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdVersion = cmdVersion;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const paths_1 = require("../lib/paths");
const print_1 = require("../lib/print");
function cmdVersion() {
    const pkgPath = node_path_1.default.join((0, paths_1.getPackageRoot)(), 'package.json');
    const pkg = JSON.parse(node_fs_1.default.readFileSync(pkgPath, 'utf8'));
    (0, print_1.info)(`${pkg.name} v${pkg.version}`);
}
//# sourceMappingURL=version.js.map