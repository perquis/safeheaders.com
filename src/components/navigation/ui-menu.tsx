import { ExternalLink } from "@/assets/icons/external-link";
import { links } from "@/components/navigation/data-links";
import { ItemLink } from "@/components/navigation/ui-item-link";

export const Menu = () => {
  return (
    <menu className="flex gap-1">
      {links.map(({ href, label, external }) => (
        <ItemLink key={label} href={href}>
          {label}
          {external && <ExternalLink />}
        </ItemLink>
      ))}
    </menu>
  );
};
