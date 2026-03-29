import { expect } from 'chai';
import 'mocha';

import { addPlan, createEmptyBlueprint, createEmptyBlueprintBook } from '../src';

describe('blueprint book', function () {
	it('should create empty blueprint book', function () {
		expect(createEmptyBlueprintBook()).to.be.ok;
	});
	it('should add a plan', function () {
		const book = createEmptyBlueprintBook();
		expect(addPlan(book, createEmptyBlueprint())).to.be.ok;
	});
});
