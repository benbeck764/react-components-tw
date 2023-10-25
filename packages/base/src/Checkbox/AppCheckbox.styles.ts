import * as Checkbox from "@radix-ui/react-checkbox";
import styled, { css } from "styled-components";
import { AppCheckboxSize, AppCheckboxVariant } from "./AppCheckbox.props";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";

const sizeStyles = {
  small: "16px",
  medium: "20px",
  large: "24px",
};

export const StyledCheckboxRoot = styled(Checkbox.Root)<{
  $size: AppCheckboxSize;
  $variant: AppCheckboxVariant;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ $size }) => sizeStyles[$size]};
  width: ${({ $size }) => sizeStyles[$size]};
  border-radius: var(--radius-1);
  border-style: ${({ $variant }) => ($variant === "soft" ? "none" : "solid")};
  border-width: 1px;
  border-color: ${({ disabled }) =>
    disabled ? "var(--gray-a7)" : "var(--gray-a5)"};
  background-color: ${({ $variant, disabled, checked }) =>
    disabled
      ? "var(--gray-a3)"
      : $variant === "soft"
      ? "var(--accent-a5)"
      : checked
      ? "var(--accent-a9)"
      : "unset"};
  box-shadow: ${({ $variant }) =>
    $variant === "classic" &&
    `inset 0 .5px .5px var(--white-a4),inset 0 -.5px .5px var(--black-a4)`};
  background-image: ${({ $variant }) =>
    $variant === "classic" &&
    `linear-gradient(to bottom,var(--white-a3),transparent,var(--black-a1))`};
`;

const iconSizeStyles = {
  small: "14px",
  medium: "18px",
  large: "22px",
};

const iconStyles = css<{
  $size: AppCheckboxSize;
  $variant: AppCheckboxVariant;
  $disabled?: boolean;
}>`
  color: ${({ $disabled, $variant }) =>
    $disabled
      ? "var(--gray-a8)"
      : $variant === "soft"
      ? "var(--accent-11)"
      : "var(--accent-9-contrast)"};
`;

export const StyledCheckIcon = styled(CheckIcon)<{
  $size: AppCheckboxSize;
  $variant: AppCheckboxVariant;
  $disabled?: boolean;
}>`
  ${iconStyles}
  height: ${({ $size }) => iconSizeStyles[$size]};
  width: ${({ $size }) => iconSizeStyles[$size]};
`;

export const StyledMinusIcon = styled(MinusIcon)<{
  $size: AppCheckboxSize;
  $variant: AppCheckboxVariant;
  $disabled?: boolean;
}>`
  ${iconStyles}
  height: ${({ $size }) => iconSizeStyles[$size]};
  width: ${({ $size }) => `calc(${iconSizeStyles[$size]} - 4px)`};
  margin-top: 3px;
`;

export const StyledLabel = styled(Text)<{
  $disabled?: boolean;
}>`
  color: ${({ $disabled }) => ($disabled ? "var(--gray-a8)" : "inherit")};
`;
