import {
  BlobClient,
  BlobServiceClient,
  BlockBlobClient,
  ContainerClient,
  StorageSharedKeyCredential,
} from '@azure/storage-blob';

export interface ServiceClientCredentials {
  credentials: StorageSharedKeyCredential;
  accountName: string;
}

export type ServiceClientObjects = {
  serviceClient: BlobServiceClient;
  credentials: StorageSharedKeyCredential;
  blobClient: (blobUrl: string) => BlobClient;
  blockBlobClient: (blobUrl: string) => BlockBlobClient;
  containerClient: (containerName: string) => ContainerClient;
};

function createCredentials(accountName: string, accountKey: string): StorageSharedKeyCredential {
  return new StorageSharedKeyCredential(accountName, accountKey);
}

export function serviceClient(accountName: string, accountKey: string): ServiceClientObjects {
  const credentials = createCredentials(accountName, accountKey);
  const accountURL = `https://${accountName}.blob.core.windows.net`;
  const serviceClient = new BlobServiceClient(accountURL, credentials);

  function blobClient(blobUrl: string): BlobClient {
    return new BlobClient(blobUrl, credentials);
  }

  function blockBlobClient(blobUrl: string): BlockBlobClient {
    return new BlockBlobClient(blobUrl, credentials);
  }

  function containerClient(containerName: string): ContainerClient {
    return serviceClient.getContainerClient(containerName);
  }

  return { serviceClient, credentials, blobClient, blockBlobClient, containerClient };
}
