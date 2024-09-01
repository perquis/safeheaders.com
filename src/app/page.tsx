import { HeroHeader } from "@/components/hero-header/feature-hero-header";
import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { PostsList } from "@/components/posts-list/feature-posts-list";
import { posts } from "@/data/mock/posts";
import { Divider } from "@/shared/ui/divider/divider";

export default async function Home() {
  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <HeroHeader />

      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-10">
        <PopularHeadersList />
        <Divider />
        <PostsList posts={posts} />
      </div>
    </main>
  );
}
