import { FileReader } from '../utils/file-reader';
export declare class TextReader extends FileReader {
    constructor(filepath: string);
    readContent(): Promise<any>;
    readFile(): Promise<any>;
}
