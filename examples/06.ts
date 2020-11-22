import { Plan } from "../src/types/plan"

const blueprint: Plan = {
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
}