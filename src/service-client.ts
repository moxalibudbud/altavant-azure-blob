import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

export interface ServiceClientCredentials {
  credentials: StorageSharedKeyCredential;
  accountName: string;
}

const DEFAULT_OPTIONS: ServiceClientCredentials = {
  credentials: new StorageSharedKeyCredential(
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME as string,
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY as string
  ),
  accountName: process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME as string
};

function buildBlobServiceClient(options: ServiceClientCredentials) {
  return new BlobServiceClient(
    `https://${options.accountName}.blob.core.windows.net`,
    options.credentials
  );
}

export function serviceClient(options?: ServiceClientCredentials): BlobServiceClient {
  const serviceClient = buildBlobServiceClient(options ? options : DEFAULT_OPTIONS);
  return serviceClient;
}