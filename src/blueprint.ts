import { Icon } from './icon';
import { Entity } from './entity';
import { Tile } from './tile';
import { Schedule } from './schedule';
import { VERSION } from './version';
import { Position } from './position';
import { Color } from './color';

export type Blueprint = {
	blueprint: {
		description?: string;
		'snap-to-grid'?: Position;
		'absolute-snapping'?: boolean;
		'position-relative-to-grid'?: Position;
		icons?: Icon[];
		entities?: Entity[];
		/** used with trains and cargo wagons */
		schedules?: Schedule[];
		/** used with trains and cargo wagons */
		stock_connections?: Array<{
			/** corresponding entity_number */
			stock: number;
			/** entity_number of the entity connected to the front */
			front?: number;
			/** entity_number of the entity connected to the back */
			back?: number;
		}>;
		tiles?: Tile[];
		/**
		 * Format: [entity_number, wire_connector_id, entity_number, wire_connector_id]
		 * @see https://lua-api.factorio.com/latest/defines.html#defines.wire_connector_id
		 */
		wires?: [number, number, number, number][];
		item: 'blueprint';
		label?: string;
		label_color?: Color;
		version: number;
	};
};

export const createEmptyBlueprint = (): Blueprint => {
	return {
		blueprint: {
			icons: [],
			item: 'blueprint',
			version: VERSION,
		},
	};
};

export const addEntity = (blueprint: Blueprint, entity: Omit<Entity, 'entity_number'>): Entity => {
	if (!blueprint.blueprint.entities) {
		blueprint.blueprint.entities = [];
	}
	const newEntity: Entity = {
		...entity,
		entity_number: blueprint.blueprint.entities.length + 1,
	};
	blueprint.blueprint.entities.push(newEntity);
	return newEntity;
};
