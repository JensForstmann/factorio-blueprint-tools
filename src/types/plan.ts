import { Blueprint } from './blueprint';
import { BlueprintBook } from './blueprintBook';
import { DeconstructionPlanner } from './deconstructionPlanner';
import { UpgradePlanner } from './upgradePlanner';

export type Plan = Blueprint | BlueprintBook | DeconstructionPlanner | UpgradePlanner;

export function isBlueprint(plan: any): plan is Blueprint {
	return !!(plan && plan.blueprint && plan.blueprint.item === 'blueprint');
}

export function isBlueprintBook(plan: any): plan is BlueprintBook {
	return !!(plan && plan.blueprint_book && plan.blueprint_book.item === 'blueprint-book');
}

export function isDeconstructionPlanner(plan: any): plan is DeconstructionPlanner {
	return !!(
		plan &&
		plan.deconstruction_planner &&
		plan.deconstruction_planner.item === 'deconstruction-planner'
	);
}

export function isUpgradePlanner(plan: any): plan is UpgradePlanner {
	return !!(plan && plan.upgrade_planner && plan.upgrade_planner.item === 'upgrade-planner');
}
