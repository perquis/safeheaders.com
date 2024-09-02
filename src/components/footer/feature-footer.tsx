import { Logo } from "@/assets/icons/logo";
import { List } from "@/components/footer/ui-list";
import { Newsletter } from "@/components/newsletter/feature-newsletter";
import { readDocsTree } from "@/shared/utils";
import Link from "next/link";

export const Footer = async () => {
  const docsTree = await readDocsTree();

  return (
    <div className="relative overflow-hidden">
      <div className="border-t border-zinc-800 bg-zinc-950/10 px-5 backdrop-blur-3xl lg:px-10">
        <footer className="z-50 mx-auto flex max-w-screen-xl flex-wrap gap-10 pb-16 pt-14">
          <div className="flex w-64 flex-1 items-start justify-start">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex flex-wrap gap-10">
            {Object.entries(docsTree).map(([key, items]) => {
              return (
                <List
                  key={key}
                  title={key.replaceAll("-", " ")}
                  items={items.map((v) => ({
                    name: v.replaceAll("-", " "),
                    href: v,
                  }))}
                />
              );
            })}
          </div>

          <Newsletter />

          <div className="w-full py-5 text-xs text-zinc-400">
            <span>@ 2024 - Safe Headers</span>
          </div>
        </footer>
      </div>
      <div className="absolute -top-32 right-64 -z-10 h-40 w-80 rounded-full bg-cyan-400/35" />
    </div>
  );
};
