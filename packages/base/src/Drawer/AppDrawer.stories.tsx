import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppDrawer, { AppDrawerProps } from "./AppDrawer";
import { Flex, Text } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import AppButton from "../Button/AppButton";

type AppDrawerStoryProps = AppDrawerProps;
type Story = StoryObj<typeof AppDrawer>;

export const Drawers: Story = (args: AppDrawerStoryProps) => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const [open4, setOpen4] = useState<boolean>(false);

  return (
    <Flex gap="5">
      <Flex align="center" gap="2">
        <Text>Left</Text>
        <AppDrawer
          mode="panel"
          anchor="left"
          open={open1}
          displayDividers
          panelStyle={{
            width: "300px",
            overflowY: "hidden",
            height: "100vh",
          }}
          triggerComponent={
            <AppButton
              onClick={() => setOpen1(true)}
              variant="ghost"
              size="medium"
            >
              <HamburgerMenuIcon />
            </AppButton>
          }
          onClose={() => setOpen1(false)}
        ></AppDrawer>
      </Flex>

      <Flex align="center" gap="2">
        <Text>Top</Text>
        <AppDrawer
          mode="panel"
          anchor="top"
          open={open2}
          displayDividers
          panelStyle={{
            width: "100vw",
            overflowY: "hidden",
            height: "300px",
          }}
          triggerComponent={
            <AppButton
              onClick={() => setOpen2(true)}
              variant="ghost"
              size="medium"
            >
              <HamburgerMenuIcon />
            </AppButton>
          }
          onClose={() => setOpen2(false)}
        ></AppDrawer>
      </Flex>

      <Flex align="center" gap="2">
        <Text>Right</Text>
        <AppDrawer
          mode="panel"
          anchor="right"
          open={open3}
          displayDividers
          panelStyle={{
            width: "300px",
            overflowY: "hidden",
            height: "100vh",
          }}
          triggerComponent={
            <AppButton
              onClick={() => setOpen3(true)}
              variant="ghost"
              size="medium"
            >
              <HamburgerMenuIcon />
            </AppButton>
          }
          onClose={() => setOpen3(false)}
        ></AppDrawer>
      </Flex>

      <Flex align="center" gap="2">
        <Text>Bottom</Text>
        <AppDrawer
          mode="panel"
          anchor="bottom"
          open={open4}
          displayDividers
          panelStyle={{
            width: "100vw",
            overflowY: "hidden",
            height: "300px",
          }}
          triggerComponent={
            <AppButton
              onClick={() => setOpen4(true)}
              variant="ghost"
              size="medium"
            >
              <HamburgerMenuIcon />
            </AppButton>
          }
          onClose={() => setOpen4(false)}
        ></AppDrawer>
      </Flex>
    </Flex>
  );
};
Drawers.args = {};

const meta: Meta<typeof AppDrawer> = {
  component: AppDrawer,
  title: "AppDrawer",
};
export default meta;
