import { Plan } from "../src/types/plan"

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "item",
                    "name": "constant-combinator"
                },
                "index": 1
            },
            {
                "signal": {
                    "type": "item",
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
                    "x": 1,
                    "y": -3
                },
                "direction": 2,
                "control_behavior": {
                    "filters": [
                        {
                            "signal": {
                                "type": "item",
                                "name": "iron-plate"
                            },
                            "count": 1,
                            "index": 1
                        }
                    ]
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 3,
                                "circuit_id": 1
                            },
                            {
                                "entity_id": 8
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 2,
                "name": "logistic-chest-active-provider",
                "position": {
                    "x": -1,
                    "y": 0
                }
            },
            {
                "entity_number": 3,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 0,
                    "y": 0.5
                },
                "direction": 4,
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
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 1
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 7,
                                "circuit_id": 2
                            }
                        ]
                    },
                    "2": {
                        "green": [
                            {
                                "entity_id": 4
                            },
                            {
                                "entity_id": 6
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 4,
                "name": "stack-inserter",
                "position": {
                    "x": -1,
                    "y": 1
                },
                "direction": 4,
                "control_behavior": {
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 0,
                        "comparator": ">"
                    },
                    "circuit_set_stack_size": true,
                    "stack_control_input_signal": {
                        "type": "virtual",
                        "name": "signal-S"
                    }
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 3,
                                "circuit_id": 2
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 5,
                "name": "small-lamp",
                "position": {
                    "x": 1,
                    "y": 0
                },
                "control_behavior": {
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 0,
                        "comparator": "<"
                    },
                    "use_colors": true
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 11
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 6
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 6,
                "name": "small-lamp",
                "position": {
                    "x": 1,
                    "y": 1
                },
                "control_behavior": {
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "constant": 0,
                        "comparator": "="
                    },
                    "use_colors": true
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 15
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 3,
                                "circuit_id": 2
                            },
                            {
                                "entity_id": 5
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 7,
                "name": "arithmetic-combinator",
                "position": {
                    "x": 2,
                    "y": 0.5
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
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 9
                            }
                        ]
                    },
                    "2": {
                        "green": [
                            {
                                "entity_id": 3,
                                "circuit_id": 1
                            },
                            {
                                "entity_id": 8
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 8,
                "name": "logistic-chest-requester",
                "position": {
                    "x": 3,
                    "y": 0
                },
                "control_behavior": {
                    "circuit_mode_of_operation": 1
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 1
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 7,
                                "circuit_id": 2
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 9,
                "name": "stack-inserter",
                "position": {
                    "x": 3,
                    "y": 1
                },
                "control_behavior": {
                    "circuit_mode_of_operation": 3,
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 7,
                                "circuit_id": 1
                            },
                            {
                                "entity_id": 20
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 10,
                "name": "constant-combinator",
                "position": {
                    "x": -3,
                    "y": 3
                },
                "direction": 2,
                "control_behavior": {
                    "filters": [
                        {
                            "signal": {
                                "type": "virtual",
                                "name": "signal-pink"
                            },
                            "count": 1,
                            "index": 1
                        }
                    ],
                    "is_on": false
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 14
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 11,
                "name": "constant-combinator",
                "position": {
                    "x": 0,
                    "y": 3
                },
                "direction": 2,
                "control_behavior": {
                    "filters": [
                        {
                            "signal": {
                                "type": "virtual",
                                "name": "signal-cyan"
                            },
                            "count": 1,
                            "index": 1
                        }
                    ]
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 5
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 12,
                "name": "steel-chest",
                "position": {
                    "x": -1,
                    "y": 2
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 13
                            },
                            {
                                "entity_id": 18
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 13,
                "name": "stack-inserter",
                "position": {
                    "x": 0,
                    "y": 2
                },
                "direction": 2,
                "control_behavior": {
                    "circuit_mode_of_operation": 3,
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 12
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 14,
                "name": "stack-inserter",
                "position": {
                    "x": -1,
                    "y": 3
                },
                "control_behavior": {
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "constant": 0,
                        "comparator": ">"
                    }
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 10
                            },
                            {
                                "entity_id": 16
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 15,
                "name": "constant-combinator",
                "position": {
                    "x": 2,
                    "y": 3
                },
                "direction": 2,
                "control_behavior": {
                    "filters": [
                        {
                            "signal": {
                                "type": "virtual",
                                "name": "signal-green"
                            },
                            "count": 1,
                            "index": 1
                        }
                    ]
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 6
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 16,
                "name": "stack-inserter",
                "position": {
                    "x": 1,
                    "y": 3
                },
                "control_behavior": {
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "constant": 0,
                        "comparator": ">"
                    }
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 14
                            },
                            {
                                "entity_id": 19
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 17,
                "name": "stack-inserter",
                "position": {
                    "x": 2,
                    "y": 2
                },
                "direction": 2,
                "control_behavior": {
                    "circuit_mode_of_operation": 3,
                    "circuit_read_hand_contents": true,
                    "circuit_hand_read_mode": 1
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 18
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 18,
                "name": "steel-chest",
                "position": {
                    "x": 1,
                    "y": 2
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 12
                            },
                            {
                                "entity_id": 17
                            },
                            {
                                "entity_id": 20
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 19,
                "name": "stack-inserter",
                "position": {
                    "x": 3,
                    "y": 3
                },
                "control_behavior": {
                    "circuit_condition": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-pink"
                        },
                        "constant": 0,
                        "comparator": ">"
                    }
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 16
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 20,
                "name": "steel-chest",
                "position": {
                    "x": 3,
                    "y": 2
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 9
                            },
                            {
                                "entity_id": 18
                            }
                        ]
                    }
                }
            }
        ],
        "item": "blueprint",
        "label": "Exact Requester single resource",
        "version": 77311705089
    }
}