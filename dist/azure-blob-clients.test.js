"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const storage_blob_1 = require("@azure/storage-blob");
const azure_blob_clients_1 = require("./azure-blob-clients");
globals_1.jest.mock('@azure/storage-blob', () => {
    return {
        BlobServiceClient: globals_1.jest.fn().mockImplementation(() => ({
            getContainerClient: globals_1.jest.fn().mockReturnValue({ mocked: 'containerClient' }),
        })),
        StorageSharedKeyCredential: globals_1.jest.fn().mockImplementation((name, key) => ({
            name,
            key,
        })),
        BlobClient: globals_1.jest.fn().mockImplementation(() => ({ mocked: 'blobClient' })),
        BlockBlobClient: globals_1.jest.fn().mockImplementation(() => ({ mocked: 'blockBlobClient' })),
    };
});
(0, globals_1.describe)('serviceClient', () => {
    const mockAccountName = 'testaccount';
    const mockAccountKey = 'testkey';
    (0, globals_1.it)('should create a BlobServiceClient and client factories correctly', () => {
        const result = (0, azure_blob_clients_1.serviceClient)(mockAccountName, mockAccountKey);
        (0, globals_1.expect)(storage_blob_1.StorageSharedKeyCredential).toHaveBeenCalledWith(mockAccountName, mockAccountKey);
        (0, globals_1.expect)(storage_blob_1.BlobServiceClient).toHaveBeenCalledWith(`https://${mockAccountName}.blob.core.windows.net`, globals_1.expect.any(Object));
        const blob = result.blobClient('https://someurl');
        (0, globals_1.expect)(blob).toEqual({ mocked: 'blobClient' });
        const blockBlob = result.blockBlobClient('https://someurl');
        (0, globals_1.expect)(blockBlob).toEqual({ mocked: 'blockBlobClient' });
        const container = result.containerClient('container-name');
        (0, globals_1.expect)(container).toEqual({ mocked: 'containerClient' });
    });
});
