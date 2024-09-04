import 'dotenv/config';
import { test, expect, describe } from '@jest/globals';
import readline from 'readline';
// import { BlobServiceClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { BlobLineReader } from '../src/blob-line-reader';

const BLOB_URL = 'https://alshayastaging.blob.core.windows.net/wip/item-master.csv';
  
class MockClass extends BlobLineReader {
  constructor() {
    super(BLOB_URL);
  }

  async readContent() {
    try {
      const data = await this.readBlob();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async readBlob() {
    return [];
  }
}

describe('Azure Blob Line Reader tests', () => {
  const reader = new MockClass();

  test('extension getter should pass', () => {
    expect(reader.extension).toBe('csv');
  });

  test('filename getter should pass', () => {
    expect(reader.filename).toBe('item-master.csv');
  });

  test('readlineInterface property must be undefined', () => {
    expect(reader.readlineInterface).toBe(undefined);
  });

  test('readlineInterface should pass', () => {
    reader.createReadlineInterface();
    reader.cleanUpPreviousListeners();

    reader.readlineInterface?.on('close', () => {
      reader.readlineInterface?.close();
    });
    
    expect(reader.readlineInterface).toBeInstanceOf(readline.Interface);
  });
});