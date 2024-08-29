import { BlobClient, BlobItem, BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { AzureBlobContainers } from './enums';
export declare class Container {
    serviceClient: BlobServiceClient;
    containerClient: ContainerClient;
    constructor(containerName: AzureBlobContainers);
    listBlobsFlat(): import("@azure/core-paging").PagedAsyncIterableIterator<BlobItem, import("@azure/storage-blob").ContainerListBlobFlatSegmentResponse, import("@azure/core-paging").PageSettings>;
    createBlobClient(blobItems: BlobItem[]): BlobClient[];
    listByTag(query: string): import("@azure/core-paging").PagedAsyncIterableIterator<import("@azure/storage-blob").FilterBlobItem, import("@azure/storage-blob").ContainerFindBlobsByTagsSegmentResponse, import("@azure/core-paging").PageSettings>;
    blobClient(blobName: string): BlobClient;
}
