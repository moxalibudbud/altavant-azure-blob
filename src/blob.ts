
import { BlobClient } from '@azure/storage-blob';
import { createBlobClient } from './service-client';

export class Blob {
  
  blobClient: BlobClient;

  constructor(blobUrl: string) {
    this.blobClient = createBlobClient(blobUrl);
  }

  async delete() {
    const response = await this.blobClient.delete({
      deleteSnapshots: 'include'
    });
    return response;
  }
}