"use client";
import { Theme, ThemeOptions } from "@radix-ui/themes";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type AppContextValues = {
  theme: {
    appearance: "light" | "dark";
  };
};

const initialContextValues: AppContextValues = {
  theme: { appearance: "light" },
};

export const AppContext = createContext<{
  context?: AppContextValues;
  setContext?: Dispatch<SetStateAction<AppContextValues>>;
}>({});

export const Providers = (props: PropsWithChildren) => {
  const { children } = props;
  const [context, setContext] = useState(initialContextValues);

  const themeProps: ThemeOptions = {
    // https://github.com/vercel/next.js/discussions/22388#discussioncomment-7282793
    appearance: context.theme.appearance || "inherit",
    accentColor: "blue",
    grayColor: "gray",
    panelBackground: "solid",
    radius: "medium",
    scaling: "100%",
  };

  return (
    <AppContext.Provider value={{ context, setContext }}>
      <Theme {...themeProps}>{children}</Theme>
    </AppContext.Provider>
  );
};
