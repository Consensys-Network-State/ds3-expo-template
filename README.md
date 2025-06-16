# DS3 Expo Template

A pre-configured Expo template with DS3 (Design System 3) already set up and ready to use.

## Features

- 🎨 Pre-configured DS3 design system
- 📱 Built with Expo for cross-platform development
- 🎯 TypeScript support
- 🎭 Theme customization support
- 🎯 Tailwind CSS with NativeWind preset
- 🔒 Safe Area Context support
- 🌐 React Native Web support

## Documentation

For comprehensive documentation about DS3, including UI components, theming, and configuration, visit the [DS3 Monorepo](https://github.com/Consensys-Network-State/ds3).

For details on how this template was set up from scratch, see [SETUP.md](./SETUP.md).

## Quick Start

### Option 1: Using degit

```bash
pnpm dlx degit Consensys-Network-State/ds3-expo-template ui
cd ui
pnpm install
pnpm start
```

### Option 2: Using GitHub Template

1. Click "Use this template" on the GitHub repository
2. Clone your new repository
3. Install dependencies:
```bash
pnpm install
```
4. Start the development server:
```bash
pnpm start
```

## Customization

The template comes with a default theme configuration in `theme.config.js`. You can customize the theme by modifying this file:

```js
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

For detailed theme customization options and documentation, refer to the [DS3 Theme Package](https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme).
