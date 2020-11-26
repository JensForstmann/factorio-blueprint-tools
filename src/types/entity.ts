import { Position } from './position';
import { Color } from './color';
import { ItemFilter } from './itemFilter';

export type Entity = {
	entity_number: number;
	name: string;
	position: Position;
	direction?: number;
	orientation?: number;
	connections?: any;
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
	request_filters?: any;
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
