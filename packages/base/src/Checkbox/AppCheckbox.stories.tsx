import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppCheckbox, { AppCheckboxProps } from "./AppCheckbox";

type AppCheckboxStoryProps = AppCheckboxProps;
type Story = StoryObj<typeof AppCheckbox>;

export const Checkboxes: Story = (args: AppCheckboxStoryProps) => {
  return (
    <>
      <AppCheckbox size="small" {...args} />
      <AppCheckbox size="medium" {...args} />
      <AppCheckbox size="large" {...args} />
    </>
  );
};
Checkboxes.args = {
  //breadcrumbs: breadcrumbItems,
};

const meta: Meta<typeof AppCheckbox> = {
  component: AppCheckbox,
  title: "AppCheckbox",
};
export default meta;
