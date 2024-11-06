import { Position } from './position';
import { Color } from './color';
import { ItemFilter } from './itemFilter';
import { Signal } from './signal';
import { CircuitCondition, Comparator } from './circuitCondition';
import { Operator } from './operator';

export type Entity = {
	/** 1-based */
	entity_number: number;
	name: string;
	position: Position;
	quality?: string;
	direction?: number;
	enable_logistics_while_moving?: boolean;
	orientation?: number;
	control_behavior?: {
		circuit_enabled?: boolean;
		circuit_condition?: CircuitCondition;
		circuit_condition_enabled?: boolean;
		connect_to_logistic_network?: boolean;
		logistic_condition?: CircuitCondition;
		sections?: null | {
			sections: Array<{
				/** 1-based */
				index: number;
				filters?: Array<
					ItemFilter & {
						count?: number;
						type?: string;
					}
				>;
				group?: string;
			}>;
		};
		is_on?: boolean;
		circuit_mode_of_operation?: number;
		/** used by programmable speaker */
		circuit_parameters?: {
			signal_value_is_pitch: boolean;
			instrument_id: number;
			note_id: number;
		};
		send_to_train?: boolean;
		read_from_train?: boolean;
		read_stopped_train?: boolean;
		train_stopped_signal?: Signal;
		set_trains_limit?: boolean;
		trains_limit_signal?: Signal;
		read_trains_count?: boolean;
		trains_count_signal?: Signal;
		set_priority?: boolean;
		priority_signal?: Signal;
		output_signal?: Signal;

		circuit_read_hand_contents?: boolean;
		/**
		 * @see https://lua-api.factorio.com/latest/defines.html#defines.control_behavior
		 */
		circuit_hand_read_mode?: number;
		/**
		 * @see https://lua-api.factorio.com/latest/defines.html#defines.control_behavior
		 */
		circuit_contents_read_mode?: number;

		// Roboport
		read_items_mode?: number;
		read_robot_stats?: boolean;
		available_logistic_output_signal?: Signal;
		total_logistic_output_signal?: Signal;
		available_construction_output_signal?: Signal;
		total_construction_output_signal?: Signal;
		roboport_count_output_signal?: Signal;

		/** used by pump */
		set_filter?: boolean;

		/** used by inserter */
		circuit_set_filters?: boolean;
		circuit_set_stack_size?: boolean;
		stack_control_input_signal?: Signal;

		// train signals
		circuit_close_signal?: boolean;
		circuit_read_signal?: boolean;
		red_output_signal?: null | Signal;
		orange_output_signal?: null | Signal;
		green_output_signal?: null | Signal;

		// gate
		circuit_open_gate?: boolean;
		circuit_read_sensor?: boolean;

		// assembling machine
		set_recipe?: boolean;
		read_contents?: boolean;
		read_working?: boolean;
		working_signal?: Signal;
		read_ingredients?: boolean;
		read_recipe_finished?: boolean;
		recipe_finished_signal?: Signal;

		read_burner_fuel?: boolean;
		read_temperature?: boolean;
		temperature_signal?: Signal;

		arithmetic_conditions?: {
			operation: Operator;
			first_signal_networks?: {
				red: boolean;
				green: boolean;
			};
			second_signal_networks?: {
				red: boolean;
				green: boolean;
			};
			first_signal?: Signal;
			first_constant?: number;
			second_signal?: Signal;
			second_constant?: number;
			output_signal?: Signal;
		};

		decider_conditions?: {
			conditions: null | Array<
				CircuitCondition & {
					first_signal_networks?: {
						red: boolean;
						green: boolean;
					};
					second_signal_networks?: {
						red: boolean;
						green: boolean;
					};
					compare_type?: 'and' | 'or';
				}
			>;
			outputs: null | Array<{
				signal?: Signal;
				copy_count_from_input?: boolean;
				networks?: {
					red: boolean;
					green: boolean;
				};
			}>;
		};

		// lamp settings
		use_colors?: boolean;
		red_signal?: Signal;
		green_signal?: Signal;
		blue_signal?: Signal;
		rgb_signal?: Signal;
		/** @see https://lua-api.factorio.com/latest/defines.html#defines.control_behavior */
		color_mode?: number;
	};

	/** used by lamp */
	always_on?: boolean;

	player_description?: string;
	items?: Array<{
		id: {
			name: string;
			quality?: string;
		};
		items: {
			in_inventory?: Array<{
				/** @see https://lua-api.factorio.com/latest/defines.html#defines.inventory */
				inventory: number;
				/** 0-based */
				stack: number;
				count?: 0;
			}>;
			grid_count?: number;
		};
	}>;
	recipe?: string;
	recipe_quality?: string;

	// chest settings
	/** 0-based */
	bar?: number;

	// cargo wagon settings
	inventory?: null | {
		filters?: ItemFilter[];
		/** 0-based */
		bar?: number;
	};

	// inserter settings
	filters?: ItemFilter[];
	filter_mode?: 'whitelist' | 'blacklist';
	use_filters?: boolean;
	override_stack_size?: number;
	spoil_priority?: 'spoiled-first' | 'fresh-first';

	// belt settings
	type?: 'input' | 'output'; // also used by loader
	input_priority?: 'left' | 'right' | 'none';
	output_priority?: 'left' | 'right' | 'none';

	infinity_settings?: {
		remove_unfiltered_items: boolean;
		filters: Array<
			ItemFilter & {
				count?: number;
				mode: 'at-least' | 'at-most' | 'exactly' | 'add' | 'remove';
				percentage?: number;
				temperature?: number;
			}
		>;
	};

	/** used by splitter */
	filter?: {
		name: string;
		quality?: string;
		comparator?: Comparator;
	};
	/** used by pump */
	fluid_filter?: string;

	request_filters?: {
		sections: Array<{
			/** 1-based */
			index: number;
			filters?: Array<{
				/** 1-based */
				index: number;
				name: string;
				quality?: string;
				comparator?: Comparator;
				count: number;
				max_count?: number;
			}>;
			group?: string;
			/** Used in rocket silo */
			active?: boolean;
		}>;
		trash_not_requested?: boolean;
		request_from_buffers?: boolean;
	};
	/** Used in rocket silo */
	transitional_request_index?: number;

	/** used by programmable speaker */
	parameters?: {
		playback_volume: number;
		playback_mode: 'local' | 'surface' | 'global';
		allow_polyphony: boolean;
	};
	/** used by programmable speaker */
	alert_parameters?: {
		show_alert: boolean;
		show_on_map: boolean;
		icon_signal_id?: Signal;
		alert_message: string;
	};

	color?: Color;

	// train station
	station?: string;
	manual_trains_limit?: number;
	priority?: number;

	// electric-energy-interface
	power_production?: number;
	power_usage?: number;
	buffer_size?: number;

	// car/tank/spidertron
	trunk_inventory?: null | {
		filters?: ItemFilter[];
	};
	ammo_inventory?: null | {
		filters?: ItemFilter[];
	};
	driver_is_main_gunner?: boolean;
	/** 1-based */
	selected_gun_index?: number;
	grid?: Array<{
		equipment: {
			name: string;
			quality?: string;
		};
		position: Position;
	}>;
	automatic_targeting_parameters?: {
		auto_target_without_gunner: boolean;
		auto_target_with_gunner: boolean;
	};

	// switch
	switch_state?: boolean;
};
