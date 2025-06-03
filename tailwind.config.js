import ds3 from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ds3/src/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [ds3(themeConfig)],
}
