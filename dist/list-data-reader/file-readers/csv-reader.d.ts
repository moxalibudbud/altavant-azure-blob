import { FileReader } from '../utils/file-reader';
export declare class CSVReader extends FileReader {
    constructor(filepath: string);
    readContent(): Promise<any[]>;
    readFile(): Promise<{
        delimeter: string;
        rows: any[];
    }>;
    getDelimeter(text: string, possibleDelimiters?: string[]): string;
    csvStringToArray(csvDataString: string, delimiter: string): any[];
}
