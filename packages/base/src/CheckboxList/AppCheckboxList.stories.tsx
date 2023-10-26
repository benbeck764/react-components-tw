import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import AppCheckboxList, { AppCheckboxListProps } from "./AppCheckboxList";
import { CheckboxItem } from "../Checkbox";

type AppCheckboxListStoryProps = AppCheckboxListProps;
type Story = StoryObj<typeof AppCheckboxList>;

export const CheckboxLists: Story = (args: AppCheckboxListStoryProps) => {
  const items: CheckboxItem[] = [
    { label: "React", checked: false, name: "react" },
    { label: "Angular", checked: false, name: "angular" },
    { label: "Vue", checked: false, name: "vue" },
    { label: "jQuery", checked: false, name: "jquery" },
    { label: "Vanilla JS", checked: false, name: "vanilla" },
    { label: "Ember.js", checked: false, name: "ember" },
    { label: "Django", checked: false, name: "python" },
    { label: "Ruby on Rails", checked: false, name: "ror" },
  ];

  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(items);

  const handleCheckedChange = (item: CheckboxItem) => {
    const index = checkboxItems.findIndex(
      (i: CheckboxItem) => i.name === item.name
    );
    if (index >= 0) {
      const updatedItems = [...checkboxItems];
      updatedItems[index] = item;
      setCheckboxItems(updatedItems);
    }
  };

  const handleSelectAll = (selected: boolean) => {
    const updatedItems = [
      ...checkboxItems.map((i: CheckboxItem) => {
        return { ...i, checked: selected };
      }),
    ];
    setCheckboxItems(updatedItems);
  };

  return (
    <AppCheckboxList
      {...args}
      items={checkboxItems}
      onCheckedChange={handleCheckedChange}
      onSelectAll={handleSelectAll}
    />
  );
};

CheckboxLists.args = {
  length: 4,
  inputLabel: "Front-End Frameworks",
};

const meta: Meta<typeof AppCheckboxList> = {
  component: AppCheckboxList,
  title: "AppCheckboxList",
};
export default meta;
