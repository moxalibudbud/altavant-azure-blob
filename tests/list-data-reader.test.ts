import { beforeAll, describe, expect, test } from '@jest/globals';
import {
  spreadSheetToJson,
  File,
  fileReaderFactory
} from '../src/list-data-reader';
const path = require('path');
const MOCK_FILES = [
  {filename: 'csv-file.csv'},
  {filename: 'text-file.txt'},
  {filename: 'json-file.json'},
  {filename: 'excel-file.xls'},
  {filename: 'excel-file.xlsx'},
];

describe('Utility Testings', () => {
  test('helpers.spreadSheetToJson test', () => {
    const rows = [
      ['name','age','gender'],
      ['Doe',30,'Male'],
      ['Jane',25,'Female']
    ];
    const result = spreadSheetToJson(rows);
    expect(result).toEqual(expect.arrayContaining([{name: 'Doe', age: 30, gender: 'Male'}]))
    expect(result).toEqual(expect.arrayContaining([{name: 'Jane', age: 25, gender: 'Female'}]));
  });

  test('file test', () => {
    const file = new File(path.resolve(__dirname, '../mockdata/csv-file.csv'));
    
    expect(file.directory).toBe(path.resolve(__dirname, '../mockdata'));
    expect(file.filename).toBe('csv-file.csv')
    expect(file.extension).toBe('csv')
  });

});

describe.each(MOCK_FILES)('$filename reader test', ({filename}) => {
  const filepath = path.resolve(__dirname, `../mockdata/${filename}`);
  const file = new File(filepath);
  const fileReader = fileReaderFactory[file.extension];
  const fileReaderInstance = new fileReader(filepath);
  let result: any;

  beforeAll(async () => {
    result = await fileReaderInstance.readContent();
  });

  test(`${filename} reader must return an array`, () => {
    expect(result.length).toBeTruthy();
  });

  test(`${filename} valid array value test`, () => {
    const jsonSampleResult = {name: 'Doe', age: 30, gender: 'Male'};

    switch (file.extension) {
      case 'csv':
        expect(result).toEqual(expect.arrayContaining([{...jsonSampleResult, age: "30"}]));
        break;

      case 'txt':
        expect(result).toEqual(expect.arrayContaining(['0|0|60004| NORMAL|023323586573|233|1|181223']));
        break;

      case 'json':
        expect(result).toEqual(expect.arrayContaining([jsonSampleResult]));
        break;

      case 'xls':
        expect(result).toEqual(expect.arrayContaining([jsonSampleResult]));
        break;

      case 'xlsx':
        expect(result).toEqual(expect.arrayContaining([jsonSampleResult]));
        break;
    
      default:
        break;
    }
  });
});