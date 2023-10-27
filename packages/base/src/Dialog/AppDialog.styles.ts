import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { Button, Flex } from "@radix-ui/themes";

export const StyledDialogOverlay = styled(Dialog.Overlay)<{}>`
  background-color: var(--black-a6);
  position: fixed;
  inset: 0;

  @keyframes overlayShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

// [TODO]: Casting as any to avoid error w/ Radix UI
export const StyledDialogContent = styled(Dialog.Content as any)<{
  $allowScroll: boolean;
}>`
  background-color: var(--white-a12);
  border-radius: var(--radius-3);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: var(--space-4);

  ${({ $allowScroll }) =>
    $allowScroll === true &&
    css`
      overflow-y: auto;
    `}

  &:focus {
    outline: none;
  }

  @keyframes contentShow {
    0% {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledDialogFooter = styled(Flex)<{}>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  & > button:not(:last-of-type) {
    margin-right: var(--space-2);
  }
  padding-top: var(--space-4);
`;

export const StyledDialogPrimaryButton = styled(Button)<{}>`
  background-color: var(--accent-10);
`;

export const StyledDialogSecondaryButton = styled(Button)<{}>`
  background-color: var(--gray-10);
`;
