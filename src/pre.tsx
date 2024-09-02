"use client";

import CopyToClipboard from "@/shared/ui/copy-to-clipboard/copy-to-clipboard";
import { ComponentProps, useRef } from "react";

export const Pre = (props: ComponentProps<"pre">) => {
  const preRef = useRef<HTMLPreElement>(null);
  const textContent = preRef.current?.textContent!;

  return (
    <div className="relative">
      <pre {...props} ref={preRef} />
      <CopyToClipboard code={textContent} />
    </div>
  );
};
