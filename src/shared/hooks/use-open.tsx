"use client";

import { useState } from "react";

export const useOpen = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return [isOpen, [open, close, toggle]] as const;
};
