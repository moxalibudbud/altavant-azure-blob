"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
class File {
    constructor(filepath) {
        this.filepath = filepath;
    }
    get directory() {
        return path_1.default.dirname(this.filepath);
    }
    get filename() {
        return path_1.default.basename(this.filepath);
    }
    get extension() {
        return path_1.default.extname(this.filepath).replace('.', '');
    }
}
exports.File = File;
