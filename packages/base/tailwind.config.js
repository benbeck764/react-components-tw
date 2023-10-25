/** @type {import('tailwindcss').Config} */
import * as radix from "@radix-ui/colors";

const grayColors = ["gray", "slate", "mauve", "sage", "olive", "sand"];
const accentColors = ["blue"];
const allColors = grayColors
  .concat(accentColors)
  .flatMap((color) => [color, `${color}A`, `${color}Dark`, `${color}DarkA`]);

const colorEntries = Object.entries(radix).filter(([key]) =>
  allColors.includes(key)
);
const colorKeys = colorEntries.map(([key]) => key);

function generateSafelistsPattern() {
  const colors = colorKeys.join("|");
  const scale = Array.from(Array(12).keys())
    .map((num) => num * 100 + 100)
    .join("|");
  const pattern = `(bg|border|text)-(${colors})-(${scale})`;
  return new RegExp(pattern);
}

function generateRadixPalettes() {
  const palettes = {};
  colorEntries.forEach(([colorName, color]) => {
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
    },
  ],
  plugins: [],
};

export default config;
