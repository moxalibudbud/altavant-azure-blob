import { BlobClient, BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
export interface ServiceClientCredentials {
    credentials: StorageSharedKeyCredential;
    accountName: string;
}
export declare function getDefaultOptions(): ServiceClientCredentials;
export declare function createBlobClient(blobUrl: string, options?: ServiceClientCredentials): BlobClient;
export declare function serviceClient(options?: ServiceClientCredentials): BlobServiceClient;
