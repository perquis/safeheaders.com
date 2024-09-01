"use client";

import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { PostsList } from "@/components/posts-list/feature-posts-list";
import { posts } from "@/data/mock/posts";
import { Divider } from "@/shared/ui/divider/divider";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Error() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <h1 className="text-5xl font-bold">Domain not found...</h1>
        <p className="text-center">
          We&lsquo;re sorry, but this domain:{" "}
          <b className="text-rose-500 underline">{searchParams.get("q")}</b>{" "}
          does not exist in the <b>global DNS registry</b>, so we are unable to
          generate a report for you.
        </p>

        <Link
          href="/"
          className="flex gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition-transform duration-200 hover:opacity-90 active:scale-95 active:opacity-90"
          onClick={() => {
            router.push(pathname);
            revalidatePath(pathname);
          }}
        >
          Return
        </Link>
      </div>

      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-10">
        <PopularHeadersList />
        <Divider />
        <PostsList posts={posts} />
      </div>
    </main>
  );
}
