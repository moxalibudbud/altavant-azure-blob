import { FileReader } from '../utils/file-reader';
export declare class JSONReader extends FileReader {
    constructor(filepath: string);
    readContent(): Promise<any>;
    readFile(): Promise<any>;
}
