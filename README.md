[![NPM Version](https://img.shields.io/npm/v/%40jensforstmann%2Ffactorio-blueprint-tools)](https://www.npmjs.com/package/@jensforstmann/factorio-blueprint-tools)

# Factorio Blueprint Tools

## Features

- encode & decode blueprint strings
- fully typed:
  - blueprints
  - blueprint books
  - upgrade planner
  - deconstruction planner



## Installation

```sh
npm install @jensforstmann/factorio-blueprint-tools
```

## Usage

```typescript
import { encodePlan, decodePlan } from '@jensforstmann/factorio-blueprint-tools';
```


Available functions:

- decodePlan
- encodePlan
- type guards:
    - isBlueprint
    - isBlueprintBook
    - isDeconstructionPLanner
    - isUpgradePlanner



## Examples

```typescript
import { encodePlan, decodePlan, isBlueprint, addEntity } from '@jensforstmann/factorio-blueprint-tools';

const bpString = '0eNqVUcFOhDAQ/RWcc9lkEVRIvK9nDx7MhhR2lElKi2VACeHfnUJcsx40ppf2dd6bN29mqMyAnSfLUMxwwr721DE5CwU86ilqKGIXcYPRu/PmdAUKqHa2h+J5hp5erTaBaHWLwgg/rC3HtWsrspqdh0UY9oQfUOyXowK0TEy4CayPqbRDW6GXAvWbkILO9bR5m0H08mSXKZigiNN0l0kfYbF3pqyw0SMJRep6rAOlv7xL7y9TCl7IMPqfKE9dcDKS50GGPFvbho4PgrzJh/gX0DrfrkXit9N+9VvA/QoMIdv9os7iyZ/iD/8VP8qRADqjJ/Tl5RoPaIyLnrb1hRUQYyv49+YVGF2hCbUUXSQ+Si6rSnaT5GmeZ2lye53c7ZflE3TWvxE=';

const plan = decodePlan(bpString);

if (isBlueprint(plan)) {
    console.log(plan.blueprint.description); // "Say hi to the world!"

    plan.blueprint.description = "Hello, have another combinator.";
    addEntity(plan, {
        position: {
            x: plan.blueprint.entities[0].position.x + 1,
            y: plan.blueprint.entities[0].position.y + 1
        },
        name: "constant-combinator"
    });

    const newBpString = encodePlan(plan);

    console.log(newBPString); // 0eNqVkkFvgzAMhf8K8zmtVArbQOq9O++ww1RVgXqrpZCwYNgQ4r/PAY2pPWyquIDj9/nlmQEK02LtyTLkA5ywKT3VTM5CDs+6j84UsYv4jNGn8+Z0BwqodLaB/HWAht6tNkFodYWiCCesLa9KVxVkNTsPoyjsCb8g34wHBWiZmHAGTB/90bZVgV4a1F8gBbVraPY2gPCyeJ0q6CFfJck6lTmiYu/MscCz7kgk0tdgGSTN5bvM/jGl4I0Mo7+ucl8HJx15buWSi7X50qu9VD7kQPxL0TpfTU3it9Z+8pvDbiq0IdvNqBZ4/C/86Vb4QR4JoDa6R3+8XOMejXHRy7y+YOOmjLdLxtsp46uVxWGnxFgJ8PdXUmB0gSYMp+gC30nQEz29j7Mky9IkftjGj5tx/AajGdm0
    
} else {
    console.error("not a blueprint");
}
```
