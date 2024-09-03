"use client";

import { Heading } from "@/shared/ui/heading/heading";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect } from "react";

interface ILeftbar {
  docsTree: Record<string, string[]>;
}

export const Leftbar: FC<ILeftbar> = ({ docsTree }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.refresh();
  }, [pathname, router]);

  const splitPath = pathname.split("/");
  const currentDoc = splitPath[splitPath.length - 1];

  return (
    <>
      {Object.entries(docsTree).map(([name, list]) => (
        <div key={name}>
          <Link
            href={`/docs/${name}`}
            className="text-sm font-medium hover:text-cyan-400 focus-visible:text-cyan-400"
          >
            <Heading className="capitalize">
              {name.replaceAll("-", " ")}
            </Heading>
          </Link>
          <menu className="mt-2 flex flex-col gap-1.5 pl-1">
            {list
              .sort((a, b) => a.localeCompare(b))
              .map((link) => (
                <li key={link}>
                  <Link
                    href={`/docs/${name}/${link}`}
                    className={clsx(
                      "text-sm text-zinc-400 hover:text-cyan-400 focus-visible:text-cyan-400",
                      {
                        "!text-cyan-400": currentDoc === link,
                      },
                    )}
                  >
                    {name === "headers" ? link : link.replaceAll("-", " ")}
                  </Link>
                </li>
              ))}
          </menu>
        </div>
      ))}
    </>
  );
};
