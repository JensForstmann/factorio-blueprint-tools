import { Icon } from './icon';
import { Entity } from './entity';
import { Tile } from './tile';

export type Blueprint = {
	blueprint: {
		icons: Icon[];
		entities: Entity[];
		tiles?: Tile[];
		item: 'blueprint';
		label?: string;
		description?: string;
		version: number;
	};
};
