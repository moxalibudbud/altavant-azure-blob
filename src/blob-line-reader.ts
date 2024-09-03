import fs from 'fs';
import readline, { ReadLine } from 'readline';
import { File } from '@alshaya/list-data-reader';


export interface ReadlineInterfaceCloseHandler {
  (resolve: Function): void;
}

export interface ReadlineInterfaceErrorHandler {
  (reject: Function): void;
}

export interface ReadlineInterfaceLineHandler {
  (...args: any): void;
}

export abstract class FileReader {

  file: File;
  readlineInterface?: ReadLine;

  constructor(url: string) {
    this.file = new File(url);
  }

  get filepath(): string {
    return this.file.filepath;
  }

  get extension(): string {
    return this.file.extension;
  }

  get directory(): string {
    return this.file.directory;
  }

  get filename(): string {
    return this.file.filename;
  }

  createReadlineInterface() {
    this.readlineInterface = readline.createInterface({
      input: fs.createReadStream(this.filepath),
      output: process.stdout,
      crlfDelay: Infinity
    });
  }

  readlineInterfacePromise(
    onLineHandler: ReadlineInterfaceLineHandler,
    onCloseHandler: ReadlineInterfaceCloseHandler
  ): Promise<any> {
    if(!this.readlineInterface) {
      this.createReadlineInterface();
    }
    
    return new Promise((resolve, reject) => {
      try {
        this.readlineInterface?.on('line', onLineHandler);
        this.readlineInterface?.on('close', () => onCloseHandler(resolve));
      } catch (e) {
        reject(e);
      }
    });
  }
  
  abstract readContent(): Promise<any[]> | undefined;
  abstract readFile(): Promise<any> | undefined;
}
