import { HeroHeader } from "@/components/hero-header/feature-hero-header";
import { PopularHeadersList } from "@/components/popular-headers-list/feature-popular-headers-list";
import { PostsList } from "@/components/posts-list/feature-posts-list";
import { RaportDetails } from "@/components/raport-details/feature-raport-details";
import { posts } from "@/data/mock/posts";
import Code from "@/shared/ui/code/code";
import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";
import axios from "axios";
import clsx from "clsx";
import { match } from "ts-pattern";

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

  const essentialHeaders = [
    "content-security-policy",
    "strict-transport-security",
    "referrer-policy",
    "x-frame-options",
    "x-content-type-options",
    "permissions-policy",
  ];

  const grades = essentialHeaders
    .map((header) => {
      return header in headers;
    })
    .filter(Boolean).length;

  const statusGrade = match(grades)
    .when(
      (x) => x >= 0 && x <= 1,
      () => "not properly secured... 👀",
    )
    .when(
      (x) => x >= 2 && x <= 5,
      () => "partially secured... 🕵🏻‍♂️",
    )
    .when(
      (x) => x === 6,
      () => "properly secured! 🎉",
    )
    .run();

  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <HeroHeader />

      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-10">
        {query ? (
          <>
            <div className="flex flex-col gap-5">
              <Heading>Raw Headers 🛸</Heading>
              <p className="text-sm text-zinc-300">
                Here is the response received from the server. Below, you will
                find the complete list of applied headers. Please review them
                and check for any missing elements.
              </p>
              <Code code={code} />
              <p
                className={clsx("text-sm", {
                  "text-rose-500": grades >= 0 && grades <= 1,
                  "text-amber-500": grades >= 2 && grades <= 5,
                  "text-emerald-500": grades === 6,
                })}
              >
                The specified domain is {statusGrade}
              </p>
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
