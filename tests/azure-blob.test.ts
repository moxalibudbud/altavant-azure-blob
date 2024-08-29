import 'dotenv/config';
import { AZURE_BLOB_SERVICE_CLIENT_OPTIONS } from '@config';
import { test, expect, describe } from '@jest/globals';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { Container } from '../src/azure-blob/container';
import { serviceClient } from '../src/azure-blob/service-client';
import { AzureBlobContainers } from '@lib/azure-blob/enums';

describe('Azure Blob Storage library tests', () => {
  
  test('Service Client should pass with arguments', () => {
    const client = serviceClient(AZURE_BLOB_SERVICE_CLIENT_OPTIONS)
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