import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppCheckbox, { AppCheckboxProps, CheckboxItem } from "./AppCheckbox";
import { Box, Flex } from "@radix-ui/themes";

type AppCheckboxStoryProps = AppCheckboxProps;
type Story = StoryObj<typeof AppCheckbox>;

const items: CheckboxItem[] = [
  { label: "React", checked: false },
  { label: "Angular", checked: false },
  { label: "Vue", checked: false },
];

const itemsChecked: CheckboxItem[] = [
  { label: "React", checked: true },
  { label: "Angular", checked: false },
  { label: "Vue", checked: true },
];

const itemsDisabled: CheckboxItem[] = [
  { label: "React", checked: true, disabled: true },
  { label: "Angular", checked: false, disabled: true },
  { label: "Vue", checked: true, disabled: true },
];

export const Checkboxes: Story = (args: AppCheckboxStoryProps) => {
  return (
    <>
      <Flex gap="4">
        <Flex direction="column" gap="4">
          <Box>
            <AppCheckbox {...args} size="small" item={items[0]} />
            <AppCheckbox {...args} size="small" item={items[1]} />
            <AppCheckbox {...args} size="small" item={items[2]} />
          </Box>
          <Box>
            <AppCheckbox {...args} size="medium" item={items[0]} />
            <AppCheckbox {...args} size="medium" item={items[1]} />
            <AppCheckbox {...args} size="medium" item={items[2]} />
          </Box>
          <Box>
            <AppCheckbox {...args} size="large" item={items[0]} />
            <AppCheckbox {...args} size="large" item={items[1]} />
            <AppCheckbox {...args} size="large" item={items[2]} />
          </Box>
        </Flex>
        <Flex direction="column" gap="4">
          <Box>
            <AppCheckbox {...args} size="small" item={itemsChecked[0]} />
            <AppCheckbox {...args} size="small" item={itemsChecked[1]} />
            <AppCheckbox
              {...args}
              size="small"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox {...args} size="medium" item={itemsChecked[0]} />
            <AppCheckbox {...args} size="medium" item={itemsChecked[1]} />
            <AppCheckbox
              {...args}
              size="medium"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox {...args} size="large" item={itemsChecked[0]} />
            <AppCheckbox {...args} size="large" item={itemsChecked[1]} />
            <AppCheckbox
              {...args}
              size="large"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
        </Flex>
        <Flex direction="column" gap="4">
          <Box>
            <AppCheckbox {...args} size="small" item={itemsDisabled[0]} />
            <AppCheckbox {...args} size="small" item={itemsDisabled[1]} />
            <AppCheckbox
              {...args}
              size="small"
              item={itemsDisabled[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox {...args} size="medium" item={itemsDisabled[0]} />
            <AppCheckbox {...args} size="medium" item={itemsDisabled[1]} />
            <AppCheckbox
              {...args}
              size="medium"
              item={itemsDisabled[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox {...args} size="large" item={itemsDisabled[0]} />
            <AppCheckbox {...args} size="large" item={itemsDisabled[1]} />
            <AppCheckbox
              {...args}
              size="large"
              icon="minus"
              item={itemsDisabled[2]}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
Checkboxes.args = {};

const meta: Meta<typeof AppCheckbox> = {
  component: AppCheckbox,
  title: "AppCheckbox",
};
export default meta;
