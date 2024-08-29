import { FileReader } from '../utils/file-reader';
import { fileReaderFactory } from '../utils/file-reader-factory';

export class DynamicFileReader extends FileReader {

  constructor(filepath: string) {
    super(filepath);
  }
  
  get fileReader() {
    const fileReader = fileReaderFactory[this.extension];

    if(fileReader) return new fileReader(this.filepath);

    throw new Error(`File extension ${this.extension} is not supported!`);
  }
  
  async readFile() {
    return null;
  }

  async readContent() {
    const data = await this.fileReader.readContent();
    return data;
  }
}