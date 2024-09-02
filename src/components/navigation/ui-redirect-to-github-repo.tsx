import { GitHub } from "@/assets/icons/github";
import { useRouter } from "next/navigation";

export const RedirectToGitHubRepo = () => {
  const { push } = useRouter();

  return (
    <button
      className="hidden gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition-transform duration-200 hover:opacity-90 active:scale-95 active:opacity-90 lg:flex"
      onClick={() => push("https://github.com/perquis/safeheaders.com")}
    >
      <GitHub />
      <span>GitHub</span>
    </button>
  );
};
