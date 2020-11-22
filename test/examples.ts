import { Plan, Blueprint, BlueprintBook, UpgradePlanner, DeconstructionPlanner } from '../src';

export const bpString1 = '0eNrNVtuOmzAQ/ZWVn8mKS65ou1K1r3moEu1TFSEDTnYkMMjYSaOID+iH9Mf6JR1DlhBCthDtbvuCfJkZz5njOfhA/EixVACXxD0QCBKeEff7gWSw4TTSa3KfMuKSLQipcMUgnMZ6obQYLEluEOAh+0FcKzd6eC5qnnarJ0gWn9zSZMfEINuBDF5qrk6+MgjjEiSwMvdisve4in0mMKvTwcrPJJWQcIyaJhkUQzwPwwzG9yOD7HFg3o9ynU4jjF2FoUGgYhVRmYiWOMN6HINgRaVIIs9nL3QL6IFmiZKpkl7nSn0leRmJs0AflWkfS382gjFeBw0hVgRtQQQKZDG1amD0fNLcXuVteJ0qi5AFEGLpgyT2gV+Bbb3CxuNICKLMtChbWwmOMT3cC6HCtAaR9auLQTKmY3R3mpOilnFKRQHFJQ9o05eSZRkl3SMCxaW3FknsAccYxF3TKGPXGBMsbPI10je4lUkbuTGIfcVv2o3IYZW77m5JuXyTSasPjWuIJBM9JeO5rJ3SmjMza+qx6l6zjpd41A+7+eHY5zXszo3YnW7Yx+3KeQHa/rtgvR5XdesNzXrsmJKF4pqdNeEXvR0lG8gkBOcHnZzMhtNjP2FsNEzZXU/KbNphbjukvxibujmflNW0mZ3btBEwuU1Bzf9cQJ8vBPT3z183SOjiHSV0+LESOu3FpPn5RC5vIXJxQeTjP/4TOs0GffPlYl8lvbXR7a660Hwwja/cillVipiFoOIBixCjgGCQJhG7vBfj463QaRdPW7f2+kbxoz7DgpPl4u6bFuy7OS31eot/mSLKZOJY1sQcmdNZnv8BbSsBEA==';
export const bpString2 = '0eNrVWNuO2jAQ/ZWVH6ukihNYLmr71h/oPlaryIQBrE3s1HbQ0lX+vXbcQBZiiHeLtjxwcTyeyzkz44EXtMgrKAVlCs1fEM04k2j+8wVJumYkN8/UrgQ0R1RBgQLESGFWRk4RpsKMFwvKiOIC1QGibAnPaI7r4KIGIqjaFKBo1q8jrh8DBExRRcG61Cx2KauKBQht5KwzASq51Gc5Mx48N+I7NA8TbWFJBWR2Kw7MaSV4ni5gQ7ZUH9XyK5orEIOQoIKzsMyJAuN8xiuDJO5A8dg8ZsyalEYRNm8Clt2wqF4lWpKKrKKqWTYwdranWlfdedYiEe+dyfmaygbSDUgVEm1yC2Ep+JYuoQeU0KIS9WlNLlB1oiyyuj6PX0M86of4oDTV20u6B2dFhVTpCepbKlSln+y9shIhkGxjkJdg1KRtLtjYeAmCWDfQJ32UV6qsPJQ/IAP4UPqwSdm1AGDHO5PXxMZNUsRGTa/46Ij4ewfxo4O/imRPIWUShDpDNB5ETevqnpc30PJgq6ElIzKLoiSiSZ05+tZs/7UjQb9MAFr9b61DiQoCG1La+keZN3H9vPUCnpzy04f3+GCmIHke5qQoXZ0mqj8M3C9mu5KgbeTcdDEDqEcau/PYlYj3HsDgjwPm6zuBGTuBOUmg1wU8duA28e2xcafH3mxXtcq9CnR2oWO+8eacum5OAb8q/dnXSpNB5V3wJaR8lXawwle6SfoCmw2+GZJBRdkTTgdyAWSZbohNFKVdkW0TbyWazUbMaHJjMSTmY3LjyAECjvxGxNBi8Q9GRFfml5Q9ucZE/V2mxuCK5BJ88MEjFwCeM3J07fizHWHvH5Nd3RTHnawHyG0tO4eh2Avj5CjrsKun4GRw7UV7Py7j/V9UInb1G+w9iiZXHAMOZXZm/vSKOzpm3zUJ4bFfycXXLjkbz7trzhnv/WDib5H3419ieObCYTIYh/jmqt7Z6qbDGu5b+u3xCI0ng6993+HntlLSVYlxNIyMxJ+MWf/dZ0YW81/YvPMnYoBysgCNDPr+TDJ196MdpO8kZesc7gRIXokMtORWN7PGr8kkwXgSjaPprK7/AOoRHz4=';

export const bpObject1: Plan = {
    "deconstruction_planner": {
        "settings": null,
        "item": "deconstruction-planner",
        "version": 281474976710656
    }
};
export const bpObject2: Blueprint = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "item",
                    "name": "wooden-chest"
                },
                "index": 1
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "wooden-chest",
                "position": {
                    "x": 52.5,
                    "y": -2.5
                }
            }
        ],
        "item": "blueprint",
        "version": 281474976710656
    }
};

export const aBlueprint: Blueprint = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "item",
                    "name": "wooden-chest"
                },
                "index": 1
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "wooden-chest",
                "position": {
                    "x": 52.5,
                    "y": -2.5
                }
            }
        ],
        "item": "blueprint",
        "version": 281474976710656
    }
};

export const aBlueprintBook: BlueprintBook = {
    "blueprint_book": {
        "blueprints": [
            {
                "blueprint": {
                    "icons": [
                        {
                            "signal": {
                                "type": "item",
                                "name": "wooden-chest"
                            },
                            "index": 1
                        }
                    ],
                    "entities": [
                        {
                            "entity_number": 1,
                            "name": "wooden-chest",
                            "position": {
                                "x": 52.5,
                                "y": -2.5
                            }
                        }
                    ],
                    "item": "blueprint",
                    "version": 281474976710656
                },
                "index": 0
            },
            {
                "blueprint_book": {
                    "blueprints": [
                        {
                            "blueprint": {
                                "icons": [
                                    {
                                        "signal": {
                                            "type": "item",
                                            "name": "iron-chest"
                                        },
                                        "index": 1
                                    }
                                ],
                                "entities": [
                                    {
                                        "entity_number": 1,
                                        "name": "iron-chest",
                                        "position": {
                                            "x": 54.5,
                                            "y": -2.5
                                        }
                                    }
                                ],
                                "item": "blueprint",
                                "version": 281474976710656
                            },
                            "index": 0
                        },
                        {
                            "blueprint_book": {
                                "blueprints": [
                                    {
                                        "blueprint": {
                                            "icons": [
                                                {
                                                    "signal": {
                                                        "type": "item",
                                                        "name": "steel-chest"
                                                    },
                                                    "index": 1
                                                }
                                            ],
                                            "entities": [
                                                {
                                                    "entity_number": 1,
                                                    "name": "steel-chest",
                                                    "position": {
                                                        "x": 56.5,
                                                        "y": -2.5
                                                    }
                                                }
                                            ],
                                            "item": "blueprint",
                                            "version": 281474976710656
                                        },
                                        "index": 0
                                    }
                                ],
                                "item": "blueprint-book",
                                "active_index": 0,
                                "version": 281474976710656
                            },
                            "index": 1
                        }
                    ],
                    "item": "blueprint-book",
                    "active_index": 1,
                    "version": 281474976710656
                },
                "index": 1
            }
        ],
        "item": "blueprint-book",
        "active_index": 0,
        "version": 281474976710656
    }
};

export const aUpgradePlanner: UpgradePlanner = {
    "upgrade_planner": {
        "settings": {
            "mappers": [
                {
                    "from": {
                        "type": "entity",
                        "name": "transport-belt"
                    },
                    "to": {
                        "type": "entity",
                        "name": "fast-transport-belt"
                    },
                    "index": 0
                }
            ]
        },
        "item": "upgrade-planner",
        "version": 281474976710656
    }
};

export const aDeconstructionPlanner: DeconstructionPlanner = {
    "deconstruction_planner": {
        "settings": null,
        "item": "deconstruction-planner",
        "version": 281474976710656
    }
};
