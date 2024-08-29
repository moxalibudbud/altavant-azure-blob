
import { BlobClient, BlobItem, BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { serviceClient } from './service-client';
import { AzureBlobContainers } from './enums';

export class Container {
  
  serviceClient: BlobServiceClient = serviceClient();
  containerClient: ContainerClient;

  constructor(containerName: AzureBlobContainers) {
    this.containerClient = this.serviceClient.getContainerClient(containerName);
  }

  listBlobsFlat() {
    return this.containerClient.listBlobsFlat();
  }

  createBlobClient(blobItems: BlobItem[]): BlobClient[] {
    return blobItems.map( blobItem => this.containerClient.getBlobClient(blobItem.name));
  }

  listByTag(query: string) {
    return this.containerClient.findBlobsByTags(query);
  }

  blobClient(blobName: string): BlobClient {
    return this.containerClient.getBlobClient(blobName);
  }
}