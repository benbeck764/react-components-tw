"use client";
import { FC } from "react";
import {
  StyledContentOverlay,
  StyledLoaderWrapper,
} from "./AppContentLoader.styles";
import { AppCircularProgress } from "../common";

export interface AppContentLoaderProps {
  loading: boolean;
}

const AppContentLoader: FC<AppContentLoaderProps> = (
  props: AppContentLoaderProps
) => {
  return (
    <StyledContentOverlay hidden={!props.loading}>
      <StyledLoaderWrapper>
        <AppCircularProgress />
      </StyledLoaderWrapper>
    </StyledContentOverlay>
  );
};

export default AppContentLoader;
