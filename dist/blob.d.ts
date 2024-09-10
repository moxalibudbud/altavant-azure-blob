import { BlobClient } from '@azure/storage-blob';
export declare class Blob {
    blobClient: BlobClient;
    constructor(blobUrl: string);
    delete(): Promise<import("@azure/storage-blob").BlobDeleteResponse>;
}
