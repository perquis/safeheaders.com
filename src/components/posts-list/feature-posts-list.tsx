import { Card } from "@/shared/ui/card/card";
import { Heading } from "@/shared/ui/heading/heading";
import Link from "next/link";
import { ComponentProps, FC } from "react";

interface IPostsList {
  posts: ComponentProps<typeof Card>[];
}

export const PostsList: FC<IPostsList> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <Heading>Discover posts 🔎</Heading>

        <Link
          href="/"
          className="text-sm transition-colors duration-200 ease-in-out hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          View more →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </div>
  );
};
