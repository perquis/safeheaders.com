import { Logo } from "@/assets/icons/logo";
import { List } from "@/components/footer/ui-list";
import { Newsletter } from "@/components/newsletter/feature-newsletter";
import { readDocsTree } from "@/shared/utils";
import Link from "next/link";

export const Footer = async () => {
  const docsTree = await readDocsTree();

  return (
    <div className="relative overflow-hidden">
      <div className="border-t border-zinc-800 bg-zinc-950/10 px-5 backdrop-blur-3xl sm:px-12 md:px-24 lg:px-48 xl:px-64 2xl:px-80">
        <footer className="z-50 flex gap-10 pb-16 pt-14">
          <div className="flex w-64 items-start justify-start">
            <Link href="/">
              <Logo />
            </Link>
          </div>

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

          <Newsletter />
        </footer>
        <div className="py-5 text-xs text-zinc-400">
          <span>@ 2024 - Safe Headers</span>
        </div>
      </div>
      <div className="absolute -top-32 right-64 -z-10 h-40 w-80 rounded-full bg-cyan-400/35" />
    </div>
  );
};
