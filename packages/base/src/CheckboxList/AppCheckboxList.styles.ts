import styled from "styled-components";
import { CaretUpIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { AppCheckboxSize } from "../Checkbox";

const sizeStyles: Record<AppCheckboxSize, string> = {
  small: `calc(var(--space-5) * 0.875)`,
  medium: `var(--space-5)`,
  large: `calc(var(--space-5) * 1.25)`,
};

export const StyledCaretUpIcon = styled(CaretUpIcon)<{
  $size: AppCheckboxSize;
}>`
  height: ${({ $size }) => sizeStyles[$size]};
  width: ${({ $size }) => sizeStyles[$size]};
  color: var(--accent-11);
`;

export const StyledCaretDownIcon = styled(CaretDownIcon)<{
  $size: AppCheckboxSize;
}>`
  height: ${({ $size }) => sizeStyles[$size]};
  width: ${({ $size }) => sizeStyles[$size]};
  color: var(--accent-11);
`;
