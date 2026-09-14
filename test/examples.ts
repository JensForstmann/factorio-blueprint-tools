import { Plan, Blueprint, BlueprintBook, UpgradePlanner, DeconstructionPlanner } from '../src';

export const bpString1 =
	'0eNrNVktu2zAQvUowayrQJ7Zjog1QZJtFYSOrwhBkapwMIJECRSYxDB2gB+nFepKCUuIospxKRtN2Y4gSZzhv3rxn7mCdWSw0SQN8BySULIF/20FJdzLJ3DuzLRA4PJA2NsmAgUxy96LZ4S2hYkAyxSfgQcVGRC5akWFvJBnMX8MK9YjaKx/JiPtWaFStGKA0ZAib2uvFNpY2X6MGHrwebNelSQwpCQwKVVL9yHfwBNybnk8YbIF7/vmkcuV00oT7NIkQNrdZYpTuyXPRzsNAKGm0yuI13icPpLTbpqwprIkHd+oLVE0micIdVbqYwP3caUTZBk0p8IiBIC0smXoZtMC49az7eVX14Y32VaQoKEXtCZWvSR6BHbzADioGKemm0rptfS14zhkLJVPaY9qQLsf1hUGJLsfwoBuoe5kXia6hcPgEbDQlyyZLsY2FstLEG63ymGRhDfBNkpV4jDGNaZeviZvgXibDalUxCI/EXQ4j8mJfu1O3SaR5l8lgDI0bygzqkZZx2/TOOs+Z+y33WA3v2cAhnozD7n849psW9uhE7NEw7NN+5zwAHf7esF6O26v1BLE+K6ZhoR6zNyL87D5n6o5KQ+LtQa9BfifoapwxdgTTqOva+t19AYNH0lg/+06c1zbo7pm/3dNHwOw0B/X/cwO9PTDQn99/nGChiz9ooRcfa6GXo5j0/z6Ry1OIXBwQefWP/wmjrkDfvbmER0nvFXo41Be6F6bpkamY71uRY0o29zBDYTQJr1AZHs7F9HkqXNn11Za3bt8MsmSNGXBYLs6+OsM+u0kav35AXdZZZrMoCGb+xL+cV9UvbSsBEA==';
export const bpString2 =
	'0eNrVmFFv2jAQx79K5ccpmeIECkTb3vYF1sepikxywKmOndkOKqvy3ScnC6QQQ9IOdbwgJTbnu9//7nzwQpa8hEKhMCR+IZhKoUn884VoXAvG7TuzK4DEBA3kxCOC5fbJ7jNMGD+V+RIFM1KRyiMoMngmMa28ixaYQrPJwWDabyOsHj0CwqBBaFyqH3aJKPMlKBLTs854pJAaDUphPXiut+9I7EeVRzJUkDZLoWe/bZTkyRI2bItS2f0r5AbUIBKopPALzgxY51NZWpK0g+Kxfi1Ec6S2hqj9UJB1w8KMxJFHUlRpiaZ+rDF2lufVY1V13rUkwr0zXK5R10g3oI3PUoNb8Aslt5hBDxS/oRL0WY0uSHViLGhsfZ6+RjzpR3wwmqRSZLiHs0KlTXJCfYvKlIwfwDc7fGDpxpLXYM0kbS40sckCFGvcIJ+IR2RpinKE8QdigQ+Vj9qUXSsAcbwyey1sWCdFaM30bp8cCX/vEH5y8New9MlHoUGZM0LTQdK0ru51eYMsD001tGIE9iEvmKpTJybf6uW/52gwSR1AovE3kNioErwmpKT1D8Vo4fp16wUenerTx3t6OCZnnPuc5YWr0wTVh8H9YpdLDUkqubRdzAIdkcbuPHYl4v0IMPTjwHx9J5ipE8xJAr0u4KmD22xsjw07PfZmu2pjfFSBLi50zDfenHPXzangVwm6t5VGg8o7lxkkcpV0WNEr3SR9gS0G3wzRoKLsCaeDXAHLkg1rEsWAMLpt4u2OerHeZi25WQyJ+VjcMHBAoMG4EdFvWPyDEdGV+QWKJ9eY6BHUiT1wxbiGMXzoxAVg5IwcXDv+dMfE+8dkVzelYSfrAXhTy85hKBzFODrKOurqKTQaXHvB3o/LvP+LSqSufkNHj6LRFceAQ5mdmT9HxR0cq++ahOh0XMmF1y65Jp5315wz3vvBwt+i7se/xOjCxWE2mEN4c1XvbHXzYQ33Lf32eISms8HX/tjh57ZS0lWJYTBMjGi8GIv+u8+OLPa/sLjzJ6JHOFsCJzH5/sxSc/ejHaTvNIo1hzsFWpYqBeKRLShd+zWbRZTOgmkwX1TVH+oRHz4=';

export const bpObject1: Plan = {
	deconstruction_planner: {
		settings: null,
		item: 'deconstruction-planner',
		version: 281474976710656,
	},
};
export const bpObject2: Blueprint = {
	blueprint: {
		icons: [
			{
				signal: {
					type: 'item',
					name: 'wooden-chest',
				},
				index: 1,
			},
		],
		entities: [
			{
				entity_number: 1,
				name: 'wooden-chest',
				position: {
					x: 52.5,
					y: -2.5,
				},
			},
		],
		item: 'blueprint',
		version: 281474976710656,
	},
};

export const aBlueprint: Blueprint = {
	blueprint: {
		icons: [
			{
				signal: {
					type: 'item',
					name: 'wooden-chest',
				},
				index: 1,
			},
		],
		entities: [
			{
				entity_number: 1,
				name: 'wooden-chest',
				position: {
					x: 52.5,
					y: -2.5,
				},
			},
		],
		item: 'blueprint',
		version: 281474976710656,
	},
};

export const aBlueprintBook: BlueprintBook = {
	blueprint_book: {
		blueprints: [
			{
				blueprint: {
					icons: [
						{
							signal: {
								type: 'item',
								name: 'wooden-chest',
							},
							index: 1,
						},
					],
					entities: [
						{
							entity_number: 1,
							name: 'wooden-chest',
							position: {
								x: 52.5,
								y: -2.5,
							},
						},
					],
					item: 'blueprint',
					version: 281474976710656,
				},
				index: 0,
			},
			{
				blueprint_book: {
					blueprints: [
						{
							blueprint: {
								icons: [
									{
										signal: {
											type: 'item',
											name: 'iron-chest',
										},
										index: 1,
									},
								],
								entities: [
									{
										entity_number: 1,
										name: 'iron-chest',
										position: {
											x: 54.5,
											y: -2.5,
										},
									},
								],
								item: 'blueprint',
								version: 281474976710656,
							},
							index: 0,
						},
						{
							blueprint_book: {
								blueprints: [
									{
										blueprint: {
											icons: [
												{
													signal: {
														type: 'item',
														name: 'steel-chest',
													},
													index: 1,
												},
											],
											entities: [
												{
													entity_number: 1,
													name: 'steel-chest',
													position: {
														x: 56.5,
														y: -2.5,
													},
												},
											],
											item: 'blueprint',
											version: 281474976710656,
										},
										index: 0,
									},
								],
								item: 'blueprint-book',
								active_index: 0,
								version: 281474976710656,
							},
							index: 1,
						},
					],
					item: 'blueprint-book',
					active_index: 1,
					version: 281474976710656,
				},
				index: 1,
			},
		],
		item: 'blueprint-book',
		active_index: 0,
		version: 281474976710656,
	},
};

export const aUpgradePlanner: UpgradePlanner = {
	upgrade_planner: {
		settings: {
			mappers: [
				{
					from: {
						type: 'entity',
						name: 'transport-belt',
					},
					to: {
						type: 'entity',
						name: 'fast-transport-belt',
						module_limit: 0,
						module_slots: [],
					},
					index: 0,
				},
			],
		},
		item: 'upgrade-planner',
		version: 281474976710656,
	},
};

export const aDeconstructionPlanner: DeconstructionPlanner = {
	deconstruction_planner: {
		settings: null,
		item: 'deconstruction-planner',
		version: 281474976710656,
	},
};
