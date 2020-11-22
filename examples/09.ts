import { Plan } from "../src/types/plan"

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "item",
                    "name": "express-transport-belt"
                },
                "index": 1
            },
            {
                "signal": {
                    "type": "item",
                    "name": "express-splitter"
                },
                "index": 2
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "express-transport-belt",
                "position": {
                    "x": 0,
                    "y": -3
                }
            },
            {
                "entity_number": 2,
                "name": "express-transport-belt",
                "position": {
                    "x": 1,
                    "y": -3
                },
                "direction": 6
            },
            {
                "entity_number": 3,
                "name": "express-transport-belt",
                "position": {
                    "x": -1,
                    "y": -1
                },
                "direction": 2
            },
            {
                "entity_number": 4,
                "name": "express-underground-belt",
                "position": {
                    "x": 0,
                    "y": -1
                },
                "type": "output"
            },
            {
                "entity_number": 5,
                "name": "express-splitter",
                "position": {
                    "x": 0.5,
                    "y": -2
                }
            },
            {
                "entity_number": 6,
                "name": "express-underground-belt",
                "position": {
                    "x": 1,
                    "y": -1
                },
                "type": "output"
            },
            {
                "entity_number": 7,
                "name": "express-splitter",
                "position": {
                    "x": -0.5,
                    "y": 1
                }
            },
            {
                "entity_number": 8,
                "name": "express-transport-belt",
                "position": {
                    "x": -1,
                    "y": 0
                }
            },
            {
                "entity_number": 9,
                "name": "express-transport-belt",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "direction": 2
            },
            {
                "entity_number": 10,
                "name": "express-underground-belt",
                "position": {
                    "x": 1,
                    "y": 0
                },
                "type": "input"
            },
            {
                "entity_number": 11,
                "name": "express-transport-belt",
                "position": {
                    "x": 0,
                    "y": 2
                }
            }
        ],
        "item": "blueprint",
        "label": "1-belt lane balancer",
        "version": 77311705089
    }
}