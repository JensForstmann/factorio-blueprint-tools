# Factorio Blueprint Tools

## Features

- helper for encoding & decoding blueprint strings
- fully typed
    - support for deconstruction & upgrade planner
    - support for nested blueprint books

## Prerequisites

Two steps are required to install packages from the GitHub package registry:

1. Make sure you have this line in your [project's `.npmrc` file](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc), so the scope _@jensforstmann_ is bound to the GitHub package registry:

        @jensforstmann:registry=https://npm.pkg.github.com

2. [Authenticate to GitHub Packages](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) (if not already done).

## Installation

Then install the package:

    npm install @jensforstmann/factorio-blueprint-tools
    # or
    yarn add @jensforstmann/factorio-blueprint-tools

## Usage

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
