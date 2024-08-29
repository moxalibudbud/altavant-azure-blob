"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const readline_1 = tslib_1.__importDefault(require("readline"));
const file_1 = require("./file");
class FileReader {
    constructor(filepath) {
        this.file = new file_1.File(filepath);
    }
    get filepath() {
        return this.file.filepath;
    }
    get extension() {
        return this.file.extension;
    }
    get directory() {
        return this.file.directory;
    }
    get filename() {
        return this.file.filename;
    }
    createReadlineInterface() {
        const exists = fs_1.default.existsSync(this.filepath);
        if (!exists)
            throw new Error(`File ${this.filepath} doesn't exist`);
        this.readlineInterface = readline_1.default.createInterface({
            input: fs_1.default.createReadStream(this.filepath),
            output: process.stdout,
            crlfDelay: Infinity
        });
    }
    readlineInterfacePromise(onLineHandler, onCloseHandler) {
        if (!this.readlineInterface) {
            this.createReadlineInterface();
        }
        return new Promise((resolve, reject) => {
            var _a, _b;
            try {
                (_a = this.readlineInterface) === null || _a === void 0 ? void 0 : _a.on('line', onLineHandler);
                (_b = this.readlineInterface) === null || _b === void 0 ? void 0 : _b.on('close', () => {
                    try {
                        onCloseHandler(resolve, reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports.FileReader = FileReader;
