"use client";
import { FC, PropsWithChildren, MouseEvent, useMemo } from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { AppButtonProps } from "../Button/AppButton";
import debounce from "../utilities/debounce";
import {
  StyledDialogContent,
  StyledDialogFooter,
  StyledDialogOverlay,
  StyledDialogPrimaryButton,
  StyledDialogSecondaryButton,
} from "./AppDialog.styles";
import { CloseButton } from "../common/CloseButton/AppCloseButton";

export type AppDialogProps = {
  open: boolean;
  title?: string;
  primaryButtonProps?: AppButtonProps;
  secondaryButtonProps?: AppButtonProps;
  hideCloseButton?: boolean;
  allowBackdropClickClose?: boolean;
  allowEscapeKeyClose?: boolean;
  allowScroll?: boolean;
  onClose?: () => void;
};

const AppDialog: FC<PropsWithChildren<AppDialogProps>> = (
  props: PropsWithChildren<AppDialogProps>
) => {
  const {
    children,
    title,
    open,
    primaryButtonProps,
    secondaryButtonProps,
    hideCloseButton,
    allowBackdropClickClose,
    allowEscapeKeyClose,
    allowScroll = true,
    onClose,
  } = props;

  const handlePrimaryClick = (event: MouseEvent<HTMLButtonElement>) => {
    primaryButtonProps?.onClick?.(event);
  };

  const handleSecondaryClick = (event: MouseEvent<HTMLButtonElement>) => {
    secondaryButtonProps?.onClick?.(event);
  };

  const debouncedPrimaryBtnClick = useMemo(
    () => debounce(handlePrimaryClick, 300),
    [primaryButtonProps?.onClick]
  );

  const debouncedSecondaryBtnClick = useMemo(
    () => debounce(handleSecondaryClick, 300),
    [secondaryButtonProps?.onClick]
  );

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal
        container={
          (document.getElementsByClassName(
            "radix-themes"
          )?.[0] as HTMLElement) ?? document.body
        }
      >
        <StyledDialogOverlay />
        <StyledDialogContent
          $allowScroll={allowScroll}
          onPointerDownOutside={() => {
            if (allowBackdropClickClose) onClose?.();
          }}
          onEscapeKeyDown={() => {
            if (allowEscapeKeyClose) onClose?.();
          }}
        >
          <Flex
            direction="row"
            justify="between"
            align="center"
            pb={!title && hideCloseButton ? "0" : "2"}
          >
            <Box>
              {title && (
                <Dialog.Title asChild>
                  <Heading as="h6">{title}</Heading>
                </Dialog.Title>
              )}
            </Box>
            <Box>
              {!hideCloseButton && (
                <Dialog.Close asChild>
                  <CloseButton onClick={() => onClose?.()} />
                </Dialog.Close>
              )}
            </Box>
          </Flex>
          <Flex direction="column" justify="between">
            {children}
            {(primaryButtonProps || secondaryButtonProps) && (
              <StyledDialogFooter>
                {secondaryButtonProps && (
                  <StyledDialogSecondaryButton
                    onClick={debouncedSecondaryBtnClick}
                  >
                    {secondaryButtonProps?.children ?? "No"}
                  </StyledDialogSecondaryButton>
                )}
                {primaryButtonProps && (
                  <StyledDialogPrimaryButton onClick={debouncedPrimaryBtnClick}>
                    {primaryButtonProps?.children ?? "Yes"}
                  </StyledDialogPrimaryButton>
                )}
              </StyledDialogFooter>
            )}
          </Flex>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AppDialog;
