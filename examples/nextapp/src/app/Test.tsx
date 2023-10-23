"use client";
import { FC } from "react";
import {
  AppBreadcrumbs,
  AppCard,
  BreadcrumbItem,
} from "@benbeck764/react-components-tw";

const Test: FC = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { displayName: "Home", path: "/home" },
    { displayName: "Stories", path: "/stories" },
  ];

  return (
    <div className="p-2">
      <AppCard size="4">
        <AppBreadcrumbs breadcrumbs={breadcrumbs}></AppBreadcrumbs>
        Hello
      </AppCard>
    </div>
  );
};

export default Test;
