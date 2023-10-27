import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppDrawer, { AppDrawerProps } from "./AppDrawer";
import { Box, Flex } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type AppDrawerStoryProps = AppDrawerProps;
type Story = StoryObj<typeof AppDrawer>;

export const Drawers: Story = (args: AppDrawerStoryProps) => {
  const [open1, setOpen1] = useState<boolean>(false);
  return (
    <Flex gap="3">
      <Box>
        <AppDrawer
          mode="panel"
          open={open1}
          displayDividers
          panelStyle={{
            width: 300,
            overflowY: "hidden",
            height: "100vh",
          }}
          buttonProps={{
            variant: "ghost",
            children: "Hello",
            onClick: () => setOpen1(true),
          }}
          onClose={() => setOpen1(false)}
        >
          <Box>Hello Menu Item 1</Box>
          <Box>Hello 2</Box>
          <Box>Another Option</Box>
        </AppDrawer>
      </Box>
    </Flex>
  );
};
Drawers.args = {};

const meta: Meta<typeof AppDrawer> = {
  component: AppDrawer,
  title: "AppDrawer",
};
export default meta;
