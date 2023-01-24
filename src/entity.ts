import { Position } from './position';
import { Color } from './color';
import { ItemFilter } from './itemFilter';
import { ConnectionPoint } from './connection';
import { RequestFilter } from './requestFilter';

export type Entity = {
	entity_number: number;
	name: string;
	position: Position;
	direction?: number;
	orientation?: number;
	connections?: { 1?: ConnectionPoint; 2?: ConnectionPoint };
	neighbours?: any[];
	control_behavior?: any;
	items?: { [key: string]: number };
	recipe?: string;
	bar?: number;
	inventory?: { filters: ItemFilter[]; bar: number } | null;
	infinity_settings?: any;
	type?: 'input' | 'output';
	input_priority?: 'right' | 'left';
	output_priority?: 'right' | 'left';
	filter?: string;
	filters?: ItemFilter[];
	filter_mode?: 'whitelist' | 'blacklist';
	override_stack_size?: number;
	drop_position?: Position;
	pickup_position?: Position;
	request_filters?: RequestFilter[];
	request_from_buffers?: boolean;
	parameters?: any;
	alert_parameters?: any;
	auto_launch?: boolean;
	variation?: any;
	color?: Color;
	station?: string;

	// electric-energy-interface
	power_production?: number;
	power_usage?: number;
	buffer_size?: number;
};

const ensureConnectionPoint = (entity: Entity, color: 'red' | 'green', connectionPoint: 1 | 2) => {
	if (!entity.connections) {
		entity.connections = {};
	}
	if (!entity.connections[connectionPoint]) {
		entity.connections[connectionPoint] = {};
	}
	if (!entity.connections[connectionPoint]![color]) {
		entity.connections[connectionPoint]![color] = [];
	}
	return entity;
};

export const addEntityConnection = (
	entity1: Entity,
	entity2: Entity,
	color: 'red' | 'green',
	options?: {
		useEntity1SecondConnectionPoint?: boolean;
		useEntity2SecondConnectionPoint?: boolean;
	}
) => {
	const entity1ConnectionPoint = options?.useEntity1SecondConnectionPoint ? 2 : 1;
	const entity2ConnectionPoint = options?.useEntity2SecondConnectionPoint ? 2 : 1;

	ensureConnectionPoint(entity1, color, entity1ConnectionPoint);
	ensureConnectionPoint(entity2, color, entity2ConnectionPoint);

	entity1.connections![entity1ConnectionPoint]![color]!.push({
		entity_id: entity2.entity_number,
	});

	entity2.connections![entity2ConnectionPoint]![color]!.push({
		entity_id: entity1.entity_number,
	});
};
