"use client";

import { Search } from "@/assets/icons/search";
import { useOpen } from "@/shared/hooks/use-open";
import { useParams, useRouter } from "next/navigation";

const regex = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export const SearchForDomains = () => {
  const params = useParams();
  const router = useRouter();

  const [error, [activeError, closeError]] = useOpen();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeError();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search")?.toString().toLowerCase() as string;

    if (!regex.test(search)) {
      activeError();
      return;
    }

    router.push(`/q/${search}`);
  };

  return (
    <div className="flex flex-col gap-1">
      <form
        className="flex items-center rounded-lg bg-zinc-900 px-3"
        onSubmit={onSubmit}
      >
        <span className="text-zinc-400">
          <Search />
        </span>
        <input
          type="search"
          name="search"
          id="search"
          defaultValue={params.name}
          className="bg-transparent px-3 py-2.5 text-sm !outline-none placeholder:text-zinc-500"
          placeholder="example.com"
        />

        {/* <div className={clsx("flex items-center gap-1 text-zinc-500")}>
          <Command />+ K
        </div> */}
      </form>
      {error && (
        <span className="text-xs text-red-500">This domain is invalid.</span>
      )}
    </div>
  );
};
