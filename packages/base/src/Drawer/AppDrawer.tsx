"use client";
import React, { FC, PropsWithChildren, useState, useEffect } from "react";
import { Separator } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { AppButtonProps } from "../Button";
import ReactDOM from "react-dom";
import { CloseButton } from "../common/CloseButton/AppCloseButton";
import AppButton from "../Button/AppButton";
import {
  StyledDrawerContent,
  StyledList,
  StyledListItem,
  StyledPanelBox,
} from "./AppDrawer.styles";
import { StyledDialogOverlay } from "../Dialog/AppDialog.styles";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export type AppDrawerMode = "menu" | "panel";
export interface AppDrawerProps {
  mode: AppDrawerMode;
  open: boolean;
  anchor?: "left" | "top" | "right" | "bottom";
  displayDividers?: boolean;
  closeOnSelect?: boolean;
  buttonProps?: AppButtonProps;
  listProps?: React.ButtonHTMLAttributes<HTMLUListElement>;
  panelStyle?: React.CSSProperties;
  prefix?: React.ReactNode | string;
  closeButtonContainer?: HTMLElement | null;
  onClose?: () => void;
}

const AppDrawer: FC<PropsWithChildren<AppDrawerProps>> = (
  props: PropsWithChildren<AppDrawerProps>
) => {
  const {
    children,
    mode,
    displayDividers,
    closeOnSelect,
    buttonProps,
    open,
    listProps,
    panelStyle,
    prefix,
    closeButtonContainer,
    onClose,
  } = props;

  const handleItemClick = () => {
    if (closeOnSelect) onClose?.();
  };

  const numChildren = React.Children.count(children);

  const closeButton = <CloseButton onClick={() => onClose?.()} />;

  return (
    <Dialog.Root open={open}>
      {closeButtonContainer &&
        ReactDOM.createPortal(closeButton, closeButtonContainer)}
      {buttonProps && (
        <Dialog.Trigger>
          <AppButton {...buttonProps}>
            <HamburgerMenuIcon />
          </AppButton>
        </Dialog.Trigger>
      )}
      <Dialog.Portal
        container={
          (document.getElementsByClassName(
            "radix-themes"
          )?.[0] as HTMLElement) ?? document.body
        }
      >
        <StyledDialogOverlay />
        <StyledDrawerContent
          onPointerDownOutside={() => {
            onClose?.();
          }}
          onEscapeKeyDown={() => {
            onClose?.();
          }}
        >
          {mode === "menu" && (
            <StyledList {...listProps}>
              <>
                {prefix && prefix}
                {React.Children.map(children, (child, index) => {
                  return (
                    <>
                      <StyledListItem onClick={handleItemClick}>
                        {child}
                      </StyledListItem>
                      {displayDividers === true && index < numChildren - 1 && (
                        <Separator my="2" size="4" />
                      )}
                    </>
                  );
                })}
              </>
            </StyledList>
          )}
          {mode === "panel" && (
            <StyledPanelBox style={panelStyle}>
              <>
                {prefix && prefix}
                {children}
              </>
            </StyledPanelBox>
          )}
        </StyledDrawerContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AppDrawer;
