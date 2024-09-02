"use client";

import { Leftbar } from "@/app/docs/leftbar";
import { ArrowLeft } from "@/assets/icons/arrow-left";
import { useOpen } from "@/shared/hooks/use-open";
import clsx from "clsx";
import { FC, useEffect } from "react";

interface IMenu {
  docsTree: Record<string, string[]>;
}

export const Menu: FC<IMenu> = ({ docsTree }) => {
  const [isOpen, [, , toggle]] = useOpen();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isOpen) {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className="relative z-10 -mx-5 block w-[calc(100%+40px)] border-b border-zinc-800 px-5 py-5 text-left font-medium sm:hidden"
        onClick={toggle}
      >
        Menu{" "}
        <ArrowLeft
          width={24}
          height={24}
          className={clsx(
            "absolute right-5 top-5 transition-transform duration-200 ease-in-out",
            { "-rotate-90": isOpen },
          )}
        />
      </button>
      {isOpen && (
        <div className="fixed left-0 top-[120px] flex h-[calc(100vh-120px)] w-full flex-col gap-5 overflow-y-auto bg-zinc-950 p-5">
          <Leftbar docsTree={docsTree} />
        </div>
      )}
      <div className="sticky left-0 top-5 hidden flex-col gap-5 sm:flex">
        <Leftbar docsTree={docsTree} />
      </div>
    </div>
  );
};
