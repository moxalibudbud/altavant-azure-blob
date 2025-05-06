import { BlobClient, BlobServiceClient, BlockBlobClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';
export interface ServiceClientCredentials {
    credentials: StorageSharedKeyCredential;
    accountName: string;
}
export type ServiceClientObjects = {
    serviceClient: BlobServiceClient;
    credentials: StorageSharedKeyCredential;
    blobClient: (blobUrl: string) => BlobClient;
    blockBlobClient: (blobUrl: string) => BlockBlobClient;
    containerClient: (containerName: string) => ContainerClient;
};
export declare function serviceClient(accountName: string, accountKey: string): ServiceClientObjects;
