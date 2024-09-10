"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blob = void 0;
const tslib_1 = require("tslib");
const service_client_1 = require("./service-client");
class Blob {
    constructor(blobUrl) {
        this.blobClient = (0, service_client_1.createBlobClient)(blobUrl);
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
