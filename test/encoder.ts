import { expect } from 'chai';
import 'mocha';

import { encode, decode } from '../src';
import * as examples from './examples';

describe('encode', function() {
    it('should return a string', function() {
        const result = encode(examples.bpObject1);
        expect(result).to.be.a("string");
    });
    it('should return a string', function() {
        const result = encode(examples.bpObject2);
        expect(result).to.be.a("string");
    });
    it('should decode to the original plan', function() {
        expect(decode(encode(examples.bpObject1))).to.deep.equal(examples.bpObject1);
        expect(decode(encode(examples.bpObject2))).to.deep.equal(examples.bpObject2);
    });
});
