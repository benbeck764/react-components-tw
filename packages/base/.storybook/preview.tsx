import React, { FC, PropsWithChildren } from "react";
import type { Preview, StoryContext } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { Theme, ThemeOptions } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "tailwindcss/tailwind.css";

const ThemeWrapper: FC<PropsWithChildren<{ context: StoryContext<any> }>> = (
  props: PropsWithChildren<{ context: StoryContext<any> }>
) => {
  const { children } = props;
  const themeProps: ThemeOptions = {
    appearance: useDarkMode() ? "dark" : "light",
    accentColor: "blue",
    grayColor: "gray",
    panelBackground: "solid",
    radius: "medium",
    scaling: "100%",
  };
  return <Theme {...themeProps}>{children}</Theme>;
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
      <ThemeWrapper context={context}>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default preview;
