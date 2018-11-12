# Config directory
# Config

The config directory contains the default config that is passed to the app.
By default a set of baselayers, map default and two overlays is set. Replace these entries with your
own configuration.

## Extending the config

To extend the config, create a new `<config>.json` file. Specify you configuration in this file and
load it in the `map-config.js`. There you can include it in the object that is exported by default.
After this you will have access to the config in the `mapConfig` property in your redux state.s