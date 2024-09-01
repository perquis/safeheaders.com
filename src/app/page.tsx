import { HeroHeader } from "@/components/hero-header/feature-hero-header";
import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { PostsList } from "@/components/posts-list/feature-posts-list";
import { RaportDetails } from "@/components/raport-details/feature-raport-details";
import { posts } from "@/data/mock/posts";
import Code from "@/shared/ui/code/code";
import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";
import axios from "axios";

interface Params {
  [key: string]: string | string[] | undefined;
}

interface IHome {
  searchParams: Params;
}

export default async function Home({ searchParams }: IHome) {
  const query = searchParams.q as string | undefined;
  let headers: Params = {};

  try {
    const data = await axios.get(`https://${query}`, {
      maxRedirects: 10,
    });

    headers = data.headers as Params;
  } catch (error) {
    if (query) {
      throw new Error("Error fetching headers");
    }
  }

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
            <Divider />
            <RaportDetails headers={headers} />
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
