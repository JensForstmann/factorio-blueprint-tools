import { Plan } from "../src/types/plan"

const blueprint: Plan = {
    "blueprint": {
        "icons": [
            {
                "signal": {
                    "type": "item",
                    "name": "splitter"
                },
                "index": 1
            }
        ],
        "entities": [
            {
                "entity_number": 1,
                "name": "splitter",
                "position": {
                    "x": 67,
                    "y": -4.5
                },
                "input_priority": "right"
            },
            {
                "entity_number": 2,
                "name": "splitter",
                "position": {
                    "x": 67,
                    "y": -5.5
                },
                "input_priority": "left"
            },
            {
                "entity_number": 3,
                "name": "splitter",
                "position": {
                    "x": 67,
                    "y": -3.5
                }
            }
        ],
        "item": "blueprint",
        "version": 281474976710656
    }
}