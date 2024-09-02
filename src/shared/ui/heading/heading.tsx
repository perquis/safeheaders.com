import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export const Heading: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <span className={clsx("text-sm font-semibold", className)}>{children}</span>
  );
};
