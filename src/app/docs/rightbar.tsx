import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";
import { extractMdHeadings } from "@/shared/utils";
import Link from "next/link";
import { FC } from "react";

interface IRightbar {
  links: ReturnType<typeof extractMdHeadings>;
}

export const Rightbar: FC<IRightbar> = ({ links }) => {
  return (
    <>
      <Heading>On this page</Heading>
      <menu className="mt-2 flex flex-col gap-1.5 pl-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-zinc-500 hover:text-cyan-400 focus-visible:text-cyan-400"
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
