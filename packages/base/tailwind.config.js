/** @type {import('tailwindcss').Config} */
import { themePropDefs } from "@radix-ui/themes";
import {
  tomato,
  red,
  ruby,
  crimson,
  pink,
  plum,
  purple,
  violet,
  iris,
  indigo,
  blue,
  cyan,
  teal,
  jade,
  green,
  grass,
  brown,
  orange,
  sky,
  mint,
  lime,
  yellow,
  amber,
  gold,
  bronze,
  gray,
} from "@radix-ui/colors";

const allColors = [
  tomato,
  red,
  ruby,
  crimson,
  pink,
  plum,
  purple,
  violet,
  iris,
  indigo,
  blue,
  cyan,
  teal,
  jade,
  green,
  grass,
  brown,
  orange,
  sky,
  mint,
  lime,
  yellow,
  amber,
  gold,
  bronze,
  gray,
];

function generateSafelistsPattern() {
  const colors = themePropDefs.accentColor.values.join("|");
  const scale = Array.from(Array(12).keys())
    .map((num) => num * 100 + 100)
    .join("|");
  const pattern = `bg-(${colors})-(${scale})`;
  return new RegExp(pattern);
}

function generateRadixPalettes() {
  const palettes = {};
  allColors.forEach((color) => {
    const colorName = Object.keys(color)[0].slice(0, -1);
    palettes[colorName] = {};
    Object.entries(color).forEach(([_shadeName, shade], index) => {
      palettes[colorName][index * 100 + 100] = shade;
    });
  });
  return palettes;
}

const palettes = generateRadixPalettes();
const safeListPattern = generateSafelistsPattern();

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: 0,
      sm: 330,
      md: 414,
      lg: 768,
      xl: 1200,
    },
    extend: {
      colors: {
        ...palettes,
      },
    },
  },
  safelist: [
    {
      pattern: safeListPattern,
      variants: ["hover", "focus"],
    },
  ],
  plugins: [],
};

export default config;
