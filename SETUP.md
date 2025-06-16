# DS3 Expo Template Setup Guide

This document explains how this template was set up from scratch. This is for reference only - you don't need to follow these steps as the template comes pre-configured.

## Initial Setup

1. Create a new Expo project:
```bash
pnpm create expo@latest
```

2. Install dependencies:
```bash
pnpm add @consensys/ds3-config @consensys/ds3
```

## Configuration Files

### 1. Theme Configuration (`theme.config.js`)

```javascript
const { generateConfig } = require('@consensys/ds3-theme');

module.exports = generateConfig({
  themes: {
    default: {
      colors: {
        neutral: 'gray',
        primary: 'violet',
        secondary: 'teal',
        error: 'red',
        warning: 'yellow',
        success: 'green',
      },
    },
  },
});
```

### 2. Tailwind Configuration

Initialize Tailwind:
```bash
pnpm exec tailwindcss init
```

Configure `tailwind.config.js`:
```javascript
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

Create and configure `global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Metro Configuration (`metro.config.js`)

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3 } = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3(config);
```

For monorepo (workspace) setup:
```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3Workspace(config);
```

### 4. Expo Configuration (`app.config.js`)

```javascript
import withDs3 from '@consensys/ds3-config/expo';
import themeConfig from './theme.config';

module.exports = ({ config }) => {
   return withDs3({ config, themeConfig });
};
```

### 5. Babel Configuration (`babel.config.js`)

```javascript
module.exports = function (api) {
   api.cache(true);

   return {
      presets: ['@consensys/ds3-config/expo/babel'],
   };
};
```

### 6. Application Setup (`app/_layout.tsx`)

```tsx
import { ThemeProvider } from "@consensys/ds3";
import ExpoConstants from 'expo-constants';
import "../global.css";

// ...

return (
  <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.DS3}>
     // Your app content
  </ThemeProvider>
);
```

## Additional Resources

### Tree Shaking
To enable tree shaking in your Expo app (experimental feature in SDK 52+), see the [official Expo tree shaking documentation](https://docs.expo.dev/guides/tree-shaking/#enabling-tree-shaking).

Add the following configuration to your `metro.config.js`:

```javascript
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