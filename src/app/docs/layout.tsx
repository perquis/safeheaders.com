import { Leftbar } from "@/app/docs/leftbar";
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
    <main
      className="mx-auto grid max-w-screen-xl gap-5 py-16"
      style={{ gridTemplateColumns: "240px 1fr 1fr 240px" }}
    >
      <div>
        <div className="sticky left-0 top-5 flex flex-col gap-5">
          <Leftbar docsTree={docsTree} />
        </div>
      </div>
      <div className="col-start-2 col-end-4 flex flex-col gap-5">
        {children}
      </div>
      <div className="flex flex-col gap-2">
        <div className="sticky left-0 top-5">
          <Rightbar links={links} />
        </div>
      </div>
    </main>
  );
}
