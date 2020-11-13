import { Plan } from './plan';

export type BlueprintBook = {
	blueprint_book: {
		blueprints: Array<Plan & { index: number }>;
		active_index: number;
		item: 'blueprint-book';
		label?: string;
		version: number;
	};
};
