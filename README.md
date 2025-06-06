# Expo + DS3

This example provides a minimal setup to get DS3 working in Expo.

## Install DS3

This template was created with the following steps:

### Dependencies

Create a vite application:

```bash
pnpm create expo@latest
```

Install dependencies:

```bash
pnpm add @consensys/ds3-config @consensys/ds3
```

### DS3 Configuration

Create `theme.config.js` file:

```bash
touch theme.config.js
```

Configure `theme.config.js`:

```js
const { generateConfig } = require('@consensys/ds3-theme');

module.exports = generateConfig({
  themes: {
    default: {
      // use any radix colors - https://www.radix-ui.com/colors
      colors: {
        neutral: 'gray',
        primary: 'violet',
        secondary: 'teal',
        error: 'red',
        warning: 'yellow',
        success: 'green',
        // add custom schemes here
      },
    },
  },
});
```

Under `app/_layout.tsx`, replace the `ThemeProvider`:

```tsx
import { ThemeProvider } from "@consensys/ds3";
import ExpoConstants from 'expo-constants';

// ...

return (
  <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.DS3}>
     // ...
  </ThemeProvider>
);
```

### Tailwind Configuration

Instantiate Tailwind:

```bash
pnpm exec tailwindcss init
```

Configure `tailwind.config.js`:

```js
import nativewindPreset from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ds3/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [nativewindPreset(themeConfig)],
}
```

Create a `global.css` file:

```bash
touch global.css
```

Configure `/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Under `app/_layout.tsx`, add:

```js
import "../global.css";
```

### Expo Configuration

#### Metro

Create a `metro.config.js` file:

```bash
touch metro.config.js
```

Configure `metro.config.js`:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3 } = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3(config);
```

If using a monorepo (workspace), use the following configuration instead:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3Workspace(config);
```

#### Expo

Create a `app.config.js` file:

```bash
touch app.config.js
```

Configure `app.config.js`:

```js
import withDs3 from '@consensys/ds3-config/expo';
import themeConfig from './theme.config';

module.exports = ({ config }) => {
   return withDs3({ config, themeConfig });
};
```

#### Babel

Create a `babel.config.js` file:

```bash
touch babel.config.js
```

Create and configure `babel.config.js`:

```js
module.exports = function (api) {
   api.cache(true);

   return {
      presets: ['@consensys/ds3-config/expo/babel'],
   };
};
```

## Additional Resources

### Tree Shaking
To enable tree shaking in your Expo app (experimental feature in SDK 52+), see the [official Expo tree shaking documentation](https://docs.expo.dev/guides/tree-shaking/#enabling-tree-shaking).

Add the following configuration to your `metro.config.js`:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3} = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
  },
});

module.exports = withDs3(config);

```

And add this to your `.env` file:

```bash
EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1
EXPO_UNSTABLE_TREE_SHAKING=1
```
