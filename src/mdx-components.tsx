import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold" {...props} />,
    h4: (props) => <h4 className="text-lg font-bold" {...props} />,
    a: (props) => (
      <a className="hover:underline focus-visible:underline" {...props} />
    ),
    p: (props) => <p className="text-base text-zinc-200" {...props} />,
    ...components,
  };
}
