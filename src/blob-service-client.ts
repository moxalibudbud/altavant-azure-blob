import { BlobServiceClient } from '@azure/storage-blob';
import { serviceClient } from './service-client';

export function createServiceClient(): BlobServiceClient {
  return serviceClient();
}