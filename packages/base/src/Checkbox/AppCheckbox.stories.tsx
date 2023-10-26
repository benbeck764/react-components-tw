import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppCheckbox from "./AppCheckbox";
import { Box, Flex, Text } from "@radix-ui/themes";
import { AppCheckboxProps, CheckboxItem } from "./AppCheckbox.props";

type AppCheckboxStoryProps = AppCheckboxProps;
type Story = StoryObj<typeof AppCheckbox>;

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
            <Text as="p" mb="2">
              (Classic)
            </Text>
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
            <Text as="p" mb="2">
              (Surface)
            </Text>
            <AppCheckbox
              {...args}
              size="small"
              variant="surface"
              item={itemsChecked[0]}
            />
            <AppCheckbox
              {...args}
              size="small"
              variant="surface"
              item={itemsChecked[1]}
            />
            <AppCheckbox
              {...args}
              size="small"
              variant="surface"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox
              {...args}
              size="medium"
              variant="surface"
              item={itemsChecked[0]}
            />
            <AppCheckbox
              {...args}
              size="medium"
              variant="surface"
              item={itemsChecked[1]}
            />
            <AppCheckbox
              {...args}
              size="medium"
              variant="surface"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox
              {...args}
              size="large"
              variant="surface"
              item={itemsChecked[0]}
            />
            <AppCheckbox
              {...args}
              size="large"
              variant="surface"
              item={itemsChecked[1]}
            />
            <AppCheckbox
              {...args}
              size="large"
              variant="surface"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
        </Flex>
        <Flex direction="column" gap="4">
          <Box>
            <Text as="p" mb="2">
              (Soft)
            </Text>
            <AppCheckbox
              {...args}
              size="small"
              variant="soft"
              item={itemsChecked[0]}
            />
            <AppCheckbox
              {...args}
              size="small"
              variant="soft"
              item={itemsChecked[1]}
            />
            <AppCheckbox
              {...args}
              size="small"
              variant="soft"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox
              {...args}
              size="medium"
              variant="soft"
              item={itemsChecked[0]}
            />
            <AppCheckbox
              {...args}
              size="medium"
              variant="soft"
              item={itemsChecked[1]}
            />
            <AppCheckbox
              {...args}
              size="medium"
              variant="soft"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
          <Box>
            <AppCheckbox
              {...args}
              size="large"
              variant="soft"
              item={itemsChecked[0]}
            />
            <AppCheckbox
              {...args}
              size="large"
              variant="soft"
              item={itemsChecked[1]}
            />
            <AppCheckbox
              {...args}
              size="large"
              variant="soft"
              item={itemsChecked[2]}
              icon="minus"
            />
          </Box>
        </Flex>
        <Flex direction="column" gap="4">
          <Box>
            <Text as="p" mb="2">
              Disabled
            </Text>
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
