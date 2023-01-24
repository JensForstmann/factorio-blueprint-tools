import { Icon } from './icon';
import { Plan } from './plan';

export type BlueprintBook = {
	blueprint_book: {
		blueprints: Array<
			Plan & {
				/** 0-based */
				index: number;
			}
		>;
		/** 0-based */
		active_index: number;
		item: 'blueprint-book';
		label?: string;
		description?: string;
		icons?: Icon[];
		version: number;
	};
};
