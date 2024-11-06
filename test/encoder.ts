import { expect } from 'chai';
import 'mocha';

import { encodePlan, decodePlan } from '../src';
import * as examples from './examples';

describe('encodePlan', function () {
	it('should return a string', function () {
		const result = encodePlan(examples.bpObject1);
		expect(result).to.be.a('string');
	});
	it('should return a string', function () {
		const result = encodePlan(examples.bpObject2);
		expect(result).to.be.a('string');
	});
	it('should decodePlan to the original plan', function () {
		expect(decodePlan(encodePlan(examples.bpObject1))).to.deep.equal(examples.bpObject1);
		expect(decodePlan(encodePlan(examples.bpObject2))).to.deep.equal(examples.bpObject2);
	});
});
