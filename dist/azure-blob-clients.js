"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceClient = serviceClient;
const storage_blob_1 = require("@azure/storage-blob");
function createCredentials(accountName, accountKey) {
    return new storage_blob_1.StorageSharedKeyCredential(accountName, accountKey);
}
function serviceClient(accountName, accountKey) {
    const credentials = createCredentials(accountName, accountKey);
    const accountURL = `https://${accountName}.blob.core.windows.net`;
    const serviceClient = new storage_blob_1.BlobServiceClient(accountURL, credentials);
    function blobClient(blobUrl) {
        return new storage_blob_1.BlobClient(blobUrl, credentials);
    }
    function blockBlobClient(blobUrl) {
        return new storage_blob_1.BlockBlobClient(blobUrl, credentials);
    }
    function containerClient(containerName) {
        return serviceClient.getContainerClient(containerName);
    }
    return { serviceClient, credentials, blobClient, blockBlobClient, containerClient };
}
