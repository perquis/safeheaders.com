import { Menu } from "@/app/docs/menu";
import { Observer } from "@/app/docs/observer";
import { Rightbar } from "@/app/docs/rightbar";
import { extractMdHeadings, getMarkdown, readDocsTree } from "@/shared/utils";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";

export default async function DocsLayout({ children }: PropsWithChildren) {
  const headersList = headers();
  const path = headersList.get("x-current-path");

  const markdown = getMarkdown(`${path}/page.mdx`);
  const links = extractMdHeadings(markdown);

  const docsTree = await readDocsTree();

  return (
    <main className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 pb-16 sm:grid-cols-layout-tablet sm:gap-5 sm:py-16 lg:grid-cols-layout-desktop">
      <Menu docsTree={docsTree} />
      <Observer>
        <div className="flex flex-col gap-5 sm:col-start-2 sm:col-end-4">
          {children}
        </div>
        <div className="hidden flex-col gap-2 lg:flex">
          <div className="sticky left-0 top-5">
            <Rightbar links={links} />
          </div>
        </div>
      </Observer>
    </main>
  );
}
