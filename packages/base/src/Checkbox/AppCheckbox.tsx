"use client";
import { FC, useState, useId } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  Text,
  useThemeContext,
  Flex,
  getMatchingGrayColor,
} from "@radix-ui/themes";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { isString } from "../utilities/string";
import { StyledCheckboxRoot } from "./AppCheckbox.styles";

export type CheckboxItem = {
  label: string | JSX.Element;
  checked: boolean;
  name?: string;
  disabled?: boolean;
};

export type AppCheckboxProps = {
  item: CheckboxItem;
  size?: "small" | "medium" | "large";
  variant?: "classic" | "surface" | "soft";
  icon?: "check" | "minus";
  className?: string;
  highContrast?: boolean;
  onCheckedChanged?: (item: CheckboxItem) => void;
};

const AppCheckbox: FC<AppCheckboxProps> = (props: AppCheckboxProps) => {
  const {
    item,
    size = "medium",
    variant = "classic",
    icon = "check",
    className,
    onCheckedChanged,
  } = { ...props };

  const theme = useThemeContext();
  const { appearance, accentColor, radius } = theme;
  const grayColor =
    theme.grayColor === "auto"
      ? getMatchingGrayColor(accentColor)
      : theme.grayColor;
  const id = useId();

  const [checked, setChecked] = useState(Boolean(item.checked));

  const handleClick = () => {
    const newValue = !checked;
    setChecked(newValue);
    const newItem: CheckboxItem = { ...props.item, checked: newValue };
    onCheckedChanged?.(newItem);
  };

  const baseStyles = `flex items-center justify-center`;

  const textColor = {
    dark: {
      enabled: `text-inherit`,
      disabled: `text-${grayColor}DarkA-700`,
    },
    light: {
      enabled: `text-inherit`,
      disabled: `text-${grayColor}A-700`,
    },
    inherit: {
      enabled: `text-inherit`,
      disabled: `text-inherit`,
    },
  };

  const borderStyles = {
    light: props.item.disabled
      ? `border border-${grayColor}A-700`
      : variant === "soft"
      ? `border-none`
      : `border border-${grayColor}A-500`,
    dark: props.item.disabled
      ? `border border-${grayColor}DarkA-700`
      : variant === "soft"
      ? `border-none`
      : `border border-${grayColor}DarkA-500`,
    inherit: `border border-inherit`,
  };

  const backgroundStyles = {
    classic: {
      light: props.item.disabled ? `bg-${grayColor}A-300` : ``,
      dark: props.item.disabled ? `bg-${grayColor}DarkA-1200` : ``,
      inherit: ``,
    },
    surface: {
      light: props.item.disabled ? `bg-${grayColor}A-300` : ``,
      dark: props.item.disabled ? `bg-${grayColor}DarkA-1200` : ``,
      inherit: ``,
    },
    soft: {
      light: props.item.disabled
        ? `bg-${grayColor}A-300`
        : `bg-${accentColor}A-500`,
      dark: props.item.disabled
        ? `bg-${grayColor}DarkA-1200`
        : `bg-${accentColor}Dark-500`,
      inherit: ``,
    },
  };

  const sizeStyles = {
    small: "h-[16px] w-[16px]",
    medium: "h-[20px] w-[20px]",
    large: "h-[24px] w-[24px]",
  };

  const radiusStyles = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded",
    large: "rounded-md",
    full: "rounded-md",
  };

  const checkboxStyles = `${baseStyles} ${sizeStyles[size]} ${radiusStyles[radius]}
   ${borderStyles[appearance]} ${backgroundStyles[variant][appearance]}`;

  const iconSizes = {
    small: "h-[14px] w-[14px]",
    medium: "h-[18px] w-[18px]",
    large: "h-[22px] w-[22px]",
  };

  const iconColors = {
    classic: {
      light: props.item.disabled ? `text-${grayColor}A-700` : ``,
      dark: props.item.disabled ? `text-${grayColor}DarkA-800` : ``,
      inherit: `text-inherit`,
    },
    surface: {
      light: props.item.disabled ? `text-${grayColor}A-700` : ``,
      dark: props.item.disabled ? `text-${grayColor}DarkA-800` : ``,
      inherit: `text-inherit`,
    },
    soft: {
      light: props.item.disabled
        ? `text-${grayColor}A-700`
        : `text-${accentColor}A-1100`,
      dark: props.item.disabled
        ? `text-${grayColor}DarkA-800`
        : `text-${accentColor}Dark-1100`,
      inherit: `text-inherit`,
    },
  };

  const iconStyles = `${iconSizes[size]} ${iconColors[variant][appearance]}`;

  return (
    <Flex align="center" gap="3" py="1" className={className}>
      <StyledCheckboxRoot
        className={checkboxStyles}
        id={id}
        checked={checked}
        onCheckedChange={handleClick}
        disabled={item.disabled}
      >
        <Checkbox.Indicator>
          {icon === "check" ? (
            <CheckIcon className={iconStyles} />
          ) : (
            <MinusIcon className={iconStyles} />
          )}
        </Checkbox.Indicator>
      </StyledCheckboxRoot>

      {isString(item.label) ? (
        <Text
          className={`${
            textColor[appearance][item.disabled ? "disabled" : "enabled"]
          }`}
          as="label"
          htmlFor={id}
          size={size === "small" ? "1" : size === "medium" ? "2" : "3"}
        >
          {item.label}
        </Text>
      ) : (
        item.label ?? <></>
      )}
    </Flex>
  );
};

export default AppCheckbox;
