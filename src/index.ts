import { decodePlan } from './decoder';
import { encodePlan } from './encoder';

export * from './blueprint';
export * from './blueprintBook';
export * from './color';
export * from './connection';
export * from './decoder';
export * from './deconstructionPlanner';
export * from './encoder';
export * from './entity';
export * from './icon';
export * from './itemFilter';
export * from './plan';
export * from './position';
export * from './requestFilter';
export * from './signal';
export * from './tile';
export * from './upgradePlanner';

/**
 * @deprecated Use `decodePlan` instead. `decode` will be removed in the future!
 */
export const decode = decodePlan;

/**
 * @deprecated Use `encodePlan` instead. `encode` will be removed in the future!
 */
export const encode = encodePlan;
