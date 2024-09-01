import { PostsList } from "@/components/posts-list/feature-posts-list";
import { getRaport } from "@/components/raport-details/utils-get-raport";
import { posts } from "@/data/mock/posts";
import { Divider } from "@/shared/ui/divider/divider";
import { Heading } from "@/shared/ui/heading/heading";
import { UnorderedList } from "@/shared/ui/unordered-list/unordered-list";
import Link from "next/link";
import { FC } from "react";

interface IRaportDetails {
  headers: {
    [key: string]: string | string[] | unknown;
  };
}

export const RaportDetails: FC<IRaportDetails> = ({ headers }) => {
  const raport = getRaport(headers);

  if (!raport.length) {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <Heading>Great job! 🎉</Heading>
          <p className="text-sm text-zinc-300">
            Thanks to your meticulous approach, perfection has been achieved –{" "}
            <b>no missing HTTP headers</b> were identified that could further
            enhance the security of the web application. <br />
            <br />
            This means <b>all security standards have been fully met</b>.
          </p>
        </div>

        <Divider />

        <PostsList posts={posts} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <Heading>Raport Details 🔥</Heading>

        <Link
          href="/docs"
          className="text-sm transition-colors duration-200 ease-in-out hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          Learn more →
        </Link>
      </div>
      <p className="text-sm text-zinc-300">
        Remember, these are only suggested headers. Each web application is
        different, so while certain headers may be necessary for one site, they
        might not be required for another.
      </p>

      <UnorderedList list={raport} />
    </div>
  );
};
