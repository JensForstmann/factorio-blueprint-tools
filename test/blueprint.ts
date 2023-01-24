import { expect } from 'chai';
import 'mocha';

import { addEntity, createEmptyBlueprint } from '../src';

describe('blueprint', function () {
	it('should create empty blueprint', function () {
		expect(createEmptyBlueprint()).to.be.ok;
	});
	it('should add an entity', function () {
		const bp = createEmptyBlueprint();
		expect(
			addEntity(bp, {
				name: 'any',
				position: {
					x: 0,
					y: 1,
				},
			})
		).to.be.ok;
	});
});
