import { Comparator } from './circuitCondition';
import { Icon } from './icon';

export type DeconstructionPlanner = {
	deconstruction_planner: {
		settings: null | {
			trees_and_rocks_only?: boolean;
			entity_filter_mode?: number;
			tile_filter_mode?: number;
			entity_filters?: {
				name: string;
				quality?: string;
				comparator?: Comparator;
				/** 0-based */
				index: number;
			}[];
			tile_selection_mode?: number;
			tile_filters?: {
				name: string;
				/** 0-based */
				index: number;
			}[];

			description?: string;
			icons?: Icon[];
		};
		item: 'deconstruction-planner';
		label?: string;
		version: number;
	};
};
