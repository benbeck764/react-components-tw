import styled, { css } from "styled-components";
import { Flex, Text } from "@radix-ui/themes";
import { AppChipSize } from "./AppChip";
import { ThemeRadius } from "../types";

const chipSizes: Record<AppChipSize, string> = {
  small: `var(--space-5)`,
  medium: `var(--space-6)`,
  large: `var(--space-7)`,
};

const fontSizes: Record<AppChipSize, string> = {
  small: "var(--font-size-1)",
  medium: "var(--font-size-2)",
  large: "var(--font-size-3)",
};

const chipRadii: Record<ThemeRadius, string> = {
  none: "var(--radius-0)",
  small: "var(--radius-3)",
  medium: "var(--radius-4)",
  large: "var(--radius-5)",
  full: "var(--radius-6)",
};

const iconSizes: Record<AppChipSize, string> = {
  small: `calc(var(--space-4) * 0.875)`,
  medium: `calc(var(--space-4) * 1.25)`,
  large: `calc(var(--space-4) * 1.5)`,
};

export const StyledChip = styled(Flex)<{
  $size: AppChipSize;
  $radius: ThemeRadius;
  $deleteMode: boolean;
}>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: ${({ $size }) => chipSizes[$size]};
  border-radius: ${({ $radius }) => chipRadii[$radius]};
  font-size: ${({ $size }) => fontSizes[$size]};

  background-color: var(--accent-a7);
  max-width: 100%;
  user-select: none;
  text-decoration: none;
  appearance: none;
  white-space: nowrap;
  outline: 0px;
  cursor: default;

  // Calc these
  & > svg {
    height: ${({ $size }) => iconSizes[$size]};
    width: ${({ $size }) => iconSizes[$size]};
    margin-left: ${`calc(var(--space-1) * -1.25)`};
    margin-right: ${`calc(var(--space-1) * 1.5)`};

    ${({ $deleteMode }) =>
      $deleteMode === true &&
      css`
        &:hover {
          color: var(--accent-a9);
          cursor: pointer;
        }
      `}
  }
`;

export const StyledChipText = styled(Text)<{
  $size: AppChipSize;
}>`
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`;
