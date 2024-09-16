import { beforeAll, test, expect, describe } from '@jest/globals';
import { BlobServiceClient } from '@azure/storage-blob';

describe('Blob tests', () => {
  beforeAll(() => {
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME = 'testaccount';
    process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY = 'XX/XXXXXXXXXXXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/XXXX+XXXXXXXXX==';
  });

  test('blob.blobClient must instance of BlobClient', async () => {
    const { createServiceClient } = await import('../blob-service-client');
    const blobServiceClient = createServiceClient();
    expect(blobServiceClient).toBeInstanceOf(BlobServiceClient);
  });
});