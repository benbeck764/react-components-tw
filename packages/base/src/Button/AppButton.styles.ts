import styled, { css } from "styled-components";
import { Button } from "@radix-ui/themes";
import { AppButtonSize, AppButtonVariant } from "./AppButton";

const buttonHeights: Record<AppButtonSize, string> = {
  "extra-small": "var(--space-4)",
  small: "var(--space-5)",
  medium: "var(--space-6)",
  large: "var(--space-7)",
};

const fontSizes: Record<AppButtonSize, string> = {
  "extra-small": "var(--font-size-1)",
  small: "var(--font-size-1)",
  medium: "var(--font-size-2)",
  large: "var(--font-size-3)",
};

export const StyledButton = styled(Button)<{
  $size: AppButtonSize;
  variant: AppButtonVariant;
}>`
  height: ${({ $size }) => buttonHeights[$size]};
  font-size: ${({ $size }) => fontSizes[$size]};
  ${({ variant }) =>
    variant === "ghost" &&
    css`
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
    `}
`;
