import path from 'path';

export class File {
  
  filepath: string;

  constructor(filepath: string) {
    this.filepath = filepath;
  }

  get directory(): string {
    return path.dirname(this.filepath);
  }

  get filename(): string {
    return path.basename(this.filepath);
  }

  get extension(): string {
    return path.extname(this.filepath).replace('.','');
  }
}
