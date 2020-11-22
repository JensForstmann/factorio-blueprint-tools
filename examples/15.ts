import { Plan } from "../src/types/plan"

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "virtual",
                    "name": "signal-S"
                },
                "index": 1
            },
            {
                "signal": {
                    "type": "virtual",
                    "name": "signal-R"
                },
                "index": 2
            },
            {
                "signal": {
                    "type": "item",
                    "name": "power-switch"
                },
                "index": 3
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "substation",
                "position": {
                    "x": -6.5,
                    "y": -0.5
                }
            },
            {
                "entity_number": 2,
                "name": "accumulator",
                "position": {
                    "x": -4.5,
                    "y": -0.5
                },
                "control_behavior": {
                    "output_signal": {
                        "type": "virtual",
                        "name": "signal-A"
                    }
                },
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 3,
                                "circuit_id": 1
                            },
                            {
                                "entity_id": 7,
                                "circuit_id": 1
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 3,
                "name": "decider-combinator",
                "position": {
                    "x": -1.5,
                    "y": -1
                },
                "direction": 2,
                "control_behavior": {
                    "decider_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-A"
                        },
                        "second_signal": {
                            "type": "virtual",
                            "name": "signal-L"
                        },
                        "comparator": "<",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "copy_count_from_input": false
                    }
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 5
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 2
                            }
                        ]
                    },
                    "2": {
                        "red": [
                            {
                                "entity_id": 8,
                                "circuit_id": 1
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 4,
                "name": "constant-combinator",
                "position": {
                    "x": 1,
                    "y": -1
                },
                "direction": 2,
                "control_behavior": {
                    "filters": [
                        {
                            "signal": {
                                "type": "virtual",
                                "name": "signal-U"
                            },
                            "count": 90,
                            "index": 1
                        }
                    ]
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 7,
                                "circuit_id": 1
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 5,
                "name": "constant-combinator",
                "position": {
                    "x": 0,
                    "y": -1
                },
                "direction": 2,
                "control_behavior": {
                    "filters": [
                        {
                            "signal": {
                                "type": "virtual",
                                "name": "signal-L"
                            },
                            "count": 30,
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
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 6,
                "name": "power-switch",
                "position": {
                    "x": 2.5,
                    "y": -0.5
                },
                "control_behavior": {
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
                "connections": {
                    "1": {
                        "green": [
                            {
                                "entity_id": 8,
                                "circuit_id": 2
                            }
                        ]
                    },
                    "Cu0": [
                        {
                            "entity_id": 1,
                            "wire_id": 0
                        }
                    ],
                    "Cu1": [
                        {
                            "entity_id": 9,
                            "wire_id": 0
                        }
                    ]
                }
            },
            {
                "entity_number": 7,
                "name": "decider-combinator",
                "position": {
                    "x": -1.5,
                    "y": 0
                },
                "direction": 2,
                "control_behavior": {
                    "decider_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-A"
                        },
                        "second_signal": {
                            "type": "virtual",
                            "name": "signal-U"
                        },
                        "comparator": "≥",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-R"
                        },
                        "copy_count_from_input": false
                    }
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 4
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 2
                            }
                        ]
                    },
                    "2": {
                        "red": [
                            {
                                "entity_id": 8,
                                "circuit_id": 1
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 8,
                "name": "decider-combinator",
                "position": {
                    "x": 0.5,
                    "y": 0
                },
                "direction": 2,
                "control_behavior": {
                    "decider_conditions": {
                        "first_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "second_signal": {
                            "type": "virtual",
                            "name": "signal-R"
                        },
                        "comparator": ">",
                        "output_signal": {
                            "type": "virtual",
                            "name": "signal-S"
                        },
                        "copy_count_from_input": false
                    }
                },
                "connections": {
                    "1": {
                        "red": [
                            {
                                "entity_id": 3,
                                "circuit_id": 2
                            },
                            {
                                "entity_id": 7,
                                "circuit_id": 2
                            }
                        ],
                        "green": [
                            {
                                "entity_id": 8,
                                "circuit_id": 2
                            }
                        ]
                    },
                    "2": {
                        "green": [
                            {
                                "entity_id": 8,
                                "circuit_id": 1
                            },
                            {
                                "entity_id": 6
                            }
                        ]
                    }
                }
            },
            {
                "entity_number": 9,
                "name": "medium-electric-pole",
                "position": {
                    "x": 6,
                    "y": 0
                }
            }
        ],
        "item": "blueprint",
        "label": "SR Power Latch",
        "version": 77311705089
    }
}