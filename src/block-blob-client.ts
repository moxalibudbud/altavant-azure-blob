import { BlockBlobClient } from '@azure/storage-blob';
import { getDefaultOptions } from './service-client';

export function createBlockBlobClient(blobUrl: string): BlockBlobClient {
  const { credentials } = getDefaultOptions();

  return new BlockBlobClient(blobUrl, credentials);
}