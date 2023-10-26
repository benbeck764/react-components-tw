import { Box } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledContentOverlay = styled(Box)<{}>`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--gray-11);
  opacity: 0.5;
  z-index: 10;
`;

export const StyledLoaderWrapper = styled(Box)<{}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
`;
