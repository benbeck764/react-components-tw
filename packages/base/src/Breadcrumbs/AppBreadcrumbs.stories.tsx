import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppBreadcrumbs, {
  AppBreadcrumbsProps,
  BreadcrumbItem,
} from "./AppBreadcrumbs";
import { Card } from "@radix-ui/themes";

type AppBreadcrumbsStoryProps = AppBreadcrumbsProps;
type Story = StoryObj<typeof AppBreadcrumbs>;

const breadcrumbItems: BreadcrumbItem[] = [
  { displayName: "Home", path: "/home" },
  { displayName: "Stories", path: "/stories" },
];

export const Breadcrumbs: Story = (args: AppBreadcrumbsStoryProps) => {
  return (
    <Card>
      <AppBreadcrumbs {...args} />
    </Card>
  );
};
Breadcrumbs.args = {
  breadcrumbs: breadcrumbItems,
};

export const MobileBreadcrumbs: Story = (args: AppBreadcrumbsStoryProps) => {
  return <AppBreadcrumbs {...args} />;
};
MobileBreadcrumbs.args = {
  breadcrumbs: breadcrumbItems.slice(1),
  homeSettings: {
    include: true,
    mobile: true,
  },
};

const meta: Meta<typeof AppBreadcrumbs> = {
  component: AppBreadcrumbs,
  title: "AppBreadcrumbs",
};
export default meta;
