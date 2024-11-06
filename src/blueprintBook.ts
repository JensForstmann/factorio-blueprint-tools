import { Icon } from './icon';
import { Plan } from './plan';
import { VERSION } from './version';

export type BlueprintBookPlan = Plan & {
	/** 0-based */
	index: number;
};

export type BlueprintBook = {
	blueprint_book: {
		blueprints?: Array<BlueprintBookPlan>;
		item: 'blueprint-book';
		label?: string;
		description?: string;
		icons?: Icon[];
		/** 0-based */
		active_index: number;
		version: number;
	};
};

export const createEmptyBlueprintBook = (): BlueprintBook => {
	return {
		blueprint_book: {
			item: 'blueprint-book',
			active_index: 0,
			version: VERSION,
		},
	};
};

export const addPlan = (blueprintBook: BlueprintBook, plan: Plan): BlueprintBookPlan => {
	if (!blueprintBook.blueprint_book.blueprints) {
		blueprintBook.blueprint_book.blueprints = [];
	}
	const newPlan: BlueprintBookPlan = {
		...plan,
		index: blueprintBook.blueprint_book.blueprints.length + 1,
	};
	blueprintBook.blueprint_book.blueprints.push(newPlan);
	return newPlan;
};
