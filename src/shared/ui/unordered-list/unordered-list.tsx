/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface Item {
  label: string;
  content: string;
  highlight?: boolean;
}

interface IUnorderedList {
  list: Item[];
}

export const UnorderedList: FC<IUnorderedList> = ({ list }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-zinc-900">
      <img
        src="/notebook-dynamic-color.png"
        className="absolute -right-6 -top-6"
      />
      {list.map((item, index) => (
        <Item key={index}>
          <div
            className={clsx(
              "flex-shrink-0 text-zinc-500 md:w-32",
              item.highlight && "!text-cyan-400",
            )}
          >
            {item.label}
          </div>
          <div>{item.content}</div>
        </Item>
      ))}
    </div>
  );
};

const Item: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start gap-2 border-b border-zinc-800 px-4 py-3.5 text-sm font-medium last:border-0 md:flex-row",
      )}
    >
      {children}
    </div>
  );
};
