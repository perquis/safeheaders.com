import { Pre } from "@/pre";
import { Title } from "@/title";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <Title className="text-4xl font-bold" {...props} />,
    h2: (props) => <Title className="text-2xl font-bold" {...props} />,
    h3: (props) => <Title className="mt-5 text-xl font-bold" {...props} />,
    h4: (props) => <Title className="mt-5 text-lg font-bold" {...props} />,
    a: (props) => (
      <a className="hover:underline focus-visible:underline" {...props} />
    ),
    p: (props) => <p className="text-base text-zinc-200" {...props} />,
    ol: (props) => (
      <ol className="ml-5 flex list-decimal flex-col" {...props} />
    ),
    pre: (props) => <Pre {...props} />,
    ...components,
  };
}
