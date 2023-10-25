import { GetPropDefTypes, themePropDefs } from "@radix-ui/themes";

type ThemeProps = GetPropDefTypes<typeof themePropDefs>;
export type ThemeRadius = NonNullable<ThemeProps["radius"]>;
