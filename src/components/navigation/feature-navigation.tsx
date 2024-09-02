"use client";

import { Logo } from "@/assets/icons/logo";
import { links } from "@/components/navigation/data-links";
import { Menu } from "@/components/navigation/ui-menu";
import { RedirectToGitHubRepo } from "@/components/navigation/ui-redirect-to-github-repo";
import { useOpen } from "@/shared/hooks/use-open";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, [, , toggle]] = useOpen();

  return (
    <nav
      className={clsx(
        "flex h-14 items-center justify-between border-zinc-800 px-5 lg:px-10",
        pathname !== "/" && !pathname.includes("/q") && "border-b",
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-7">
          <Link href="/">
            <Logo />
          </Link>

          <Menu />
        </div>

        <RedirectToGitHubRepo />

        <div className="relative block lg:hidden">
          <button
            className="relative flex h-5 w-5 items-center justify-center"
            onClick={toggle}
          >
            <div
              className={clsx(
                "absolute h-[1px] w-full translate-y-1 rounded-sm bg-white transition-transform duration-200 ease-in-out",
                { "translate-y-0 rotate-45": isOpen },
              )}
            />
            <div
              className={clsx(
                "absolute h-[1px] w-full -translate-y-1 rounded-sm bg-white transition-transform duration-200 ease-in-out",
                { "translate-y-0 -rotate-45": isOpen },
              )}
            />
          </button>

          <div
            className={clsx(
              "absolute right-0 top-[calc(100%+16px)] z-50 flex w-64 translate-y-5 flex-col gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1 opacity-0 shadow-md duration-200 ease-in-out",
              { "!translate-y-0 !opacity-100": isOpen },
            )}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-1 text-zinc-500 duration-200 ease-in-out hover:bg-zinc-900 hover:text-zinc-200 focus-visible:bg-zinc-900 focus-visible:text-zinc-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
