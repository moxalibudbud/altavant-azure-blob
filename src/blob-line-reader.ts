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

export abstract class BlobLineReader {

  file: File;
  readlineInterface?: ReadLine;

  constructor(url: string) {
    this.file = new File(url);
  }

  get extension(): string {
    return this.file.extension;
  }

  get filename(): string {
    return this.file.filename;
  }

  createReadlineInterface() {
    this.readlineInterface = readline.createInterface({
      input: fs.createReadStream(this.filename),
      output: process.stdout,
      crlfDelay: Infinity
    });
  }

  /**
   * Clean up previous listeners if they exist to avoid memory leaks or duplicate event handling
   * @returns void
   */
  cleanUpPreviousListeners(): void {
    if(!this.readlineInterface) return;

    this.readlineInterface.removeAllListeners('line');
    this.readlineInterface.removeAllListeners('close');
  }

  readlineInterfacePromise(
    onLineHandler: ReadlineInterfaceLineHandler,
    onCloseHandler: ReadlineInterfaceCloseHandler
  ): Promise<any> {
    if(!this.readlineInterface) {
      this.createReadlineInterface();
    }

    this.cleanUpPreviousListeners();
    
    return new Promise((resolve, reject) => {
      try {
        this.readlineInterface?.on('line', onLineHandler);
        this.readlineInterface?.on('close', () => {
          onCloseHandler(resolve);
          this.readlineInterface?.close(); // Close the readline interface after the file is fully processed
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  
  abstract readContent(): Promise<any[]> | undefined;
  abstract readBlob(): Promise<any> | undefined;
}
