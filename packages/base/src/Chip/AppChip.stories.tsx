import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppChip, { AppChipProps } from "./AppChip";
import { Table } from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";

type AppChipStoryProps = AppChipProps;
type Story = StoryObj<typeof AppChip>;

export const Cards: Story = (args: AppChipStoryProps) => {
  return (
    <>
      <Table.Root style={{ maxWidth: 800 }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Standard</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Custom Icon</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Delete Mode</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Small</Table.RowHeaderCell>
            <Table.Cell>
              <AppChip size="small" label={"React"} />
            </Table.Cell>
            <Table.Cell>
              <AppChip
                size="small"
                label={"React"}
                icon={<CheckCircledIcon />}
              />
            </Table.Cell>
            <Table.Cell>
              <AppChip size="small" label={"React"} onDelete={() => void 0} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Medium</Table.RowHeaderCell>
            <Table.Cell>
              <AppChip size="medium" label={"React"} />
            </Table.Cell>
            <Table.Cell>
              <AppChip
                size="medium"
                label={"React"}
                icon={<CheckCircledIcon />}
              />
            </Table.Cell>
            <Table.Cell>
              <AppChip size="medium" label={"React"} onDelete={() => void 0} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Large</Table.RowHeaderCell>
            <Table.Cell>
              <AppChip size="large" label={"React"} />
            </Table.Cell>
            <Table.Cell>
              <AppChip
                size="large"
                label={"React"}
                icon={<CheckCircledIcon />}
              />
            </Table.Cell>
            <Table.Cell>
              <AppChip size="large" label={"React"} onDelete={() => void 0} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
};
Cards.args = {};

const meta: Meta<typeof AppChip> = {
  component: AppChip,
  title: "AppChip",
};
export default meta;
