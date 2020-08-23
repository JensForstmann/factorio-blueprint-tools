import { icon } from './icon';
import { entity } from './entity';
import { tile } from './tile';

export type blueprint = {
	blueprint: {
		icons: icon[];
		entities: entity[];
		tiles?: tile[];
		item: 'blueprint';
		label?: string;
		version: number;
	};
};
