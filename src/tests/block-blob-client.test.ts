import { beforeAll, test, expect, describe } from '@jest/globals';
import { BlockBlobClient } from '@azure/storage-blob';

describe('Blob tests', () => {
  beforeAll(() => {
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME = 'testaccount';
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY = 'XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/XXXX+XXXXXXXXX==';
  });

  test('blob.blobClient must instance of BlobClient', async () => {
    const { createBlockBlobClient } = await import('../block-blob-client');
    const blobClient = createBlockBlobClient('https://storageaccount.blob.core.windows.net/container/file.csv');
    expect(blobClient).toBeInstanceOf(BlockBlobClient);
  });
});