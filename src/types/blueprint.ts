import { Icon } from './icon';
import { Entity } from './entity';
import { Tile } from './tile';
import { Schedule } from './schedule';

export type Blueprint = {
	blueprint: {
		icons: Icon[];
		entities: Entity[];
		tiles?: Tile[];
		item: 'blueprint';
		label?: string;
		schedules?: Schedule[];
		description?: string;
		version: number;
	};
};
