import { Signal } from './signal';

export const COMPARATOR = {
	greaterThan: '>',
	lessThan: '<',
	equal: '=',
	greaterThanEqual: '≥',
	lessThanEqual: '≤',
	notEqual: '≠',
} as const;

export type Comparator = (typeof COMPARATOR)[keyof typeof COMPARATOR];

export type CircuitCondition = {
	constant?: number;
	comparator?: Comparator;
	first_signal?: Signal;
	second_signal?: Signal;
};
