import { expect } from 'chai';
import 'mocha';

import { isBlueprint, isBlueprintBook, isDeconstructionPlanner, isUpgradePlanner } from '../src';
import * as examples from './examples';

describe('types', function () {
	it('should type guard blueprints', function () {
		expect(isBlueprint(examples.aBlueprint)).to.be.true;
		expect(isBlueprint(examples.aBlueprintBook)).to.be.false;
		expect(isBlueprint(examples.aDeconstructionPlanner)).to.be.false;
		expect(isBlueprint(examples.aUpgradePlanner)).to.be.false;
		expect(isBlueprint(false)).to.be.false;
		expect(isBlueprint({})).to.be.false;
		expect(isBlueprint({ blueprint: {} })).to.be.false;
		expect(isBlueprint({ blueprint: { item: '' } })).to.be.false;
	});
	it('should type guard blueprint books', function () {
		expect(isBlueprintBook(examples.aBlueprintBook)).to.be.true;
		expect(isBlueprintBook(examples.aBlueprint)).to.be.false;
		expect(isBlueprintBook(examples.aDeconstructionPlanner)).to.be.false;
		expect(isBlueprintBook(examples.aUpgradePlanner)).to.be.false;
		expect(isBlueprintBook(false)).to.be.false;
		expect(isBlueprintBook({})).to.be.false;
		expect(isBlueprintBook({ blueprint_book: {} })).to.be.false;
		expect(isBlueprintBook({ blueprint_book: { item: '' } })).to.be.false;
	});
	it('should type guard deconstruction planner', function () {
		expect(isDeconstructionPlanner(examples.aDeconstructionPlanner)).to.be.true;
		expect(isDeconstructionPlanner(examples.aBlueprint)).to.be.false;
		expect(isDeconstructionPlanner(examples.aBlueprintBook)).to.be.false;
		expect(isDeconstructionPlanner(examples.aUpgradePlanner)).to.be.false;
		expect(isDeconstructionPlanner(false)).to.be.false;
		expect(isDeconstructionPlanner({})).to.be.false;
		expect(isDeconstructionPlanner({ deconstruction_planner: {} })).to.be.false;
		expect(isDeconstructionPlanner({ deconstruction_planner: { item: '' } })).to.be.false;
	});
	it('should type guard upgrade planner', function () {
		expect(isUpgradePlanner(examples.aUpgradePlanner)).to.be.true;
		expect(isUpgradePlanner(examples.aBlueprint)).to.be.false;
		expect(isUpgradePlanner(examples.aBlueprintBook)).to.be.false;
		expect(isUpgradePlanner(examples.aDeconstructionPlanner)).to.be.false;
		expect(isUpgradePlanner(false)).to.be.false;
		expect(isUpgradePlanner({})).to.be.false;
		expect(isUpgradePlanner({ upgrade_planner: {} })).to.be.false;
		expect(isUpgradePlanner({ upgrade_planner: { item: '' } })).to.be.false;
	});
});
