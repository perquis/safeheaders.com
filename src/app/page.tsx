import { HeroHeader } from "@/components/hero-header/feature-hero-header";
import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { PostsList } from "@/components/posts-list/feature-posts-list";
import { Divider } from "@/shared/ui/divider/divider";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <HeroHeader />
      <div className="mx-auto flex max-w-screen-sm flex-col gap-10">
        <PopularHeadersList />
        <Divider />
        <PostsList
          posts={[
            {
              href: "/",
              title: "What is a Content Security Policy?",
              description:
                "When protecting web applications, companies often use multiple technologies to create a layered defense.",
            },
            {
              href: "/",
              title: "What is DOM-based XSS?",
              description:
                "A DOM-based cross-site scripting (XSS) attack happens when a threat actor modifies the document object model (DOM) environment in the victim’s browser.",
            },
          ]}
        />
      </div>
    </main>
  );
}
