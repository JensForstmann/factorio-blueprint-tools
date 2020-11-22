# Factorio Blueprint Tools

## Features

- helper for encoding & decoding blueprint strings
- fully typed
    - support for deconstruction & upgrade planner
    - support for nested blueprint books

## Usage

Make sure you have this line in you `.npmrc` file, so you can load the package from the GitHub package repository:

    @jensforstmann:registry=https://npm.pkg.github.com

Then install the package:

    npm install @jensforstmann/factorio-blueprint-tools
    # or
    yarn add @jensforstmann/factorio-blueprint-tools


And use it in code:

```typescript
import { encode, decode } from '@jensforstmann/factorio-blueprint-tools';
// or
const { encode, decode } = require('@jensforstmann/factorio-blueprint-tools');
```


Available methods:

    - functions:
        - decode
        - encode
        - type guards:
            - isBlueprint
            - isBlueprintBook
            - isDeconstructionPLanner
            - isUpgradePlanner
    - types:
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

## Upcoming (maybe)

- get stats from bp (item counts, exportable as blueprint)
- manipulate bp with easy to use api
