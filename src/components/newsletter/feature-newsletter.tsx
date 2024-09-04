"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { match } from "ts-pattern";

export const Newsletter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setStatus("loading");
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }).then(() => setStatus("success"));
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    e.currentTarget.reset();
    inputRef.current?.blur();
    setTimeout(() => setStatus(null), 5000);
  };

  const message = match(status)
    .with("loading", () => "Subscribing...")
    .with("success", () => "Subscribed!")
    .with("error", () => "Error!")
    .otherwise(() => null);

  const color = match(status)
    .with("loading", () => "text-cyan-400")
    .with("success", () => "text-emerald-400")
    .with("error", () => "text-red-500")
    .otherwise(() => "hidden");

  return (
    <div className="flex flex-1 flex-col gap-2.5">
      <b className="block py-1.5 text-sm font-medium">
        Subscribe to our newsletter
      </b>

      <div className="flex flex-col gap-3">
        <p className="text-xs text-zinc-500">
          Stay updated on new guides, case studies and upcoming headers that you
          should be aware of it.
        </p>

        <div className="flex flex-col gap-1">
          <form
            className={clsx("relative rounded-lg bg-zinc-900", {
              "pointer-events-none cursor-not-allowed opacity-50":
                status !== null,
            })}
            onSubmit={onSubmit}
          >
            <input
              type="email"
              name="email"
              id="email"
              required
              ref={inputRef}
              className="bg-transparent px-3 py-2 text-xs !outline-none placeholder:text-zinc-400"
              placeholder="example@gmail.com"
            />

            <button className="absolute right-1 top-1 bg-black px-1.5 py-1 text-xs font-medium text-zinc-300">
              Subscribe
            </button>
          </form>

          {message && <span className={clsx("text-xs", color)}>{message}</span>}
        </div>
      </div>
    </div>
  );
};
