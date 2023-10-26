"use client";
import { FC, useState } from "react";
import { Box, Text, Flex } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  CheckboxItem,
  AppCheckboxVariant,
  AppCheckboxSize,
} from "../Checkbox/AppCheckbox.props";
import AppCheckbox from "../Checkbox/AppCheckbox";
import { StyledLabelBox } from "../common";
import { AppSelectAllCheckbox } from "../Checkbox";
import {
  StyledCaretDownIcon,
  StyledCaretUpIcon,
} from "./AppCheckboxList.styles";

export type AppCheckboxListProps = {
  items: CheckboxItem[];
  selectAll?: boolean;
  length?: number;
  variant?: AppCheckboxVariant;
  checkboxSize?: AppCheckboxSize;
  inputLabel?: string | React.ReactNode;
  onCheckedChange?: (item: CheckboxItem) => void;
  onSelectAll?: (selected: boolean) => void;
};

const AppCheckboxList: FC<AppCheckboxListProps> = (
  props: AppCheckboxListProps
) => {
  const {
    items,
    selectAll = true,
    length = 5,
    variant,
    checkboxSize = "medium",
    inputLabel,
    onCheckedChange,
    onSelectAll,
  } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleCheckedChange = (item: CheckboxItem): void => {
    if (onCheckedChange) {
      onCheckedChange(item);
    }
  };

  const displayOverflowToggle =
    typeof length !== "undefined" && length < items.length;
  const baseLength = displayOverflowToggle && length ? length : items.length;

  const childrenBase: React.ReactNode[] = [];
  const childrenOverflow: React.ReactNode[] = [];

  items.forEach((item, index) => {
    const checkBox = (
      <AppCheckbox
        key={index}
        item={item}
        variant={variant}
        icon={"check"}
        hidden={displayOverflowToggle && !isExpanded && index > baseLength}
        size={checkboxSize}
        onCheckedChanged={handleCheckedChange}
      />
    );
    if (index > baseLength) childrenOverflow.push(checkBox);
    else childrenBase.push(checkBox);
  });

  return (
    <Collapsible.Root open={isExpanded}>
      {inputLabel && (
        <StyledLabelBox>
          {typeof inputLabel === "string" && <Text as="p">{inputLabel}</Text>}
          {typeof inputLabel !== "string" && inputLabel}
        </StyledLabelBox>
      )}

      {selectAll && (
        <Box>
          <AppSelectAllCheckbox
            size={checkboxSize}
            totalLinesCount={items.length}
            selectedLinesCount={
              items.filter((i: CheckboxItem) => i.checked).length
            }
            label={<Text as="span">Select All</Text>}
            onCheckedChanged={(i: CheckboxItem) => onSelectAll?.(i.checked)}
          />
        </Box>
      )}

      {childrenBase}
      <Collapsible.Content>{childrenOverflow}</Collapsible.Content>
      {displayOverflowToggle && (
        <Flex
          tabIndex={0}
          align="center"
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setIsExpanded(!isExpanded);
          }}
          gap="2"
        >
          <Text>View {isExpanded ? "Less" : "More"}</Text>
          <Collapsible.Trigger asChild>
            {isExpanded ? (
              <StyledCaretUpIcon $size={checkboxSize} />
            ) : (
              <StyledCaretDownIcon $size={checkboxSize} />
            )}
          </Collapsible.Trigger>
        </Flex>
      )}
    </Collapsible.Root>
  );
};

export default AppCheckboxList;
