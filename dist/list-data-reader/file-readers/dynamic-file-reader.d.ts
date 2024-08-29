import { FileReader } from '../utils/file-reader';
export declare class DynamicFileReader extends FileReader {
    constructor(filepath: string);
    get fileReader(): any;
    readFile(): Promise<null>;
    readContent(): Promise<any>;
}
