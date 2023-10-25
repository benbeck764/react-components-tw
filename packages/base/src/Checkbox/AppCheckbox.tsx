"use client";
import { FC, useState, useId } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Flex } from "@radix-ui/themes";
import { isString } from "../utilities/string";
import {
  StyledCheckIcon,
  StyledCheckboxRoot,
  StyledLabel,
  StyledMinusIcon,
} from "./AppCheckbox.styles";
import { AppCheckboxProps, CheckboxItem } from "./AppCheckbox.props";

const AppCheckbox: FC<AppCheckboxProps> = (props: AppCheckboxProps) => {
  const {
    item,
    size = "medium",
    variant = "classic",
    icon = "check",
    onCheckedChanged,
  } = { ...props };

  const id = useId();
  const [checked, setChecked] = useState(Boolean(item.checked));

  const handleClick = () => {
    const newValue = !checked;
    setChecked(newValue);
    const newItem: CheckboxItem = { ...props.item, checked: newValue };
    onCheckedChanged?.(newItem);
  };

  return (
    <Flex align="center" gap="3" py="1">
      <StyledCheckboxRoot
        id={id}
        checked={checked}
        onCheckedChange={handleClick}
        disabled={item.disabled}
        $size={size}
        $variant={variant}
      >
        <Checkbox.Indicator>
          {icon === "check" ? (
            <StyledCheckIcon
              $size={size}
              $disabled={item.disabled}
              $variant={variant}
            />
          ) : (
            <StyledMinusIcon
              $size={size}
              $disabled={item.disabled}
              $variant={variant}
            />
          )}
        </Checkbox.Indicator>
      </StyledCheckboxRoot>

      {isString(item.label) ? (
        <StyledLabel
          as="label"
          htmlFor={id}
          size={size === "small" ? "1" : size === "medium" ? "2" : "3"}
          $disabled={item.disabled}
        >
          {item.label}
        </StyledLabel>
      ) : (
        item.label ?? <></>
      )}
    </Flex>
  );
};

export default AppCheckbox;
