import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppDialog, { AppDialogProps } from "./AppDialog";
import { Box, Flex } from "@radix-ui/themes";
import AppButton from "../Button/AppButton";

type AppDialogStoryProps = AppDialogProps;
type Story = StoryObj<typeof AppDialog>;

export const Dialogs: Story = (args: AppDialogStoryProps) => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const [open4, setOpen4] = useState<boolean>(false);

  return (
    <Flex gap="3">
      <Box>
        <AppButton onClick={() => setOpen1(!open1)}>Open Dialog</AppButton>
        <AppDialog
          open={open1}
          onClose={() => setOpen1(false)}
          title="My Dialog"
          primaryButtonProps={{ children: "Continue", onClick: () => void 0 }}
          secondaryButtonProps={{
            children: "Cancel",
            onClick: () => setOpen1(false),
          }}
        >
          <Box>Hello World!</Box>
          <Box>Here are some contents for a Dialog...</Box>
        </AppDialog>
      </Box>
      <Box>
        <AppButton onClick={() => setOpen2(!open2)}>
          Scrollable Dialog
        </AppButton>
        <AppDialog
          open={open2}
          onClose={() => setOpen2(false)}
          title="My Dialog"
          primaryButtonProps={{ children: "Continue", onClick: () => void 0 }}
          secondaryButtonProps={{
            children: "Cancel",
            onClick: () => setOpen2(false),
          }}
          allowScroll
        >
          {Array.from(Array(35).keys()).map(() => (
            <Box>Hello World!</Box>
          ))}
        </AppDialog>
      </Box>
      <Box>
        <AppButton onClick={() => setOpen3(!open3)}>Backdrop Close</AppButton>
        <AppDialog
          open={open3}
          onClose={() => setOpen3(false)}
          title="My Dialog"
          primaryButtonProps={{ children: "Continue", onClick: () => void 0 }}
          secondaryButtonProps={{
            children: "Cancel",
            onClick: () => setOpen3(false),
          }}
          allowBackdropClickClose
        >
          <Box>Hello World!</Box>
          <Box>Here are some contents for a Dialog...</Box>
        </AppDialog>
      </Box>
      <Box>
        <AppButton onClick={() => setOpen4(!open4)}>Esc Close</AppButton>
        <AppDialog
          open={open4}
          onClose={() => setOpen4(false)}
          title="My Dialog"
          primaryButtonProps={{ children: "Continue", onClick: () => void 0 }}
          secondaryButtonProps={{
            children: "Cancel",
            onClick: () => setOpen4(false),
          }}
          allowEscapeKeyClose
        >
          <Box>Hello World!</Box>
          <Box>Here are some contents for a Dialog...</Box>
        </AppDialog>
      </Box>
    </Flex>
  );
};
Dialogs.args = {};

const meta: Meta<typeof AppDialog> = {
  component: AppDialog,
  title: "AppDialog",
};
export default meta;
