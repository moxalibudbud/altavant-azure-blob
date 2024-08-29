export declare class File {
    filepath: string;
    constructor(filepath: string);
    get directory(): string;
    get filename(): string;
    get extension(): string;
}
