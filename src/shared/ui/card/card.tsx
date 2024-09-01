import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC } from "react";

interface IPostsList {
  image?: Pick<ComponentProps<typeof Image>, "src" | "alt">;
  href: string;
  title: string;
  description: string;
}

export const Card: FC<IPostsList> = ({ image, href, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={href}>
        <div className="relative aspect-video overflow-hidden rounded-xl">
          {image ? (
            <Image src={image.src} alt={image.alt} fill objectFit="cover" />
          ) : (
            <div className="h-full w-full animate-pulse bg-zinc-900" />
          )}
        </div>
      </Link>

      <div className="flex flex-col items-start gap-1">
        <Link
          href={href}
          className="transition-colors duration-200 ease-in-out hover:text-cyan-400 hover:underline focus-visible:text-cyan-400 focus-visible:underline"
        >
          <h3 className="text-lg font-bold">{title}</h3>
        </Link>
        <p className="line-clamp-2 text-sm text-zinc-300">{description}</p>
      </div>
    </div>
  );
};
