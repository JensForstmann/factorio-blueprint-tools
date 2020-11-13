import { Signal } from './signal';
import { Icon } from './icon';

export type DeconstructionPlanner = {
	deconstruction_planner: {
		settings: null | {
			trees_and_rocks_only?: boolean;
			entity_filters?: {
				name: string;
				index: number;
			}[];
			tile_filters?: {
				name: string;
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
