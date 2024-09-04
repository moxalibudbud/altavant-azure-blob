import readline from 'readline';
import { File } from '@alshaya/list-data-reader';
import { BlobClient } from '@azure/storage-blob';
export interface ReadlineInterfaceCloseHandler {
    (resolve: Function): void;
}
export interface ReadlineInterfaceErrorHandler {
    (reject: Function): void;
}
export interface ReadlineInterfaceLineHandler {
    (...args: any): void;
}
export declare abstract class BlobLineReader {
    file: File;
    readlineInterface?: readline.Interface;
    constructor(url: string);
    get url(): string;
    get extension(): string;
    get filename(): string;
    get sourceBlobClient(): BlobClient;
    getReadableStream(): Promise<NodeJS.ReadableStream | undefined>;
    createReadlineInterface(): Promise<void>;
    cleanUpPreviousListeners(): void;
    readlineInterfacePromise(onLineHandler: ReadlineInterfaceLineHandler, onCloseHandler: ReadlineInterfaceCloseHandler): Promise<any>;
    abstract readBlob(): Promise<any> | undefined;
}
