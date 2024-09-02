import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

import expoDark from "./src/shared/utils/highlights/expo-dark.json" assert { type: "json" };

const parseToTheme = (theme) => JSON.parse(JSON.stringify(theme));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote", "shiki", "geist"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkParse, remarkRehype],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [
        rehypePrettyCode,
        {
          filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
          theme: parseToTheme(expoDark),
          keepBackground: true,
          tokensMap: {
            fn: "entity.name.function",
          },
        },
      ],
      rehypeStringify,
    ],
  },
});

export default withMDX(nextConfig);
