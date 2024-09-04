import 'dotenv/config';
import { jest, test, expect, describe } from '@jest/globals';
import { BlobServiceClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { ServiceClientCredentials, AzureBlobContainers } from '../index';
import { serviceClient } from '../service-client';
import { Container } from '../container';

// Mocking the @azure/storage-blob module
jest.mock('@azure/storage-blob', () => ({
  BlobServiceClient: jest.fn(),
  ContainerClient: jest.fn(),
  StorageSharedKeyCredential: jest.fn(),
}));

jest.mock('../service-client', () => ({
  serviceClient: jest.fn().mockImplementation(() => {
    return new BlobServiceClient('url');
  })
}));

jest.mock('../Container', () => ({
  Container: jest.fn().mockImplementation(() => ({
    serviceClient: new BlobServiceClient('url'),
    containerClient: new ContainerClient('url'),
  }))
}));

describe('Azure Blob Storage library tests', () => {
  
  test('Service Client should pass with arguments', () => {
    const AZURE_BLOB_STORAGE_ACCOUNT_NAME = 'mockAccountName';
    const AZURE_BLOB_STORAGE_ACCOUNT_KEY = 'mockAccountKey';
    const credentials: ServiceClientCredentials = {
      credentials: new StorageSharedKeyCredential(AZURE_BLOB_STORAGE_ACCOUNT_NAME, AZURE_BLOB_STORAGE_ACCOUNT_KEY),
      accountName: AZURE_BLOB_STORAGE_ACCOUNT_NAME,
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