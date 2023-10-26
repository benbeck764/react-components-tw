"use client";
import { FC, PropsWithChildren } from "react";
import { StyledButton } from "./AppButton.styles";

export type AppButtonSize = "extra-small" | "small" | "medium" | "large";
export type AppButtonVariant =
  | "classic"
  | "solid"
  | "soft"
  | "surface"
  | "outline"
  | "ghost";

export type AppButtonProps = PropsWithChildren<{
  size?: AppButtonSize;
  variant?: AppButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}>;

const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const {
    children,
    size = "medium",
    variant = "solid",
    onClick,
  } = { ...props };

  return (
    <StyledButton variant={variant} $size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default AppButton;
