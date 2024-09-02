import fs from "fs";
import { promisify } from "util";

const readdir = promisify(fs.readdir);

type DocsTree = Record<string, string[]>;

export const readDocsTree = async () => {
  const list: DocsTree = {};

  try {
    const files = await readdir("src/app/docs");
    const sections = files.filter((file) => !file.includes("."));

    await Promise.all(
      sections.map(async (section) => {
        const links = await readdir(`src/app/docs/${section}`);
        list[section] = links.filter(
          (link) => link !== "page.mdx" && link !== "page.tsx",
        );
      }),
    );

    const sortedList = Object.keys(list).sort((a, b) => a.localeCompare(b));
    const sortedListObj = sortedList.reduce((acc, key) => {
      acc[key] = list[key];
      return acc;
    }, {} as DocsTree);

    return sortedListObj;
  } catch (err) {
    console.error("Error reading directory:", err);
    return list;
  }
};
