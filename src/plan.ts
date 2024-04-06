import { Blueprint } from './blueprint';
import { BlueprintBook } from './blueprintBook';
import { DeconstructionPlanner } from './deconstructionPlanner';
import { UpgradePlanner } from './upgradePlanner';

export type Plan = Blueprint | BlueprintBook | DeconstructionPlanner | UpgradePlanner;
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

const isObject = (u: unknown): u is object => {
	return typeof u === 'object' && u !== null;
};

export const isBlueprint = (plan: unknown): plan is Blueprint => {
	return isObject(plan) && (plan as DeepPartial<Blueprint>).blueprint?.item === 'blueprint';
};

export const isBlueprintBook = (plan: unknown): plan is BlueprintBook => {
	return (
		isObject(plan) &&
		(plan as DeepPartial<BlueprintBook>).blueprint_book?.item === 'blueprint-book'
	);
};

export const isDeconstructionPlanner = (plan: unknown): plan is DeconstructionPlanner => {
	return (
		isObject(plan) &&
		(plan as DeepPartial<DeconstructionPlanner>).deconstruction_planner?.item ===
			'deconstruction-planner'
	);
};

export const isUpgradePlanner = (plan: unknown): plan is UpgradePlanner => {
	return (
		isObject(plan) &&
		(plan as DeepPartial<UpgradePlanner>).upgrade_planner?.item === 'upgrade-planner'
	);
};
