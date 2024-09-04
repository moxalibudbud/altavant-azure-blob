"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutFileETL = void 0;
const tslib_1 = require("tslib");
const blob_line_reader_1 = require("../blob-line-reader");
class OutFileETL extends blob_line_reader_1.BlobLineReader {
    constructor(filepath) {
        super(filepath);
    }
    readContent() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.readBlob();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    readBlob() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const arr = [];
            const handleOnLine = (chunk) => arr.push(chunk);
            const handleOnClose = (resolve) => resolve(arr);
            return this.readlineInterfacePromise(handleOnLine, handleOnClose);
        });
    }
}
exports.OutFileETL = OutFileETL;
