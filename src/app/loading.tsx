import { HeroHeader } from "@/components/hero-header/feature-hero-header";
import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";

export default function Loading() {
  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <HeroHeader />

      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-10">
        <div className="flex flex-col gap-5">
          <Heading>Raw Headers 🛸</Heading>
          <p className="text-sm text-zinc-300">
            Your domain is currently being scanned. Please hold on for a moment,
            and we will provide the search results shortly.
          </p>

          <div className="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-2">
            <div className="h-6 w-2/3 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-1/3 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-5/6 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-7/12 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-2/3 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-3/12 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-2/3 animate-pulse rounded bg-zinc-800"></div>
            <div className="h-6 w-7/12 animate-pulse rounded bg-zinc-800"></div>
          </div>
        </div>
        <Divider />
        <PopularHeadersList />
      </div>
    </main>
  );
}
