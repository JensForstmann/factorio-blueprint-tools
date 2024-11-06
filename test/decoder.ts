import { expect } from 'chai';
import 'mocha';

import { encodePlan, decodePlan, isBlueprint } from '../src';
import * as examples from './examples';

describe('decode', function () {
	it('should return an object', function () {
		const result = decodePlan(examples.bpString1);
		expect(result).to.be.an('object');
	});
	it('should be a blueprint', function () {
		const result = decodePlan(examples.bpString1);
		expect(isBlueprint(result)).to.be.true;
	});
	it('should encode to the original string', function () {
		expect(encodePlan(decodePlan(examples.bpString1))).to.equal(examples.bpString1);
		expect(encodePlan(decodePlan(examples.bpString2))).to.equal(examples.bpString2);
	});
	it('should throw an error on unknown blueprint version', function () {
		expect(() => decodePlan('1...')).to.throw();
	});
	it('should throw an error on incorrect bp string', function () {
		expect(() => decodePlan('0eNrNVtuOmzAQ/ZWVn8mKS65o')).to.throw();
	});
});
