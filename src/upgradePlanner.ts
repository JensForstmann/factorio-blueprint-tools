import { Icon } from './icon';

export type UpgradePlanner = {
	upgrade_planner: {
		settings: null | {
			mappers: {}[];
			icons?: Icon[];
			description?: string;
		};
		item: 'upgrade-planner';
		description?: string;
		label?: string;
		version: number;
	};
};
