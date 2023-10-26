import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppDialog, { AppDialogProps } from "./AppDialog";
import { Box, Flex } from "@radix-ui/themes";
import AppButton from "../Button/AppButton";

type AppDialogStoryProps = AppDialogProps;
type Story = StoryObj<typeof AppDialog>;

export const Dialogs: Story = (args: AppDialogStoryProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openScrollable, setOpenScrollable] = useState<boolean>(false);

  return (
    <Flex gap="3">
      <Box>
        <AppButton onClick={() => setOpen(!open)}>Open Dialog</AppButton>
        <AppDialog
          open={open}
          onClose={() => setOpen(false)}
          title="My Dialog"
          primaryButtonProps={{ children: "Continue", onClick: () => void 0 }}
          secondaryButtonProps={{
            children: "Cancel",
            onClick: () => setOpen(false),
          }}
        >
          <Box>Hello World!</Box>
          <Box>Here are some contents for a Dialog...</Box>
        </AppDialog>
      </Box>
      <Box>
        <AppButton onClick={() => setOpenScrollable(!open)}>
          Scrollable Dialog
        </AppButton>
        <AppDialog
          open={openScrollable}
          onClose={() => setOpenScrollable(false)}
          title="My Dialog"
          primaryButtonProps={{ children: "Continue", onClick: () => void 0 }}
          secondaryButtonProps={{
            children: "Cancel",
            onClick: () => setOpenScrollable(false),
          }}
        >
          {Array.from(Array(35).keys()).map(() => (
            <Box>Hello World!</Box>
          ))}
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
