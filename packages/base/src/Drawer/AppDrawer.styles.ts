import { Box } from "@radix-ui/themes";
import styled from "styled-components";
import { StyledDialogContent } from "../Dialog/AppDialog.styles";

export const StyledList = styled("ul")<{}>`
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
  padding-left: 0;
  padding-right: 0;
  list-style-type: none;
  &:focus {
    outline: none;
  }
`;

export const StyledListItem = styled("li")<{}>`
  display: list-item;
`;

export const StyledPanelBox = styled(Box)<{}>`
  padding: var(--space-4);
  &:focus {
    outline: none;
  }
`;

export const StyledDrawerContent = styled(StyledDialogContent)<{
  $allowScroll: boolean;
}>`
  background-color: var(--white-a12);
  border-radius: 0;
`;
