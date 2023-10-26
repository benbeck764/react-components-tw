import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppContentLoader, { AppContentLoaderProps } from "./AppContentLoader";
import { Box, Flex } from "@radix-ui/themes";

type AppContentLoaderStoryProps = AppContentLoaderProps;
type Story = StoryObj<typeof AppContentLoader>;

export const ContentLoaders: Story = (args: AppContentLoaderStoryProps) => {
  return (
    <Flex gap="3">
      <Box
        style={{
          width: 200,
          height: 200,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <AppContentLoader {...args}></AppContentLoader>
      </Box>
      <Box
        style={{
          width: 100,
          height: 100,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <AppContentLoader {...args}></AppContentLoader>
      </Box>
      <Box
        style={{
          width: 50,
          height: 50,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <AppContentLoader {...args}></AppContentLoader>
      </Box>
    </Flex>
  );
};
ContentLoaders.args = {
  loading: true,
};

const meta: Meta<typeof AppContentLoader> = {
  component: AppContentLoader,
  title: "AppContentLoader",
};
export default meta;
