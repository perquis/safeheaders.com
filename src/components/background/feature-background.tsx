/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Dots } from "@/assets/icons/dots";

export const Background = () => {
  return (
    <div
      style={{ aspectRatio: "1938 / 460" }}
      className="absolute left-0 top-0 -z-10 w-full bg-gradient-to-t from-zinc-950 to-zinc-900"
    >
      <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
        <img src="lights.png" className="w-full" />
      </div>
      <Dots />
    </div>
  );
};
