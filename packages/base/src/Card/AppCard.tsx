"use client";
import { FC, PropsWithChildren } from "react";
import { Card, Responsive } from "@radix-ui/themes";

export type AppCardProps = {
  size?: Responsive<"1" | "2" | "3" | "4" | "5">;
  variant?: "surface" | "classic" | "ghost";
  className?: string;
};

const AppCard: FC<PropsWithChildren<AppCardProps>> = (
  props: PropsWithChildren<AppCardProps>
) => {
  const { children, size, variant, className } = { ...props };

  return (
    <Card variant={variant} size={size} className={className}>
      {children}
    </Card>
  );
};

export default AppCard;
