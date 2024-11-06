import { Comparator } from './circuitCondition';
import { Icon } from './icon';

export type UpgradePlanner = {
	upgrade_planner: {
		settings: null | {
			mappers: Array<{
				from?: {
					type: 'entity' | 'item';
					name: string;
					quality?: string;
					comparator?: Comparator;
					module_filter?: {
						name: string;
						quality?: string;
						comparator?: Comparator;
					};
				};
				to?: {
					type: 'entity' | 'item';
					name: string;
					quality?: string;
					module_limit: number;
					module_slots: Array<{
						name: string;
						quality?: string;
					}>;
				};
				/** 0-based */
				index: number;
			}>;
			icons?: Icon[];
			description?: string;
		};
		item: 'upgrade-planner';
		description?: string;
		label?: string;
		version: number;
	};
};
