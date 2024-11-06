import { CircuitCondition } from './circuitCondition';

export type WaitCondition = {
	type:
		| 'circuit'
		| 'empty'
		| 'fluid_count'
		| 'fuel_item_count_all'
		| 'fuel_item_count_any'
		| 'full'
		| 'fuel_full'
		| 'not_empty'
		| 'inactivity'
		| 'item_count'
		| 'passenger_not_present'
		| 'passenger_present'
		| 'specific_destination_full'
		| 'specific_destination_not_full'
		| 'time';
	compare_type: 'and' | 'or';
	ticks?: number;
	condition?: CircuitCondition;
	station?: string;
};
