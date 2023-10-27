import { Box } from "@radix-ui/themes";
import styled, { css } from "styled-components";
import { StyledDialogContent } from "../Dialog/AppDialog.styles";
import { AppDrawerAnchor } from "./AppDrawer";

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

const transformStyles: Record<AppDrawerAnchor, string> = {
  left: `translateX(-250px)`,
  top: `translateY(-250px)`,
  right: `translateX(250px)`,
  bottom: `translateY(250px)`,
};

export const StyledDrawerContent = styled(StyledDialogContent)<{
  $anchor: AppDrawerAnchor;
  $open: boolean;
}>`
  all: unset;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: var(--white-a12);
  border-radius: 0;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${({ $anchor, $open }) =>
    $open ? "none" : transformStyles[$anchor]};

  ${({ $anchor }) =>
    $anchor === "left" &&
    css`
      left: 0;
      top: 0;
    `}
  ${({ $anchor }) =>
    $anchor === "top" &&
    css`
      top: 0;
    `}
  ${({ $anchor }) =>
    $anchor === "right" &&
    css`
      right: 0;
      top: 0;
    `}
  ${({ $anchor }) =>
    $anchor === "bottom" &&
    css`
      bottom: 0;
    `}
`;
