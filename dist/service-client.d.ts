import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
export interface ServiceClientCredentials {
    credentials: StorageSharedKeyCredential;
    accountName: string;
}
export declare function serviceClient(options?: ServiceClientCredentials): BlobServiceClient;
