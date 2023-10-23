"use client";
import { FC, SetStateAction, createContext, useContext } from "react";
import {
  AppBreadcrumbs,
  AppCard,
  BreadcrumbItem,
} from "@benbeck764/react-components-tw";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { AppContext, AppContextValues } from "./Providers";

const Test: FC = () => {
  const { context, setContext } = useContext(AppContext);
  const breadcrumbs: BreadcrumbItem[] = [
    { displayName: "Home", path: "/home" },
    { displayName: "Test Page", path: "/test-page" },
  ];

  const toggleThemeMode = (themeMode: "light" | "dark"): void => {
    setContext?.((val: SetStateAction<AppContextValues>) => {
      return {
        ...val,
        theme: {
          appearance: themeMode,
        },
      };
    });
  };

  return (
    <div className="p-2">
      <AppCard size="3">
        <Flex direction="row" align="center" justify="between">
          <Heading as="h1" mb="2">
            My Test Page
          </Heading>
          {context?.theme.appearance === "light" && (
            <Button variant="solid" onClick={() => toggleThemeMode("dark")}>
              <MoonIcon /> Dark Mode
            </Button>
          )}
          {context?.theme.appearance === "dark" && (
            <Button variant="solid" onClick={() => toggleThemeMode("light")}>
              <SunIcon /> Light Mode
            </Button>
          )}
        </Flex>
        <AppBreadcrumbs breadcrumbs={breadcrumbs}></AppBreadcrumbs>
      </AppCard>
    </div>
  );
};

export default Test;
