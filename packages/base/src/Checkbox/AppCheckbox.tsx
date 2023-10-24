"use client";
import { FC, useState, useId } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Text, useThemeContext, Flex } from "@radix-ui/themes";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { isString } from "../utilities/string";

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
    variant,
    icon = "check",
    className,
    onCheckedChanged,
  } = { ...props };

  const theme = useThemeContext();
  const id = useId();

  const [checked, setChecked] = useState(Boolean(item.checked));

  const handleClick = () => {
    const newValue = !checked;
    setChecked(newValue);
    const newItem: CheckboxItem = { ...props.item, checked: newValue };
    onCheckedChanged?.(newItem);
  };

  const baseStyles = `flex items-center justify-center`;

  const disabledColor = {
    dark: {
      enabled: `text-inherit`,
      disabled: `text-gray-700`,
    },
    light: {
      enabled: `text-inherit`,
      disabled: `text-gray-700`,
    },
    inherit: {
      enabled: `text-inherit`,
      disabled: `text-inherit`,
    },
  };

  const conditionalStyles = {
    dark: {
      enabled: `border border-gray-300 hover:bg-${theme.accentColor}-800`,
      disabled: `border border-gray-700 bg-gray-1200`,
    },
    light: {
      enabled: `border border-gray-300 hover:bg-${theme.accentColor}-800 `,
      disabled: `border border-gray-700 bg-gray-300`,
    },
    inherit: {
      enabled: `border border-inherit hover:bg-${theme.accentColor}-800`,
      disabled: `border border-inherit bg-inherit`,
    },
  };

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

  const checkboxStyles = `${baseStyles} ${sizeStyles[size]} ${
    radiusStyles[theme.radius]
  } ${
    conditionalStyles[theme.appearance][item.disabled ? "disabled" : "enabled"]
  }`;

  return (
    <Flex align="center" gap="3" py="1" className={className}>
      <Checkbox.Root
        className={checkboxStyles}
        id={id}
        checked={checked}
        onCheckedChange={handleClick}
        disabled={item.disabled}
      >
        <Checkbox.Indicator>
          {icon === "check" ? (
            <CheckIcon
              className={`${iconStyles[size]} ${
                disabledColor[theme.appearance][
                  item.disabled ? "disabled" : "enabled"
                ]
              }`}
            />
          ) : (
            <MinusIcon
              className={`${iconStyles[size]} ${
                disabledColor[theme.appearance][
                  item.disabled ? "disabled" : "enabled"
                ]
              }`}
            />
          )}
        </Checkbox.Indicator>
      </Checkbox.Root>

      {isString(item.label) ? (
        <Text
          className={`${
            disabledColor[theme.appearance][
              item.disabled ? "disabled" : "enabled"
            ]
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
