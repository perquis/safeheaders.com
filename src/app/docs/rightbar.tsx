/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useObserver } from "@/app/docs/observer";
import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";
import { extractMdHeadings } from "@/shared/utils";
import clsx from "clsx";
import Link from "next/link";
import { FC, useEffect } from "react";

interface IRightbar {
  links: ReturnType<typeof extractMdHeadings>;
}

export const Rightbar: FC<IRightbar> = ({ links }) => {
  const { setFullObsList, obs } = useObserver();

  useEffect(() => {
    setFullObsList(links.map((link) => ({ name: link.href, inView: true })));
  }, [links]);

  const currentLink = obs.find((link) => link.inView);

  return (
    <>
      <Heading>On this page</Heading>
      <menu className="mt-2 flex flex-col gap-1.5 pl-1">
        {links.map((link) => (
          <li key={link.href} style={{ paddingLeft: (link.level - 1) * 8 }}>
            <Link
              href={link.href}
              className={clsx(
                "text-sm font-medium text-zinc-500 hover:text-cyan-400 focus-visible:text-cyan-400",
                { "!text-cyan-400": currentLink?.name === link.href },
              )}
            >
              {link.textContent}
            </Link>
          </li>
        ))}
      </menu>
      <Divider className="my-5 !border-zinc-800" />
      <div className="flex flex-col gap-1.5 pl-1">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          Edit this page on GitHub
        </Link>

        <Link
          href="#"
          className="text-sm font-medium text-zinc-500 hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          Scroll to top ↑
        </Link>
      </div>
    </>
  );
};
