import { signal } from './signal';
import { icon } from './icon';

export type deconstructionPlanner = {
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
			icons?: icon[];
		};
		item: 'deconstruction-planner';
		label?: string;
		version: number;
	};
};
