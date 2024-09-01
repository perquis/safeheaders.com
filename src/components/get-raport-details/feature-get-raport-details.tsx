import Code from "@/shared/ui/code/code";
import { Heading } from "@/shared/ui/heading/heading";
import clsx from "clsx";
import { FC } from "react";
import { match } from "ts-pattern";

interface IGetRaportDetails {
  code: string;
  headers: Params;
}

export const GetRaportDetails: FC<IGetRaportDetails> = ({ code, headers }) => {
  const essentialHeaders = [
    "content-security-policy",
    "strict-transport-security",
    "referrer-policy",
    "x-frame-options",
    "x-content-type-options",
    "permissions-policy",
  ];

  const grades = essentialHeaders
    .map((header) => {
      return header in headers;
    })
    .filter(Boolean).length;

  const statusGrade = match(grades)
    .when(
      (x) => x >= 0 && x <= 1,
      () => "not properly secured... 👀",
    )
    .when(
      (x) => x >= 2 && x <= 5,
      () => "partially secured... 🕵🏻‍♂️",
    )
    .when(
      (x) => x === 6,
      () => "properly secured! 🎉",
    )
    .run();

  return (
    <div className="flex flex-col gap-5">
      <Heading>Raw Headers 🛸</Heading>
      <p className="text-sm text-zinc-300">
        Here is the response received from the server. Below, you will find the
        complete list of applied headers. Please review them and check for any
        missing elements.
      </p>
      <p
        className={clsx("text-sm", {
          "text-rose-500": grades >= 0 && grades <= 1,
          "text-amber-500": grades >= 2 && grades <= 5,
          "text-emerald-500": grades === 6,
        })}
      >
        The specified domain is {statusGrade}
      </p>
      <Code code={code} />
    </div>
  );
};
