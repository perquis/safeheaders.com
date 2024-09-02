import NextLink from "next/link";
import { ComponentProps, FC } from "react";

export const Link: FC<ComponentProps<typeof NextLink>> = (props) => {
  return (
    <NextLink
      className="font-medium text-cyan-400 hover:underline focus-visible:underline"
      {...props}
    >
      {props.children}
    </NextLink>
  );
};
