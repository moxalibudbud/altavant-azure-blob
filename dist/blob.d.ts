import { BlobClient, ContainerClient } from '@azure/storage-blob';
export declare class Blob {
    blobClient: BlobClient;
    constructor(blobName: string, containerClient: ContainerClient);
    delete(): Promise<import("@azure/storage-blob").BlobDeleteResponse>;
}
