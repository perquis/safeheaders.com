"use client";

import clsx from "clsx";
import { useEffect } from "react";

import { Checkmark } from "@/assets/icons/checkmark";
import { Clipboard } from "@/assets/icons/clipboard";
import { useOpen } from "@/shared/hooks/use-open";

interface ICopyToClipboard {
  code: string;
}

export default function CopyToClipboard({ code }: ICopyToClipboard) {
  const [isCopied, [copied, clear]] = useOpen();
  const Icon = isCopied ? Checkmark : Clipboard;

  const copy = () => {
    const container = document.createElement("div");
    container.innerHTML = code;
    const text = container.textContent!;

    navigator.clipboard.writeText(text);
    copied();
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        clear();
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied, clear]);

  return (
    <button
      className={clsx(
        "rounded p-2 text-zinc-400 transition-colors duration-100 ease-in-out hover:text-zinc-500 focus-visible:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-500 dark:focus-visible:text-zinc-500",
        isCopied && "!text-cyan-400",
        "disabled:cursor-not-allowed",
        "absolute right-2 top-2",
      )}
      onClick={copy}
      disabled={isCopied}
    >
      <Icon width={20} height={20} />
    </button>
  );
}
