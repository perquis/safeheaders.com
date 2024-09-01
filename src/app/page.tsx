import { HeroHeader } from "@/components/hero-header/feature-hero-header";
import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { PostsList } from "@/components/posts-list/feature-posts-list";
import { posts } from "@/data/mock/posts";
import Code from "@/shared/ui/code/code";
import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";
import axios from "axios";

interface IHome {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: IHome) {
  const query = searchParams.q as string | undefined;
  const { headers } = await axios.get(`https://${query}`, {
    maxRedirects: 10,
  });

  const details = {
    date: headers.date,
    "content-type": headers["content-type"],
    "transfer-encoding": headers["transfer-encoding"],
    connection: headers.connection,
    vary: headers.vary,
  };

  for (const key in details) {
    delete headers[key];
  }

  const code = `\`\`\`json showLineNumbers
${JSON.stringify(headers, null, 4)}`;

  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <HeroHeader />

      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-10">
        {query ? (
          <>
            <div className="flex flex-col gap-5">
              <Heading>Raw Headers 🛸</Heading>
              <Code code={code} />
            </div>
          </>
        ) : (
          <>
            <PopularHeadersList />
            <Divider />
            <PostsList posts={posts} />
          </>
        )}
      </div>
    </main>
  );
}
