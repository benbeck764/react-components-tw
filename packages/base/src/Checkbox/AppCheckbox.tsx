"use client";
import { FC, useState, useId, useEffect } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Box, Flex } from "@radix-ui/themes";
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
    hidden,
    onCheckedChanged,
  } = { ...props };

  const id = useId();
  const [checked, setChecked] = useState(Boolean(item.checked));

  useEffect(() => {
    setChecked(Boolean(props.item.checked));
  }, [item.checked]);

  const handleClick = () => {
    const newValue = !checked;
    setChecked(newValue);
    const newItem: CheckboxItem = { ...props.item, checked: newValue };
    onCheckedChanged?.(newItem);
  };

  return (
    <Flex align="center" gap="3" hidden={hidden}>
      <StyledCheckboxRoot
        id={id}
        checked={checked}
        disabled={item.disabled}
        $size={size}
        $variant={variant}
        onCheckedChange={handleClick}
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
        <Box onClick={handleClick}>{item.label ?? <></>}</Box>
      )}
    </Flex>
  );
};

export default AppCheckbox;
