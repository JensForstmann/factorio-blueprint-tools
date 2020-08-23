import { plan } from './plan';

export type blueprintBook = {
	blueprint_book: {
		blueprints: Array<plan & { index: number }>;
		active_index: number;
		item: 'blueprint-book';
		label?: string;
		version: number;
	};
};
