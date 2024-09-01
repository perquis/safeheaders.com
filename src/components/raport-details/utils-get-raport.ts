import { securityHeaders } from "@/components/raport-details/data-security-headers";

export const getRaport = (headers: {
  [key: string]: string | string[] | unknown;
}) => {
  const result = securityHeaders
    .map((item) => {
      return item.label in headers ? { ...item, highlight: true } : item;
    })
    .filter(Boolean);

  return result as unknown as {
    label: string;
    content: string;
  }[];
};
