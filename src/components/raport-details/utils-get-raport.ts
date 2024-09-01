import { securityHeaders } from "@/components/raport-details/data-security-headers";

export const getRaport = (headers: {
  [key: string]: string | string[] | unknown;
}) => {
  const result = securityHeaders
    .map((item) => {
      if ("x-powered-by" in headers) {
        return item;
      }

      return item.label in headers ? null : item;
    })
    .filter(Boolean);

  return result as unknown as {
    label: string;
    content: string;
  }[];
};
