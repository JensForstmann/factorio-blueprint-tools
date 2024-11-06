import { Plan } from "../src/plan";

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
                        "name": "fast-transport-belt",
                        "module_limit": 0,
                        "module_slots": []
                    },
                    "index": 0
                }
            ]
        },
        "item": "upgrade-planner",
        "version": 281474976710656
    }
};
