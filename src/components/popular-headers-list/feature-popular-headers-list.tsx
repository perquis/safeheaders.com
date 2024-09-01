import { Heading } from "@/shared/ui/heading/heading";
import { UnorderedList } from "@/shared/ui/unordered-list/unordered-list";

export const PopularHeadersList = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading>Popular Security Headers 🔥</Heading>

      <UnorderedList
        list={[
          {
            label: "Access Control Allow Origin",
            content:
              "This is a very lax CORS policy but the current site is a whitelisted CDN, so this is expected.",
          },
          {
            label: "Content Security Policy",
            content:
              "Content Security Policy is an effective measure to protect your site from XSS attacks. By whitelisting sources of approved content, you can prevent the browser from loading malicious assets. Analyse this policy in more detail.",
          },
          {
            label: "Strict Transport Security",
            content:
              "HTTP Strict Transport Security is an excellent feature to support on your site and strengthens your implementation of TLS by getting the User Agent to enforce the use of HTTPS.",
          },
        ]}
      />
    </div>
  );
};
