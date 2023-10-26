"use client";
import { FC } from "react";
import { useThemeContext } from "@radix-ui/themes";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { StyledChip, StyledChipText } from "./AppChip.styles";
import { isString } from "../utilities/string";

export type AppChipSize = "small" | "medium" | "large";
export type AppChipProps = {
  label?: string | React.ReactNode;
  index?: number;
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  size?: AppChipSize;
  onEdit?: (index?: number, label?: string) => void;
  onDelete?: (index?: number) => void;
};

const AppChip: FC<AppChipProps> = (props: AppChipProps) => {
  const { label, index, icon, size = "medium", onEdit, onDelete } = props;
  const isLabelString = typeof label === "string";

  const theme = useThemeContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onDelete?.(index);
    }
  };

  const handleDoubleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isLabelString && target.textContent !== label) return;

    onEdit?.(index, isLabelString ? label : undefined);
  };

  return (
    <StyledChip
      $size={size}
      $radius={theme.radius}
      $deleteMode={typeof onDelete !== "undefined"}
      onKeyDown={handleKeyDown}
      onDoubleClick={handleDoubleClick}
    >
      {isString(label) ? (
        <StyledChipText>{label}</StyledChipText>
      ) : (
        label ?? <></>
      )}
      {onDelete && <CrossCircledIcon onClick={() => onDelete?.(index)} />}
      {!onDelete && (icon ?? <></>)}
    </StyledChip>
  );
};

export default AppChip;
