[![NPM Version](https://img.shields.io/npm/v/%40jensforstmann%2Ffactorio-blueprint-tools)](https://www.npmjs.com/package/@jensforstmann/factorio-blueprint-tools)

# Factorio Blueprint Tools

## Features

- encode & decode blueprint strings
- fully typed
    - support for deconstruction & upgrade planner
    - support for nested blueprint books

## Installation

```sh
npm install @jensforstmann/factorio-blueprint-tools
# or
yarn add @jensforstmann/factorio-blueprint-tools
```

## Usage

```typescript
import { encodePlan, decodePlan } from '@jensforstmann/factorio-blueprint-tools';
// or
const { encodePlan, decodePlan } = require('@jensforstmann/factorio-blueprint-tools');
```


Available functions:

- decodePlan
- encodePlan
- type guards:
    - isBlueprint
    - isBlueprintBook
    - isDeconstructionPLanner
    - isUpgradePlanner

Available types:
- blueprint
- blueprintBook
- color
- deconstructionPlanner
- entity
- icon
- itemFilter
- plan
- position
- signal
- tile
- upgradePlanner
- ... and more

## Examples

```typescript
import { encodePlan, decodePlan, isBlueprint, addEntity } from '@jensforstmann/factorio-blueprint-tools';

const bpString = '0eNp9j90KwjAMhV9l5LoO5w/WPoHvICKdCxpY09JGcYy+u91E9EoIJCec85GM0PZ3DJFYwIzQYbpECkKewcAB+96rSm6UqlKWK3RBhuriOYllKYNria34WIMCmvZgjiMkurLtJ6AMAQuJBF1xsHWT+uQX3zzkkucOn2CafFKALCSEb9wshjPfXYuxGP6CFASf6P3BCIW3rLcKhrnnCT3fYn7+VvDAmObASjeb3X61W691o7XO+QX5HWGk';

const plan = decodePlan(bpString);

if (isBlueprint(plan)) {
    console.log(plan.blueprint.description); // Hello, this is an empty constant combinator.

    plan.blueprint.description = "Hello, have another combinator.";
    addEntity(plan, {
        position: {
            x: 1.5,
            y: 0.5
        },
        name: "constant-combinator"
    });

    const newBpString = encodePlan(plan);

    console.log(newBPString); // 0eNp9kNEKwjAMRX9l5LkONxVrv8B/EJFuCxrY0tFm4hj9d7vtQUHwKQTuOdxkgqodsPfEAmaCBkPtqRdyDAbO2LZOZQ/7xMyykwf6rHZdRWzF+RwUUO04gLlMEOjOtp0dMvaYYBLsUoJtN29zTizL5sNDTDw3+AJTxKsCZCEhXHXLMt546Cr0KfBXpKB3gdbSEyTfNj8oGJcZo/qxlT9A8QX875yKLpeZr8cpeKIPi63Uxf54Ko+7nS601jG+AXGqduE=
    
} else {
    console.error("not a blueprint");
}
```
