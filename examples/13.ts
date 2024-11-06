import { Plan } from "../src/plan";

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "name": "arithmetic-combinator"
                },
                "index": 1
            },
            {
                "signal": {
                    "name": "constant-combinator"
                },
                "index": 2
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "constant-combinator",
                "position": {
                    "x": 74.5,
                    "y": 1.5
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
                "entity_number": 2,
                "name": "constant-combinator",
                "position": {
                    "x": 78.5,
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
                                        "count": 36
                                    },
                                    {
                                        "index": 2,
                                        "name": "copper-plate",
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
                "entity_number": 3,
                "name": "active-provider-chest",
                "position": {
                    "x": 76.5,
                    "y": 3.5
                }
            },
            {
                "entity_number": 4,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 77.5,
                    "y": 2
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
                            "name": "signal-each"
                        }
                    }
                }
            },
            {
                "entity_number": 5,
                "name": "small-lamp",
                "position": {
                    "x": 78.5,
                    "y": 3.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-G"
                        },
                        "constant": 1,
                        "comparator": "≠"
                    },
                    "use_colors": true
                }
            },
            {
                "entity_number": 6,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 79.5,
                    "y": 2
                },
                "direction": 8,
                "control_behavior": {
                    "arithmetic_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-each"
                        },
                        "second_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "operation": "*",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-each"
                        }
                    }
                }
            },
            {
                "entity_number": 7,
                "name": "requester-chest",
                "position": {
                    "x": 80.5,
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
                "entity_number": 8,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 80.5,
                    "y": 2
                },
                "direction": 8,
                "control_behavior": {
                    "arithmetic_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "second_constant": -1,
                        "operation": "*",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        }
                    }
                }
            },
            {
                "entity_number": 9,
                "name": "bulk-inserter",
                "position": {
                    "x": 77.5,
                    "y": 5.5
                },
                "direction": 4,
                "control_behavior": {
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                }
            },
            {
                "entity_number": 10,
                "name": "steel-chest",
                "position": {
                    "x": 76.5,
                    "y": 5.5
                }
            },
            {
                "entity_number": 11,
                "name": "bulk-inserter",
                "position": {
                    "x": 76.5,
                    "y": 4.5
                },
                "direction": 8,
                "control_behavior": {
                    "circuit_set_filters": true
                },
                "use_filters": true,
                "override_stack_size": 1
            },
            {
                "entity_number": 12,
                "name": "decider-combinator",
                "position": {
                    "x": 77.5,
                    "y": 4
                },
                "direction": 8,
                "control_behavior": {
                    "decider_conditions": {
                        "conditions": [
                            {
                                "first_signal": {
                                    "type": "virtual",
                                    "name": "signal-everything"
                                },
                                "comparator": "="
                            }
                        ],
                        "outputs": [
                            {
                                "signal": {
                                    "type": "virtual",
                                    "name": "signal-G"
                                },
                                "copy_count_from_input": false
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 13,
                "name": "steel-chest",
                "position": {
                    "x": 78.5,
                    "y": 5.5
                }
            },
            {
                "entity_number": 14,
                "name": "bulk-inserter",
                "position": {
                    "x": 79.5,
                    "y": 5.5
                },
                "direction": 4,
                "control_behavior": {
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                }
            },
            {
                "entity_number": 15,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 79.5,
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
                "entity_number": 16,
                "name": "small-lamp",
                "position": {
                    "x": 78.5,
                    "y": 4.5
                },
                "control_behavior": {
                    "circuit_enabled": true,
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-G"
                        },
                        "constant": 1,
                        "comparator": "="
                    },
                    "use_colors": true
                }
            },
            {
                "entity_number": 17,
                "name": "steel-chest",
                "position": {
                    "x": 80.5,
                    "y": 5.5
                }
            },
            {
                "entity_number": 18,
                "name": "bulk-inserter",
                "position": {
                    "x": 80.5,
                    "y": 4.5
                },
                "control_behavior": {
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                }
            },
            {
                "entity_number": 19,
                "name": "constant-combinator",
                "position": {
                    "x": 74.5,
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
                "entity_number": 20,
                "name": "active-provider-chest",
                "position": {
                    "x": 76.5,
                    "y": 7.5
                }
            },
            {
                "entity_number": 21,
                "name": "bulk-inserter",
                "position": {
                    "x": 76.5,
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
                "entity_number": 22,
                "name": "constant-combinator",
                "position": {
                    "x": 77.5,
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
                "entity_number": 23,
                "name": "active-provider-chest",
                "position": {
                    "x": 78.5,
                    "y": 7.5
                }
            },
            {
                "entity_number": 24,
                "name": "bulk-inserter",
                "position": {
                    "x": 78.5,
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
                "entity_number": 25,
                "name": "constant-combinator",
                "position": {
                    "x": 79.5,
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
            },
            {
                "entity_number": 26,
                "name": "active-provider-chest",
                "position": {
                    "x": 80.5,
                    "y": 7.5
                }
            },
            {
                "entity_number": 27,
                "name": "bulk-inserter",
                "position": {
                    "x": 80.5,
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
            }
        ],
        "wires": [
            [
                1,
                2,
                6,
                2
            ],
            [
                2,
                1,
                6,
                1
            ],
            [
                4,
                1,
                7,
                1
            ],
            [
                4,
                2,
                15,
                4
            ],
            [
                4,
                4,
                11,
                2
            ],
            [
                4,
                4,
                12,
                2
            ],
            [
                5,
                1,
                22,
                1
            ],
            [
                5,
                2,
                16,
                2
            ],
            [
                6,
                2,
                8,
                2
            ],
            [
                6,
                3,
                7,
                1
            ],
            [
                6,
                3,
                8,
                3
            ],
            [
                7,
                2,
                15,
                4
            ],
            [
                9,
                2,
                10,
                2
            ],
            [
                10,
                2,
                13,
                2
            ],
            [
                12,
                4,
                16,
                2
            ],
            [
                13,
                2,
                14,
                2
            ],
            [
                13,
                2,
                17,
                2
            ],
            [
                15,
                2,
                18,
                2
            ],
            [
                16,
                1,
                25,
                1
            ],
            [
                17,
                2,
                18,
                2
            ],
            [
                19,
                2,
                21,
                2
            ],
            [
                21,
                2,
                24,
                2
            ],
            [
                24,
                2,
                27,
                2
            ]
        ],
        "item": "blueprint",
        "version": 562949954273281
    }
};
