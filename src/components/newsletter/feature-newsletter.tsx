"use client";

export const Newsletter = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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

        <form className="relative rounded-lg bg-zinc-900" onSubmit={onSubmit}>
          <input
            type="email"
            className="bg-transparent px-3 py-2 text-xs !outline-none placeholder:text-zinc-400"
            placeholder="example@gmail.com"
          />

          <button className="absolute right-1 top-1 bg-black px-1.5 py-1 text-xs font-medium text-zinc-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
