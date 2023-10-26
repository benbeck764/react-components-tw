"use client";
import { FC } from "react";
import { StyledSpan } from "./AppCircularProgress.styles";

export interface AppCircularProgressProps {
  size?: number;
  thickness?: number;
}

export const AppCircularProgress: FC<AppCircularProgressProps> = (
  props: AppCircularProgressProps
) => {
  const { size = 40, thickness = 3.6 } = props;
  return (
    <StyledSpan $size={size} $thickness={thickness} role="progressbar">
      <svg viewBox={`${size / 2} ${size / 2} ${size} ${size}`}>
        <circle
          cx={size}
          cy={size}
          r={size / 2}
          fill="none"
          strokeWidth={thickness}
        ></circle>
      </svg>
    </StyledSpan>
  );
};
