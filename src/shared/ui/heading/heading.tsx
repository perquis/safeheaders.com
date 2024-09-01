import { FC, PropsWithChildren } from "react";

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-sm font-semibold">{children}</span>;
};
