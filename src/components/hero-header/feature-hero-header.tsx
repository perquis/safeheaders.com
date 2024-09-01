/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { SearchForDomains } from "@/components/search-for-domains/feature-search-for-domains";
import { Badge } from "@/shared/ui/badge/badge";
import Link from "next/link";

export const HeroHeader = () => {
  return (
    <div className="relative flex flex-col items-center gap-10">
      <img className="absolute -top-8 left-24" src="key-dynamic-color.png" />
      <img
        className="absolute -bottom-16 right-32"
        src="key-dynamic-premium.png"
      />

      <div className="flex flex-col items-center gap-5">
        <Link href="/docs">
          <Badge>Learn how to build more secure sites 🔥</Badge>
        </Link>
        <div className="flex max-w-3xl flex-col items-center gap-6">
          <h1 className="text-5xl font-bold">
            Stay Ahead of <span className="text-cyan-400">Security</span> Risks
          </h1>
          <p className="text-center">
            Scan your website to ensure it&lsquo;s secure. This tool checks for{" "}
            <b>
              essential security <br />
              headers
            </b>{" "}
            every modern site should have, identifies{" "}
            <b className="text-cyan-400">missing headers</b>, <br />
            and provides <b>easy-to-follow instructions</b> to fix them.
          </p>
        </div>
      </div>

      <SearchForDomains />
    </div>
  );
};
