"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = void 0;
const tslib_1 = require("tslib");
class Blob {
    constructor(blobName, containerClient) {
        this.blobClient = containerClient.getBlobClient(blobName);
    }
    delete() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.blobClient.delete({
                deleteSnapshots: 'include'
            });
            return response;
        });
    }
}
exports.Blob = Blob;
