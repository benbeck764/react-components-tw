import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppCard, { AppCardProps } from "./AppCard";
import { Box, Text, Table } from "@radix-ui/themes";

type AppCardStoryProps = AppCardProps;
type Story = StoryObj<typeof AppCard>;

export const Cards: Story = (args: AppCardStoryProps) => {
  return (
    <>
      <Table.Root style={{ maxWidth: 800 }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Surface</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Classic</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Ghost</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Link</Table.RowHeaderCell>
            <Table.Cell>
              <Box>
                <AppCard {...args} size="extra-small" asChild>
                  <a href="#">Card Link</a>
                </AppCard>
              </Box>
            </Table.Cell>
            <Table.Cell>
              <Box>
                <AppCard {...args} size="extra-small" variant="classic" asChild>
                  <a href="#">
                    <Text>Card Link</Text>
                  </a>
                </AppCard>
              </Box>
            </Table.Cell>
            <Table.Cell>
              <Box>
                <AppCard {...args} size="extra-small" variant="ghost" asChild>
                  <a href="#">
                    <Text>Card Link</Text>
                  </a>
                </AppCard>
              </Box>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Extra Small</Table.RowHeaderCell>
            <Table.Cell>
              <AppCard {...args} size="extra-small">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="extra-small" variant="classic">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="extra-small" variant="ghost">
                Hello World
              </AppCard>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Small</Table.RowHeaderCell>
            <Table.Cell>
              <AppCard {...args} size="small">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="small" variant="classic">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="small" variant="ghost">
                Hello World
              </AppCard>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Medium</Table.RowHeaderCell>
            <Table.Cell>
              <AppCard {...args} size="medium">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="medium" variant="classic">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="medium" variant="ghost">
                Hello World
              </AppCard>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Large</Table.RowHeaderCell>
            <Table.Cell>
              <AppCard {...args} size="large">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="large" variant="classic">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="large" variant="ghost">
                Hello World
              </AppCard>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Extra Large</Table.RowHeaderCell>
            <Table.Cell>
              <AppCard {...args} size="extra-large">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="extra-large" variant="classic">
                Hello World
              </AppCard>
            </Table.Cell>
            <Table.Cell>
              <AppCard {...args} size="extra-large" variant="ghost">
                Hello World
              </AppCard>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
};
Cards.args = {};

const meta: Meta<typeof AppCard> = {
  component: AppCard,
  title: "AppCard",
};
export default meta;
