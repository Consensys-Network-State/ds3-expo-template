import cui from "@consensys/ui-config/nativewind";
import themeConfig from "./theme.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ui/src/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [cui(themeConfig)],
}
