import { ReadLine } from 'readline';
import { File } from './file';
export interface ReadlineInterfaceErrorHandler {
    (resolve: Function, reject: Function): void;
}
export interface ReadlineInterfaceLineHandler {
    (...args: any): void;
}
export declare abstract class FileReader {
    file: File;
    readlineInterface?: ReadLine;
    constructor(filepath: string);
    get filepath(): string;
    get extension(): string;
    get directory(): string;
    get filename(): string;
    createReadlineInterface(): void;
    readlineInterfacePromise(onLineHandler: ReadlineInterfaceLineHandler, onCloseHandler: ReadlineInterfaceErrorHandler): Promise<any>;
    abstract readContent(): Promise<any[]> | undefined;
    abstract readFile(): Promise<any> | undefined;
}
