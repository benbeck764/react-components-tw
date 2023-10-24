/** @type {import('tailwindcss').Config} */
import * as radix from "@radix-ui/colors";

function generateSafelistsPattern() {
  const colors = Object.keys(radix).join("|");
  const scale = Array.from(Array(12).keys())
    .map((num) => num * 100 + 100)
    .join("|");
  const pattern = `(bg|text)-(${colors})-(${scale})`;
  return new RegExp(pattern);
}

function generateRadixPalettes() {
  const palettes = {};
  Object.entries(radix).forEach(([colorName, color]) => {
    palettes[colorName] = {};
    Object.entries(color).forEach(([_, shade], index) => {
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
