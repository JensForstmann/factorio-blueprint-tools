import { Plan } from "../src/plan";

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "name": "constant-combinator"
                },
                "index": 1
            },
            {
                "signal": {
                    "name": "arithmetic-combinator"
                },
                "index": 2
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "constant-combinator",
                "position": {
                    "x": 65.5,
                    "y": 0.5
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
                                        "name": "iron-plate",
                                        "quality": "normal",
                                        "comparator": "=",
                                        "count": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 2,
                "name": "active-provider-chest",
                "position": {
                    "x": 63.5,
                    "y": 3.5
                }
            },
            {
                "entity_number": 3,
                "name": "small-lamp",
                "position": {
                    "x": 65.5,
                    "y": 3.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 0,
                        "comparator": "<"
                    },
                    "use_colors": true
                }
            },
            {
                "entity_number": 4,
                "name": "requester-chest",
                "position": {
                    "x": 67.5,
                    "y": 3.5
                },
                "control_behavior": {
                    "circuit_mode_of_operation": 1,
                    "circuit_condition_enabled": false
                },
                "request_filters": {
                    "sections": [
                        {
                            "index": 1
                        }
                    ]
                }
            },
            {
                "entity_number": 5,
                "name": "steel-chest",
                "position": {
                    "x": 63.5,
                    "y": 5.5
                }
            },
            {
                "entity_number": 6,
                "name": "bulk-inserter",
                "position": {
                    "x": 63.5,
                    "y": 4.5
                },
                "direction": 8,
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 0,
                        "comparator": ">"
                    },
                    "circuit_set_stack_size": true
                }
            },
            {
                "entity_number": 7,
                "name": "steel-chest",
                "position": {
                    "x": 65.5,
                    "y": 5.5
                }
            },
            {
                "entity_number": 8,
                "name": "bulk-inserter",
                "position": {
                    "x": 64.5,
                    "y": 5.5
                },
                "direction": 4,
                "control_behavior": {
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                }
            },
            {
                "entity_number": 9,
                "name": "small-lamp",
                "position": {
                    "x": 65.5,
                    "y": 4.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 0,
                        "comparator": "="
                    },
                    "use_colors": true
                }
            },
            {
                "entity_number": 10,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 64.5,
                    "y": 4
                },
                "direction": 8,
                "control_behavior": {
                    "arithmetic_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-each"
                        },
                        "second_constant": -1,
                        "operation": "*",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        }
                    }
                }
            },
            {
                "entity_number": 11,
                "name": "steel-chest",
                "position": {
                    "x": 67.5,
                    "y": 5.5
                }
            },
            {
                "entity_number": 12,
                "name": "bulk-inserter",
                "position": {
                    "x": 66.5,
                    "y": 5.5
                },
                "direction": 4,
                "control_behavior": {
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                }
            },
            {
                "entity_number": 13,
                "name": "bulk-inserter",
                "position": {
                    "x": 67.5,
                    "y": 4.5
                },
                "control_behavior": {
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                }
            },
            {
                "entity_number": 14,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 66.5,
                    "y": 4
                },
                "control_behavior": {
                    "arithmetic_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-each"
                        },
                        "second_constant": -1,
                        "operation": "*",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-each"
                        }
                    }
                }
            },
            {
                "entity_number": 15,
                "name": "constant-combinator",
                "position": {
                    "x": 61.5,
                    "y": 6.5
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
                                        "name": "signal-pink",
                                        "quality": "normal",
                                        "comparator": "=",
                                        "count": 1
                                    }
                                ]
                            }
                        ]
                    },
                    "is_on": false
                }
            },
            {
                "entity_number": 16,
                "name": "bulk-inserter",
                "position": {
                    "x": 63.5,
                    "y": 6.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "constant": 0,
                        "comparator": ">"
                    }
                }
            },
            {
                "entity_number": 17,
                "name": "bulk-inserter",
                "position": {
                    "x": 65.5,
                    "y": 6.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "constant": 0,
                        "comparator": ">"
                    }
                }
            },
            {
                "entity_number": 18,
                "name": "constant-combinator",
                "position": {
                    "x": 64.5,
                    "y": 6.5
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
                                        "name": "signal-cyan",
                                        "quality": "normal",
                                        "comparator": "=",
                                        "count": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 19,
                "name": "bulk-inserter",
                "position": {
                    "x": 67.5,
                    "y": 6.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "constant": 0,
                        "comparator": ">"
                    }
                }
            },
            {
                "entity_number": 20,
                "name": "constant-combinator",
                "position": {
                    "x": 66.5,
                    "y": 6.5
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
                                        "name": "signal-green",
                                        "quality": "normal",
                                        "comparator": "=",
                                        "count": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        ],
        "wires": [
            [
                1,
                1,
                4,
                1
            ],
            [
                1,
                1,
                10,
                1
            ],
            [
                3,
                1,
                18,
                1
            ],
            [
                3,
                2,
                9,
                2
            ],
            [
                4,
                2,
                14,
                4
            ],
            [
                5,
                2,
                7,
                2
            ],
            [
                5,
                2,
                8,
                2
            ],
            [
                6,
                2,
                10,
                4
            ],
            [
                7,
                2,
                11,
                2
            ],
            [
                7,
                2,
                12,
                2
            ],
            [
                9,
                1,
                20,
                1
            ],
            [
                9,
                2,
                10,
                4
            ],
            [
                10,
                2,
                14,
                4
            ],
            [
                11,
                2,
                13,
                2
            ],
            [
                13,
                2,
                14,
                2
            ],
            [
                15,
                2,
                16,
                2
            ],
            [
                16,
                2,
                17,
                2
            ],
            [
                17,
                2,
                19,
                2
            ]
        ],
        "item": "blueprint",
        "version": 562949954273281
    }
};
