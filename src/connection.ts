export type circuitConnectorId =
	| 'accumulator'
	| 'constant_combinator'
	| 'container'
	| 'linked_container'
	| 'programmable_speaker'
	| 'rail_signal'
	| 'rail_chain_signal'
	| 'roboport'
	| 'storage_tank'
	| 'wall'
	| 'electric_pole'
	| 'inserter'
	| 'lamp'
	| 'combinator_input'
	| 'combinator_output'
	| 'offshore_pump'
	| 'pump';

export type ConnectionData = {
	entity_id: number;
	circuit_id?: circuitConnectorId;
};
export type ConnectionPoint = {
	green?: ConnectionData[];
	red?: ConnectionData[];
};
