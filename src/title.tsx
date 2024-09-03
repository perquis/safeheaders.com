/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useObserver } from "@/app/docs/observer";
import clsx from "clsx";
import { ComponentProps, FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Title: FC<ComponentProps<"h1"> & { level?: number }> = ({
  children,
  level = 2,
  className,
  ...props
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements as "h1";
  const { updateObsList, obs } = useObserver();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    updateObsList(`#${props.id}`, inView);
  }, [inView]);

  return (
    <Tag className={clsx("font-bold", className)} {...props} ref={ref}>
      {children}
    </Tag>
  );
};
