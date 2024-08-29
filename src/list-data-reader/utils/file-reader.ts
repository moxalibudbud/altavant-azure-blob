import fs from 'fs';
import readline, { ReadLine } from 'readline';
import { File } from './file';


export interface ReadlineInterfaceErrorHandler {
  (resolve: Function, reject: Function): void;
}

export interface ReadlineInterfaceLineHandler {
  (...args: any): void;
}

export abstract class FileReader {

  file: File;
  readlineInterface?: ReadLine;

  constructor(filepath: string) {
    this.file = new File(filepath);
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
    const exists = fs.existsSync(this.filepath);

    if(!exists) throw new Error(`File ${this.filepath} doesn't exist`);

    this.readlineInterface = readline.createInterface({
      input: fs.createReadStream(this.filepath),
      output: process.stdout,
      crlfDelay: Infinity
    });
  }

  readlineInterfacePromise(
    onLineHandler: ReadlineInterfaceLineHandler,
    onCloseHandler: ReadlineInterfaceErrorHandler
  ): Promise<any> {
    if(!this.readlineInterface) {
      this.createReadlineInterface();
      // const errorMessage = `
      //   Property this.readlineInterface not created. Please call createReadlineInterface() before using readlineInterfacePromise() in child class 
      // `;
      // throw new Error(errorMessage);
    }

    return new Promise((resolve, reject) => {
      try {
        this.readlineInterface?.on('line', onLineHandler);
        this.readlineInterface?.on('close', () => {
          try {
            onCloseHandler(resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  
  abstract readContent(): Promise<any[]> | undefined;
  abstract readFile(): Promise<any> | undefined;
}
