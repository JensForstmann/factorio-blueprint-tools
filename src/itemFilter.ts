import { Comparator } from './circuitCondition';

export type ItemFilter = {
	/** 1-based */
	index: number;
	name: string;
	quality?: string;
	comparator?: Comparator;
};
