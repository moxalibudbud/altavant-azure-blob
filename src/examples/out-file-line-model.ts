export class OutFileLineModel {

  line: string;
  error?: any;

  constructor(line: string) {
    this.line = line;
  }

  toJSON() {
    const arr: any[] = this.line.split('|');
    const data: any = {};
    arr.map((value, index) => {
      data[`index-${index}`] = value;
    });

    return data;
  }

  validate() {
    this.error = 'sample error';
  }

  get isValid(): boolean | string {
    return !this.error;
  }
}