import { BlobClient } from '@azure/storage-blob';
import { getDefaultOptions, ServiceClientCredentials } from './service-client';

export function createBlobClient(blobUrl: string): BlobClient {
  const { credentials } = getDefaultOptions();

  return new BlobClient(blobUrl, credentials);
}