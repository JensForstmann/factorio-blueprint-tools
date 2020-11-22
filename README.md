# Factorio Blueprint Tools

## Features

- helper for encoding & decoding blueprint strings
- fully typed
    - support for deconstruction & upgrade planner
    - support for nested blueprint books

## Usage

    import * as factorioBlueprintTools from 'factorio-blueprint-tools';
    // or
    const factorioBlueprintTools = require('factorio-blueprint-tools');

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
