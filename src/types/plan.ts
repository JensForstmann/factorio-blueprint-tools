import { Blueprint } from './blueprint';
import { BlueprintBook } from './blueprintBook';
import { DeconstructionPlanner } from './deconstructionPlanner';
import { UpgradePlanner } from './upgradePlanner';

export type Plan = Blueprint | BlueprintBook | DeconstructionPlanner | UpgradePlanner;
