import fs from "fs";
import GithubSlugger from "github-slugger";
import path from "path";

const slugger = new GithubSlugger();

export const extractMdHeadings = (markdown: string) => {
  const headings = markdown.match(/^#+\s.+/gm) ?? [];
  slugger.reset();

  const links = headings.map((heading) => {
    const textContent = heading.replace(/^#+\s/, ""),
      level = heading.match(/^#+/)?.[0].length!,
      href = "#" + slugger.slug(textContent);

    return { textContent, href, level };
  });

  return links;
};

export const getMarkdown = (pathname: string) => {
  const markdown = fs.readFileSync(
    `${path.resolve()}/src/app/${pathname}`,
    "utf-8",
  );

  return markdown;
};
