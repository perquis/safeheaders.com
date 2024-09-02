import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface Item {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

interface IList {
  title: string;
  items: Item[];
}

export const List: FC<IList> = ({ title, items }) => {
  return (
    <menu className="flex flex-col">
      <li className="py-1.5 text-sm font-medium capitalize">{title}</li>
      {items.map((item) => (
        <li key={item.name} className="py-1.5 text-sm">
          <Link
            href={`/docs/${title.toLowerCase().replaceAll(" ", "-")}/${item.href}`}
            className={clsx(
              "text-zinc-500 hover:text-cyan-400 focus-visible:text-cyan-400",
              item.disabled && "pointer-events-none opacity-50",
            )}
            tabIndex={item.disabled ? -1 : undefined}
          >
            {item.name} {item.external && <span>↗</span>}
          </Link>
        </li>
      ))}
    </menu>
  );
};
