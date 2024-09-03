import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { match } from "ts-pattern";

type Color =
  | "zinc"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

interface IBadge {
  color?: Color;
}

export const Badge: FC<PropsWithChildren & IBadge> = ({
  children,
  color = "cyan",
}) => {
  const colorClass = match(color)
    .with("zinc", () => "bg-zinc-950/50 text-zinc-400")
    .with("red", () => "bg-red-950/50 text-red-400")
    .with("orange", () => "bg-orange-950/50 text-orange-400")
    .with("amber", () => "bg-amber-950/50 text-amber-400")
    .with("yellow", () => "bg-yellow-950/50 text-yellow-400")
    .with("lime", () => "bg-lime-950/50 text-lime-400")
    .with("green", () => "bg-green-950/50 text-green-400")
    .with("emerald", () => "bg-emerald-950/50 text-emerald-400")
    .with("teal", () => "bg-teal-950/50 text-teal-400")
    .with("cyan", () => "bg-cyan-950/50 text-cyan-400")
    .with("sky", () => "bg-sky-950/50 text-sky-400")
    .with("blue", () => "bg-blue-950/50 text-blue-400")
    .with("indigo", () => "bg-indigo-950/50 text-indigo-400")
    .with("violet", () => "bg-violet-950/50 text-violet-400")
    .with("purple", () => "bg-purple-950/50 text-purple-400")
    .with("fuchsia", () => "bg-fuchsia-950/50 text-fuchsia-400")
    .with("pink", () => "bg-pink-950/50 text-pink-400")
    .with("rose", () => "bg-rose-950/50 text-rose-400")
    .run();

  return (
    <span
      className={clsx(
        "inline-block rounded-md px-2 py-1 text-xs font-medium",
        colorClass,
      )}
    >
      {children}
    </span>
  );
};
