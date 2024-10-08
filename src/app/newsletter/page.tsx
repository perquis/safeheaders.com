"use client";

import { Badge } from "@/shared/ui/badge/badge";
import Link from "next/link";
import { useState } from "react";

export default function NewsletterUnsubscribePage() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const message = formData.get("message") as string;

    fetch("/api/feedback/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  if (status === "success") {
    return (
      <div className="flex h-[calc(100vh-56px)] items-center justify-center px-5 py-10 lg:px-10">
        <div className="flex max-w-screen-sm flex-col items-start gap-5">
          <h1 className="text-2xl font-bold">Thank you for your feedback!</h1>
          <p className="text-sm text-zinc-200">
            Your feedback has been <b>submitted</b> successfully. We appreciate
            you taking the time to share your thoughts with us.
          </p>
          <Link
            href="/"
            className="text-sm underline hover:text-cyan-400 hover:no-underline focus-visible:text-cyan-400 focus-visible:no-underline"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-5 py-24 lg:px-10">
      <div className="flex max-w-screen-sm flex-col gap-5">
        <h1 className="text-2xl font-bold">We&lsquo;re sorry to see you go.</h1>
        <p className="text-sm text-zinc-200">
          You’ve been <Badge color="rose">unsubscribed</Badge> from our
          newsletter, but we hope to <b>see you back</b> someday.
        </p>
        <p className="text-sm text-zinc-200">
          Before you go, could you tell us why you decided to unsubscribe? Your
          feedback would be incredibly valuable to us.
        </p>

        <form className="flex flex-col items-end gap-5" onSubmit={onSubmit}>
          <textarea
            className="min-h-64 w-full rounded-lg bg-zinc-900 px-3 py-2 text-xs !outline-none placeholder:text-zinc-400"
            placeholder="Your feedback..."
            minLength={10}
            maxLength={512}
            name="message"
            id="message"
            required
          />
          {status === "error" && (
            <div className="w-full text-xs text-rose-500">
              The message wasn&lsquo;t sent. Please try again later.
            </div>
          )}
          <button className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition-transform duration-200 hover:opacity-90 active:scale-95 active:opacity-90">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
