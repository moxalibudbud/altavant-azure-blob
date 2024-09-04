"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutFileLineModel = void 0;
class OutFileLineModel {
    constructor(line) {
        this.line = line;
    }
    toJSON() {
        const arr = this.line.split('|');
        const data = {};
        arr.map((value, index) => {
            data[`index-${index}`] = value;
        });
        return data;
    }
    validate() {
        this.error = 'sample error';
    }
    get isValid() {
        return !this.error;
    }
}
exports.OutFileLineModel = OutFileLineModel;
