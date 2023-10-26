import styled, { css } from "styled-components";
import { Card } from "@radix-ui/themes";
import { AppCardSize, AppCardVariant } from "./AppCard";

const sizeStyles: Record<AppCardSize, string> = {
  "extra-small": "var(--space-1)",
  small: `var(--space-2)`,
  medium: `var(--space-3)`,
  large: `var(--space-4)`,
  "extra-large": "var(--space-5)",
};

export const StyledCard = styled(Card)<{
  $size: AppCardSize;
  variant: AppCardVariant;
}>`
  padding: ${({ $size }) => sizeStyles[$size]};
  ${({ variant }) =>
    variant === "ghost" &&
    css`
      margin-top: 0;
      margin-bottom: 0;
    `}
`;
