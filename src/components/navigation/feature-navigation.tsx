"use client";

import { Logo } from "@/assets/icons/logo";
import { Menu } from "@/components/navigation/ui-menu";
import { RedirectToGitHubRepo } from "@/components/navigation/ui-redirect-to-github-repo";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "flex h-14 items-center justify-between border-zinc-800 px-5",
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
      </div>
    </nav>
  );
};
