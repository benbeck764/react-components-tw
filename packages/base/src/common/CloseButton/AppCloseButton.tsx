"use client";
import { Cross1Icon } from "@radix-ui/react-icons";
import { FC } from "react";
import { AppButtonProps } from "../../Button";
import { StyledCloseButton } from "./AppCloseButton.styles";

export type CloseButtonSize = "small" | "medium" | "large";

export interface CloseButtonProps extends AppButtonProps {
  size?: CloseButtonSize;
}

export const CloseButton: FC<CloseButtonProps> = (props: CloseButtonProps) => {
  const { size = "medium", ...rest } = { ...props };

  return (
    <StyledCloseButton $size={size} aria-label="close" {...rest}>
      <Cross1Icon />
    </StyledCloseButton>
  );
};
