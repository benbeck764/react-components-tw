import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppButton, { AppButtonProps, AppButtonVariant } from "./AppButton";
import { Box, Text, Table } from "@radix-ui/themes";

type AppButtonStoryProps = AppButtonProps;
type Story = StoryObj<typeof AppButton>;

export const Buttons: Story = (args: AppButtonStoryProps) => {
  const buttonTypes = [
    "classic",
    "solid",
    "soft",
    "surface",
    "outline",
    "ghost",
  ] as AppButtonVariant[];
  return (
    <>
      <Table.Root style={{ maxWidth: 800 }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Classic</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Solid</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Soft</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Surface</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Outline</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Ghost</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Extra Small</Table.RowHeaderCell>
            {buttonTypes.map((variant: AppButtonVariant) => (
              <Table.Cell key={variant}>
                <AppButton {...args} variant={variant} size="extra-small">
                  Accept
                </AppButton>
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Small</Table.RowHeaderCell>
            {buttonTypes.map((variant: AppButtonVariant) => (
              <Table.Cell key={variant}>
                <AppButton {...args} variant={variant} size="small">
                  Accept
                </AppButton>
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Medium</Table.RowHeaderCell>
            {buttonTypes.map((variant: AppButtonVariant) => (
              <Table.Cell key={variant}>
                <AppButton {...args} variant={variant} size="medium">
                  Accept
                </AppButton>
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Large</Table.RowHeaderCell>
            {buttonTypes.map((variant: AppButtonVariant) => (
              <Table.Cell key={variant}>
                <AppButton {...args} variant={variant} size="large">
                  Accept
                </AppButton>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
};
Buttons.args = {};

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  title: "AppButton",
};
export default meta;
