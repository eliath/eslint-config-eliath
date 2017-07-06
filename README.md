eslint-config-eliath
====================

This package provides my personal styleguide as an extensible, shareable configuration package.

Usage
-----

This package is essentially a fork of the airbnb configuration with some minifications and rule edits.

Make sure you have eslint installed as well as the necessary eslint plugins (as specified in the package.json)

Then you can just install it to your `node_modules/` and extend from it in an eslint config.

Example:

    module.exports = {
      extends: [
        'eslint-config-eliath'
      ],
      rules: {}
    }

You can add any overrides to that "rules" dictionary.
