import { expect } from 'chai';
import 'mocha';

import {
	addEntity,
	addEntityConnection,
	createEmptyBlueprint,
} from '../src';

describe('entity', function () {
	it('should add entity connection', function () {
		const bp = createEmptyBlueprint();
		const e1 = addEntity(bp, {
			name: 'any-1',
			position: { x: 1, y: 1 },
		});
		const e2 = addEntity(bp, {
			name: 'any-2',
			position: { x: 2, y: 2 },
		});
		const e3 = addEntity(bp, {
			name: 'any-3',
			position: { x: 3, y: 3 },
		});

		addEntityConnection(e1, e2, 'red');
		addEntityConnection(e2, e3, 'red');
		addEntityConnection(e3, e1, 'green', {
			useEntity1SecondConnectionPoint: true,
			useEntity2SecondConnectionPoint: true,
		});

		expect(e1.connections?.[1]?.red).to.have.lengthOf(1);
		expect(e1.connections?.[1]?.green).to.be.undefined;
		expect(e1.connections?.[2]?.red).to.be.undefined;
		expect(e1.connections?.[2]?.green).to.have.lengthOf(1);

		expect(e2.connections?.[1]?.red).to.have.lengthOf(2);
		expect(e2.connections?.[1]?.green).to.be.undefined;
		expect(e2.connections?.[2]?.red).to.be.undefined;
		expect(e2.connections?.[2]?.green).to.be.undefined;

		expect(e3.connections?.[1]?.red).to.have.lengthOf(1);
		expect(e3.connections?.[1]?.green).to.be.undefined;
		expect(e3.connections?.[2]?.red).to.be.undefined;
		expect(e3.connections?.[2]?.green).to.have.lengthOf(1);
	});
});
