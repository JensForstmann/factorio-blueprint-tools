import { Plan } from "../src/types/plan"

const blueprint: Plan = {
    "deconstruction_planner": {
        "settings": {
            "entity_filters": [
                {
                    "name": "tree-08-brown",
                    "index": 0
                },
                {
                    "name": "express-transport-belt",
                    "index": 2
                },
                {
                    "name": "item-request-proxy",
                    "index": 6
                },
                {
                    "name": "underground-belt",
                    "index": 14
                }
            ],
            "tile_filters": [
                {
                    "name": "Arci-marking-white-dl-left-turn-down",
                    "index": 3
                },
                {
                    "name": "refined-concrete",
                    "index": 16
                }
            ],
            "description": "deconDESCR",
            "icons": [
                {
                    "signal": {
                        "type": "item",
                        "name": "red-wire"
                    },
                    "index": 1
                },
                {
                    "signal": {
                        "type": "item",
                        "name": "red-wire"
                    },
                    "index": 3
                }
            ]
        },
        "item": "deconstruction-planner",
        "label": "deconNAME",
        "version": 281474976710656
    }
}