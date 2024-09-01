import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, FC } from "react";

export const ItemLink: FC<ComponentProps<typeof Link>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li>
      <Link
        {...props}
        className={clsx(
          "flex items-start gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-200 focus-visible:text-zinc-200",
          className,
        )}
      >
        {children}
      </Link>
    </li>
  );
};
