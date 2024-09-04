export declare class OutFileLineModel {
    line: string;
    error?: any;
    constructor(line: string);
    toJSON(): any;
    validate(): void;
    get isValid(): boolean | string;
}
