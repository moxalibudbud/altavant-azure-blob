import { BlobClient, BlobItem, BlobServiceClient, ContainerClient, FilterBlobItem } from '@azure/storage-blob';
export declare class Container {
    serviceClient: BlobServiceClient;
    containerClient: ContainerClient;
    constructor(containerName: string);
    listBlobsFlat(): import("@azure/core-paging").PagedAsyncIterableIterator<BlobItem, import("@azure/storage-blob").ContainerListBlobFlatSegmentResponse, import("@azure/core-paging").PageSettings>;
    listByTag(query: string): import("@azure/core-paging").PagedAsyncIterableIterator<FilterBlobItem, import("@azure/storage-blob").ContainerFindBlobsByTagsSegmentResponse, import("@azure/core-paging").PageSettings>;
    createBlobClients(blobs: BlobItem[] | FilterBlobItem[]): BlobClient[];
    blobClient(blobName: string): BlobClient;
}
