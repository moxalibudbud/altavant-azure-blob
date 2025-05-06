import { jest, it, expect, describe } from '@jest/globals';
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
  BlobClient,
  BlockBlobClient,
  ContainerClient,
} from '@azure/storage-blob';
import { serviceClient } from './azure-blob-clients';

jest.mock('@azure/storage-blob', () => {
  return {
    BlobServiceClient: jest.fn().mockImplementation(() => ({
      getContainerClient: jest.fn().mockReturnValue({ mocked: 'containerClient' }),
    })),
    StorageSharedKeyCredential: jest.fn().mockImplementation((name, key) => ({
      name,
      key,
    })),
    BlobClient: jest.fn().mockImplementation(() => ({ mocked: 'blobClient' })),
    BlockBlobClient: jest.fn().mockImplementation(() => ({ mocked: 'blockBlobClient' })),
  };
});

describe('serviceClient', () => {
  const mockAccountName = 'testaccount';
  const mockAccountKey = 'testkey';

  it('should create a BlobServiceClient and client factories correctly', () => {
    const result = serviceClient(mockAccountName, mockAccountKey);

    expect(StorageSharedKeyCredential).toHaveBeenCalledWith(mockAccountName, mockAccountKey);
    expect(BlobServiceClient).toHaveBeenCalledWith(
      `https://${mockAccountName}.blob.core.windows.net`,
      expect.any(Object)
    );

    const blob = result.blobClient('https://someurl');
    expect(blob).toEqual({ mocked: 'blobClient' });

    const blockBlob = result.blockBlobClient('https://someurl');
    expect(blockBlob).toEqual({ mocked: 'blockBlobClient' });

    const container = result.containerClient('container-name');
    expect(container).toEqual({ mocked: 'containerClient' });
  });
});
