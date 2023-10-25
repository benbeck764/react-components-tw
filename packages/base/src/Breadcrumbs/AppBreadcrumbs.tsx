"use client";
import { FC, ReactNode } from "react";
import { Text, Link, Flex, Box } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { isString } from "../utilities/string";

export type BreadcrumbItem = {
  displayName: ReactNode;
  path: string;
  params?: { [paramName: string]: string };
  queryParams?: { [paramName: string]: string };
};

export type AppBreadcrumbsProps = {
  breadcrumbs: BreadcrumbItem[];
  allowLinkableFirst?: boolean;
  homeSettings?: {
    include?: boolean;
    mobile?: boolean;
    path?: string;
    displayName?: string;
  };
  onNavigate?: (fullPath: string) => void;
};

const AppBreadcrumbs: FC<AppBreadcrumbsProps> = (
  props: AppBreadcrumbsProps
) => {
  const { breadcrumbs, allowLinkableFirst, homeSettings, onNavigate } = props;

  const replaceParams = (
    path: string,
    params: { [paramName: string]: string }
  ): string => {
    Object.entries(params).forEach(
      ([paramName, paramValue]) => (path = path.replace(paramName, paramValue))
    );
    return path;
  };

  const getQueryParamsString = (
    obj:
      | string
      | Record<string, string>
      | URLSearchParams
      | string[][]
      | undefined
  ): string => {
    const result = new URLSearchParams(obj).toString();
    if (!result) return "";
    return "?" + result;
  };

  const handleLinkClick = (breadcrumb: BreadcrumbItem): void => {
    let path = breadcrumb.path;
    if (breadcrumb.params && Object.keys(breadcrumb.params).length > 0) {
      path = replaceParams(breadcrumb.path, breadcrumb.params);
    }

    if (breadcrumb.queryParams) {
      path += getQueryParamsString(breadcrumb.queryParams);
    }

    onNavigate?.(path);
  };

  return (
    <Flex>
      {homeSettings?.include === true && (
        <Flex align="center" justify="center">
          {allowLinkableFirst ? (
            <Link
              size="3"
              weight="regular"
              underline="hover"
              onClick={() =>
                handleLinkClick({
                  displayName: homeSettings.displayName ?? "Home",
                  path: homeSettings.path ?? "",
                })
              }
              className={homeSettings?.mobile ? "inline" : "none lg:inline"}
            >
              {homeSettings.displayName ?? "Home"}
            </Link>
          ) : (
            <Text
              size="3"
              weight="bold"
              className={homeSettings?.mobile ? "block" : "none lg:block"}
            >
              {homeSettings.displayName ?? "Home"}
            </Text>
          )}
          <ChevronRightIcon />
        </Flex>
      )}

      <Flex>
        {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => {
          const isLast = index === breadcrumbs.length - 1;
          const key = isString(breadcrumb.displayName)
            ? (breadcrumb.displayName as string)
            : index;

          return (
            <Box key={key}>
              {
                <Flex align="center" justify="center">
                  {isLast ? (
                    <Text size="3" weight="bold">
                      {breadcrumb.displayName}
                    </Text>
                  ) : (
                    <>
                      <Link
                        size="3"
                        weight="regular"
                        underline="hover"
                        onClick={() => handleLinkClick(breadcrumb)}
                      >
                        {breadcrumb.displayName}
                      </Link>
                      <ChevronRightIcon />
                    </>
                  )}
                </Flex>
              }
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AppBreadcrumbs;
