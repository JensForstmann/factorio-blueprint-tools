export type WaitCondition = {
	type:
		| 'time'
		| 'inactivity'
		| 'full'
		| 'empty'
		| 'item_count'
		| 'circuit'
		| 'robots_inactive'
		| 'fluid_count'
		| 'passenger_present'
		| 'passenger_not_present';
	compare_type: 'and' | 'or';
	ticks?: number;
	condition?: any; // CircuitCondition
};
