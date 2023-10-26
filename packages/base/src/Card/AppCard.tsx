"use client";
import { FC, PropsWithChildren } from "react";
import { StyledCard } from "./AppCard.styles";

export type AppCardSize =
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large";

export type AppCardVariant = "surface" | "classic" | "ghost";

export type AppCardProps = {
  size?: AppCardSize;
  variant?: AppCardVariant;
  asChild?: boolean;
};

const AppCard: FC<PropsWithChildren<AppCardProps>> = (
  props: PropsWithChildren<AppCardProps>
) => {
  const {
    children,
    size = "medium",
    variant = "surface",
    asChild,
  } = { ...props };

  return (
    <StyledCard $size={size} variant={variant} asChild={asChild}>
      {children}
    </StyledCard>
  );
};

export default AppCard;
