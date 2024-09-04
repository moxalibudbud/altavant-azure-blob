import 'dotenv/config';
import { test, expect, describe } from '@jest/globals';
import { BlobServiceClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { Container, serviceClient, AzureBlobContainers, ServiceClientCredentials } from '..';

describe('Azure Blob Storage library tests', () => {
  
  test('Service Client should pass with arguments', () => {
    const credentials: ServiceClientCredentials = {
      credentials: new StorageSharedKeyCredential(
        process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME as string,
        process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY as string
      ),
      accountName: process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME as string
    };

    const client = serviceClient(credentials)
    expect(client).toBeInstanceOf(BlobServiceClient);
  });

  test('Service Client should pass without arguments', () => {
    const client = serviceClient()
    expect(client).toBeInstanceOf(BlobServiceClient);
  });

  test('Container object should pass correct property instances ', () => {
    const containerClient = new Container(AzureBlobContainers.SIOCS_SOH);
    expect(containerClient.serviceClient).toBeInstanceOf(BlobServiceClient);
    expect(containerClient.containerClient).toBeInstanceOf(ContainerClient);
  });
});