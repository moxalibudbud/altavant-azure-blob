import { BlobLineReader } from '../blob-line-reader';
export declare class OutFileETL extends BlobLineReader {
    constructor(filepath: string);
    readContent(): Promise<any>;
    readBlob(): Promise<any>;
}
