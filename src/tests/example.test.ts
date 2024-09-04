import 'dotenv/config';
import { test, expect, describe } from '@jest/globals';
import { OutFileLineModel } from '../examples/out-file-line-model';

describe('Test examples', () => {
  const line = '400346858677|129006063|2154-5464|MADRAS NICK STRIPE SHIRT|GREEN|MEDIUM|106|AME_MENS APPAREL|9|015-MENS SHIRTS|7|SS FASHION SHIRTS|1.7334';
  const model = new OutFileLineModel(line);

  test('toJSON should pass', () => {
    const result: any = model.toJSON();
    const exist = !!result['index-1'];

    expect(exist).toBe(true);
  });

  test('validate should pass', () => {
    model.error = 'sample error';
    expect(model.isValid).toBeFalsy();

    model.error = undefined;
    expect(model.isValid).toBeTruthy();
  });
});