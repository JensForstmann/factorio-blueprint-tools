import { position } from './position';
import { color } from './color';
import { itemFilter } from './itemFilter';

export type entity = {
	entity_number: number;
	name: string;
	position: position;
	direction?: number;
	orientation?: number;
	connections?: any;
	control_behavior?: any;
	items?: { [key: string]: number };
	recipe?: string;
	bar?: number;
	inventory?: { filters: itemFilter[]; bar: number };
	infinity_settings?: any;
	type?: 'input' | 'output';
	input_priority?: 'right' | 'left';
	output_priority?: 'right' | 'left';
	filter?: string;
	filters?: itemFilter[];
	filter_mode?: 'whitelist' | 'blacklist';
	override_stack_size?: number;
	drop_position?: position;
	pickup_position?: position;
	request_filters?: any;
	request_from_buffers?: boolean;
	parameters?: any;
	alert_parameters?: any;
	auto_launch?: boolean;
	variation?: any;
	color?: color;
	station?: string;

	// electric-energy-interface
	power_production?: number;
	power_usage?: number;
	buffer_size?: number;
};
