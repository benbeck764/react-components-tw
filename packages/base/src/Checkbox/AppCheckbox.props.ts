export type CheckboxItem = {
  label: string | JSX.Element;
  checked: boolean;
  name?: string;
  disabled?: boolean;
};

export type AppCheckboxSize = "small" | "medium" | "large";
export type AppCheckboxVariant = "classic" | "surface" | "soft";
export type AppCheckboxIconType = "check" | "minus";

export type AppCheckboxProps = {
  item: CheckboxItem;
  size?: AppCheckboxSize;
  variant?: AppCheckboxVariant;
  icon?: AppCheckboxIconType;
  highContrast?: boolean;
  onCheckedChanged?: (item: CheckboxItem) => void;
};
