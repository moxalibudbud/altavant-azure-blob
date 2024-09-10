"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultOptions = getDefaultOptions;
exports.serviceClient = serviceClient;
const storage_blob_1 = require("@azure/storage-blob");
function getDefaultOptions() {
    const options = {
        credentials: new storage_blob_1.StorageSharedKeyCredential(process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME, process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY),
        accountName: process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME
    };
    return options;
}
function buildBlobServiceClient(options) {
    return new storage_blob_1.BlobServiceClient(`https://${options.accountName}.blob.core.windows.net`, options.credentials);
}
function buildBlobClient(blobUrl, options) {
    return new storage_blob_1.BlobClient(blobUrl, options.credentials);
}
function serviceClient(options) {
    const serviceClient = buildBlobServiceClient(options ? options : getDefaultOptions());
    return serviceClient;
}
