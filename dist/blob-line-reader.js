"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobLineReader = void 0;
const tslib_1 = require("tslib");
const readline_1 = tslib_1.__importDefault(require("readline"));
const list_data_reader_1 = require("list-data-reader");
const service_client_1 = require("./service-client");
class BlobLineReader {
    constructor(url) {
        this.file = new list_data_reader_1.File(url);
    }
    get url() {
        return this.file.filepath;
    }
    get extension() {
        return this.file.extension;
    }
    get filename() {
        return this.file.filename;
    }
    get sourceBlobClient() {
        return (0, service_client_1.createBlobClient)(this.url);
    }
    getReadableStream() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const downloadBlockBlobResponse = yield this.sourceBlobClient.download(0);
            return downloadBlockBlobResponse.readableStreamBody;
        });
    }
    createReadlineInterface() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const readableStream = yield this.getReadableStream();
            if (!readableStream)
                return;
            this.readlineInterface = readline_1.default.createInterface({
                input: readableStream,
                crlfDelay: Infinity,
                terminal: false
            });
        });
    }
    cleanUpPreviousListeners() {
        if (!this.readlineInterface)
            return;
        this.readlineInterface.removeAllListeners('line');
        this.readlineInterface.removeAllListeners('close');
    }
    readlineInterfacePromise(onLineHandler, onCloseHandler) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.readlineInterface) {
                yield this.createReadlineInterface();
            }
            this.cleanUpPreviousListeners();
            return new Promise((resolve, reject) => {
                var _a, _b;
                try {
                    (_a = this.readlineInterface) === null || _a === void 0 ? void 0 : _a.on('line', onLineHandler);
                    (_b = this.readlineInterface) === null || _b === void 0 ? void 0 : _b.on('close', () => onCloseHandler(resolve));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
exports.BlobLineReader = BlobLineReader;
