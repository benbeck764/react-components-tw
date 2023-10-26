"use client";
import { FC } from "react";
import { Box } from "@radix-ui/themes";
import AppCheckbox from "../AppCheckbox";
import {
  CheckboxItem,
  AppCheckboxSize,
  AppCheckboxVariant,
} from "../AppCheckbox.props";

export type AppSelectAllCheckboxProps = {
  totalLinesCount: number;
  selectedLinesCount: number;
  label: string | JSX.Element;
  size?: AppCheckboxSize;
  variant?: AppCheckboxVariant;
  onCheckedChanged: (item: CheckboxItem) => void;
};

export const AppSelectAllCheckbox: FC<AppSelectAllCheckboxProps> = (
  props: AppSelectAllCheckboxProps
) => {
  const {
    totalLinesCount,
    selectedLinesCount,
    label,
    size,
    variant,
    onCheckedChanged,
  } = props;

  return (
    <Box>
      <AppCheckbox
        size={size}
        item={{ label: label, checked: selectedLinesCount > 0 }}
        variant={variant}
        icon={selectedLinesCount >= totalLinesCount ? "check" : "minus"}
        onCheckedChanged={onCheckedChanged}
      />
    </Box>
  );
};
