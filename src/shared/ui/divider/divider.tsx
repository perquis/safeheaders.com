import clsx from "clsx";
import { ComponentProps, FC } from "react";

export const Divider: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div className={clsx("border-t border-zinc-900", className)} {...props} />
  );
};
