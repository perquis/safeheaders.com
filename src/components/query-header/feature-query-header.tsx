/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { SearchForDomains } from "@/components/search-for-domains/feature-search-for-domains";
import { Badge } from "@/shared/ui/badge/badge";
import Link from "next/link";

export const QueryHeader = () => {
  return (
    <div className="relative flex flex-col items-center gap-10">
      <img className="absolute -top-8 left-24" src="/key-dynamic-color.png" />
      <img
        className="absolute -bottom-16 right-32"
        src="/key-dynamic-premium.png"
      />

      <div className="flex flex-col items-center gap-5">
        <Link href="/docs">
          <Badge>Learn how to build more secure sites 🔥</Badge>
        </Link>
        <div className="flex max-w-4xl flex-col items-center gap-6">
          <h1 className="text-center text-5xl font-bold">
            Lead in Cyber <span className="text-cyan-400">Defense</span>{" "}
            Strategies
          </h1>
          <p className="text-center">
            Discover new ways to secure your domain now by implementing{" "}
            <b>unique</b> HTTP <br />
            headers. This approach can help you <b>prevent attacks</b> by up to
            70%.
          </p>
        </div>
      </div>

      <SearchForDomains />
    </div>
  );
};
