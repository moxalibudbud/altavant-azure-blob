"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlobClient = createBlobClient;
const storage_blob_1 = require("@azure/storage-blob");
const service_client_1 = require("./service-client");
function createBlobClient(blobUrl) {
    const { credentials } = (0, service_client_1.getDefaultOptions)();
    return new storage_blob_1.BlobClient(blobUrl, credentials);
}
