"use client";
import { FC, PropsWithChildren } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Responsive, useThemeContext } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

export type AppCheckboxProps = {
  size?: Responsive<"1" | "2" | "3">;
  variant?: "classic" | "surface" | "soft";
  className?: string;
  highContrast?: boolean;
};

const AppCheckbox: FC<PropsWithChildren<AppCheckboxProps>> = (
  props: PropsWithChildren<AppCheckboxProps>
) => {
  const { children, size, variant, className } = { ...props };

  const sizeStyles = {
    1: "h-[16px] w-[16px]",
    2: "h-[20px] w-[20px]",
    3: "h-[24px] w-[24px]",
  };

  return (
    <div className="flex items-center">
      <Checkbox.Root
        className="hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none"
        defaultChecked
        id="c1"
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="pl-[15px] text-[15px] leading-none text-black"
        htmlFor="c1"
      >
        Accept terms and conditions.
      </label>
    </div>
  );
};

export default AppCheckbox;
