import { FC, PropsWithChildren } from "react";

export const Badge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="block rounded-md bg-cyan-950/50 px-2 py-1 text-xs font-medium text-cyan-400">
      {children}
    </span>
  );
};
