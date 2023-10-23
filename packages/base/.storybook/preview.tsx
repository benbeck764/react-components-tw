import React from "react";
import type { Preview } from "@storybook/react";
import { Theme, ThemeOptions } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "tailwindcss/tailwind.css";

const themeProps: ThemeOptions = {
  // https://github.com/vercel/next.js/discussions/22388#discussioncomment-7282793
  appearance: "inherit",
  accentColor: "blue",
  grayColor: "gray",
  panelBackground: "solid",
  radius: "medium",
  scaling: "100%",
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme {...themeProps}>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
