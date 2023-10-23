import React, { FC, PropsWithChildren } from "react";
import type { Preview, StoryContext } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { Theme, ThemeOptions, ThemePanel, Card } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "tailwindcss/tailwind.css";

const ThemeWrapper: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  const themeProps: ThemeOptions = {
    appearance: useDarkMode() ? "dark" : "light",
    accentColor: "blue",
    grayColor: "gray",
    panelBackground: "solid",
    radius: "medium",
    scaling: "100%",
  };

  return (
    <Theme {...themeProps}>
      <Card>{children} </Card>
    </Theme>
  );
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
    (Story, context) => (
      <ThemeWrapper>
        <ThemePanel />
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default preview;
