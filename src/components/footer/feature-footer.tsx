import { Logo } from "@/assets/icons/logo";
import {
  aboutHeaders,
  frameworks,
  resources,
  security,
} from "@/components/footer/data-links";
import { List } from "@/components/footer/ui-list";
import { Newsletter } from "@/components/newsletter/feature-newsletter";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="border-t border-zinc-800 bg-zinc-950/10 px-5 backdrop-blur-3xl sm:px-12 md:px-24 lg:px-48 xl:px-64 2xl:px-80">
        <footer className="z-50 flex gap-10 pb-16 pt-14">
          <div className="flex w-64 items-start justify-start">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <List title="About Headers" items={aboutHeaders} />
          <List title="Solutions for" items={frameworks} />
          <List title="Resources" items={resources} />
          <List title="Security" items={security} />

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
