import { Blueprint } from './blueprint';
import { BlueprintBook } from './blueprintBook';
import { DeconstructionPlanner } from './deconstructionPlanner';
import { UpgradePlanner } from './upgradePlanner';

export type Plan = Blueprint | BlueprintBook | DeconstructionPlanner | UpgradePlanner;

export function isBlueprint(plan: any): plan is Blueprint {
	return !!plan.blueprint;
}

export function isBlueprintBook(plan: any): plan is BlueprintBook {
	return !!plan.blueprint_book;
}

export function isDeconstructionPlanner(plan: any): plan is DeconstructionPlanner {
	return !!plan.deconstruction_planner;
}

export function isUpgradePlanner(plan: any): plan is UpgradePlanner {
	return !!plan.upgrade_planner;
}
