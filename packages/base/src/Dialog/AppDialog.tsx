"use client";
import { FC, PropsWithChildren, MouseEvent, useMemo } from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { AppButtonProps } from "../Button/AppButton";
import debounce from "../utilities/debounce";
import {
  StyledDialogCloseButton,
  StyledDialogContent,
  StyledDialogFooter,
  StyledDialogOverlay,
  StyledDialogPrimaryButton,
  StyledDialogSecondaryButton,
} from "./AppDialog.styles";

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
        <StyledDialogContent $allowScroll={allowScroll}>
          <Flex
            direction="row"
            justify="between"
            align="center"
            pb={!title && hideCloseButton ? "0" : "2"}
          >
            <Box>{title && <Heading as="h6">{title}</Heading>}</Box>
            <Box>
              {!hideCloseButton && (
                <Dialog.Close asChild>
                  <StyledDialogCloseButton onClick={() => onClose?.()}>
                    <Cross1Icon />
                  </StyledDialogCloseButton>
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
