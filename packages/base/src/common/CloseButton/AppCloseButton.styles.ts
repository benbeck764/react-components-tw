import { Button } from "@radix-ui/themes";
import styled from "styled-components";
import { CloseButtonSize } from "./AppCloseButton";

const iconSizes: Record<CloseButtonSize, string> = {
  small: `calc(var(--space-5) * 0.875)`,
  medium: `var(--space-5)`,
  large: `calc(var(--space-5) * 1.25)`,
};

export const StyledCloseButton = styled(Button)<{ $size: CloseButtonSize }>`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: ${({ $size }) => iconSizes[$size]};
  width: ${({ $size }) => iconSizes[$size]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-a11);

  &:focus {
    background-color: var(--accent-a4);
  }
  &:hover {
    box-shadow: 0 0 0 2px var(--accent-a7);
  }
`;
