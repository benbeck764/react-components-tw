"use client";
import { FC, PropsWithChildren, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  Text,
  Responsive,
  useThemeContext,
  Flex,
  Checkbox as Checkbox2,
  GetPropDefTypes,
  themePropDefs,
} from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

type ThemeProps = GetPropDefTypes<typeof themePropDefs>;
type ThemeRadius = NonNullable<ThemeProps["radius"]>;

export type AppCheckboxProps = {
  size?: "small" | "medium" | "large";
  variant?: "classic" | "surface" | "soft";
  className?: string;
  highContrast?: boolean;
};

const AppCheckbox: FC<PropsWithChildren<AppCheckboxProps>> = (
  props: PropsWithChildren<AppCheckboxProps>
) => {
  const { children, size = "medium", variant, className } = { ...props };
  const theme = useThemeContext();

  const [checked, setChecked] = useState("indeterminate");

  const baseStyles = "flex items-center justify-center border border-gray-400 ";

  const sizeStyles = {
    small: "h-[16px] w-[16px]",
    medium: "h-[20px] w-[20px]",
    large: "h-[24px] w-[24px]",
  };

  const iconStyles = {
    small: "h-[14px] w-[14px]",
    medium: "h-[18px] w-[18px]",
    large: "h-[22px] w-[22px]",
  };

  const radiusStyles = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded",
    large: "rounded-md",
    full: "rounded-md",
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${
    radiusStyles[theme.radius]
  } hover:bg-${theme.accentColor}-600`;

  return (
    <Flex align="center" gap="3" py="1">
      <Checkbox.Root className={styles} defaultChecked id="c1">
        <Checkbox.Indicator>
          <CheckIcon className={iconStyles[size]} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Text
        as="label"
        htmlFor="c1"
        size={size === "small" ? "1" : size === "medium" ? "2" : "3"}
      >
        Accept terms and conditions.
      </Text>
    </Flex>
  );
};

export default AppCheckbox;
