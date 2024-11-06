import { Plan } from "../src/plan";

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "name": "accumulator"
                },
                "index": 1
            },
            {
                "signal": {
                    "name": "decider-combinator"
                },
                "index": 2
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "decider-combinator",
                "position": {
                    "x": 91,
                    "y": -4.5
                },
                "direction": 4,
                "control_behavior": {
                    "decider_conditions": {
                        "conditions": [
                            {
                                "first_signal": {
                                    "type": "virtual",
                                    "name": "signal-A"
                                },
                                "second_signal": {
                                    "type": "virtual",
                                    "name": "signal-L"
                                }
                            }
                        ],
                        "outputs": [
                            {
                                "signal": {
                                    "type": "virtual",
                                    "name": "signal-S"
                                },
                                "copy_count_from_input": false
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 2,
                "name": "constant-combinator",
                "position": {
                    "x": 92.5,
                    "y": -4.5
                },
                "direction": 4,
                "control_behavior": {
                    "sections": {
                        "sections": [
                            {
                                "index": 1,
                                "filters": [
                                    {
                                        "index": 1,
                                        "type": "virtual",
                                        "name": "signal-L",
                                        "quality": "normal",
                                        "comparator": "=",
                                        "count": 30
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 3,
                "name": "constant-combinator",
                "position": {
                    "x": 93.5,
                    "y": -4.5
                },
                "direction": 4,
                "control_behavior": {
                    "sections": {
                        "sections": [
                            {
                                "index": 1,
                                "filters": [
                                    {
                                        "index": 1,
                                        "type": "virtual",
                                        "name": "signal-U",
                                        "quality": "normal",
                                        "comparator": "=",
                                        "count": 90
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 4,
                "name": "substation",
                "position": {
                    "x": 86,
                    "y": -4
                }
            },
            {
                "entity_number": 5,
                "name": "accumulator",
                "position": {
                    "x": 88,
                    "y": -4
                },
                "control_behavior": {
                    "output_signal": {
                        "type": "virtual",
                        "name": "signal-A"
                    }
                }
            },
            {
                "entity_number": 6,
                "name": "decider-combinator",
                "position": {
                    "x": 91,
                    "y": -3.5
                },
                "direction": 4,
                "control_behavior": {
                    "decider_conditions": {
                        "conditions": [
                            {
                                "first_signal": {
                                    "type": "virtual",
                                    "name": "signal-A"
                                },
                                "second_signal": {
                                    "type": "virtual",
                                    "name": "signal-U"
                                },
                                "comparator": "≥"
                            }
                        ],
                        "outputs": [
                            {
                                "signal": {
                                    "type": "virtual",
                                    "name": "signal-R"
                                },
                                "copy_count_from_input": false
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 7,
                "name": "decider-combinator",
                "position": {
                    "x": 93,
                    "y": -3.5
                },
                "direction": 4,
                "control_behavior": {
                    "decider_conditions": {
                        "conditions": [
                            {
                                "first_signal": {
                                    "type": "virtual",
                                    "name": "signal-S"
                                },
                                "second_signal": {
                                    "type": "virtual",
                                    "name": "signal-R"
                                },
                                "comparator": ">"
                            }
                        ],
                        "outputs": [
                            {
                                "signal": {
                                    "type": "virtual",
                                    "name": "signal-S"
                                },
                                "copy_count_from_input": false
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 8,
                "name": "power-switch",
                "position": {
                    "x": 95,
                    "y": -4
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 1,
                        "comparator": "="
                    },
                    "logistic_condition": {
                        "constant": 0,
                        "comparator": ">"
                    }
                },
                "switch_state": false
            },
            {
                "entity_number": 9,
                "name": "medium-electric-pole",
                "position": {
                    "x": 98.5,
                    "y": -3.5
                }
            }
        ],
        "wires": [
            [
                1,
                1,
                2,
                1
            ],
            [
                1,
                2,
                5,
                2
            ],
            [
                1,
                3,
                7,
                1
            ],
            [
                3,
                1,
                6,
                1
            ],
            [
                4,
                5,
                8,
                5
            ],
            [
                5,
                2,
                6,
                2
            ],
            [
                6,
                3,
                7,
                1
            ],
            [
                7,
                2,
                7,
                4
            ],
            [
                7,
                4,
                8,
                2
            ],
            [
                8,
                6,
                9,
                5
            ]
        ],
        "item": "blueprint",
        "version": 562949954273281
    }
};
