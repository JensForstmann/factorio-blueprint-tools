import { Icon } from './icon';
import { Entity } from './entity';
import { Tile } from './tile';
import { Schedule } from './schedule';
import { VERSION } from './version';

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

export const createEmptyBlueprint = (): Blueprint => {
	return {
		blueprint: {
			icons: [],
			entities: [],
			item: 'blueprint',
			version: VERSION,
		},
	};
};

export const addEntity = (blueprint: Blueprint, entity: Omit<Entity, 'entity_number'>) => {
	const newEntity: Entity = {
		...entity,
		entity_number: blueprint.blueprint.entities.length + 1,
	};
	blueprint.blueprint.entities.push(newEntity);
	return newEntity;
};
