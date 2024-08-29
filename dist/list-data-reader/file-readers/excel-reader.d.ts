import { FileReader } from '../utils/file-reader';
interface WorkBook {
    SheetNames: string[];
    Sheets: any;
}
export declare class ExcelReader extends FileReader {
    constructor(filepath: string);
    readContent(): Promise<any[]>;
    readFile(): Promise<WorkBook>;
    toJSON(workbook: WorkBook): Promise<any[]>;
}
export {};
