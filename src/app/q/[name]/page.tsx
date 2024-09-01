import { GetRaportDetails } from "@/components/get-raport-details/feature-get-raport-details";
import { QueryHeader } from "@/components/query-header/feature-query-header";
import { RaportDetails } from "@/components/raport-details/feature-raport-details";
import { Divider } from "@/shared/ui/divider/divider";
import axios from "axios";

interface IDomainDetailsPage {
  params: {
    name: string;
  };
}

export default async function DomainDetailsPage({
  params,
}: IDomainDetailsPage) {
  let headers: Params = {};

  try {
    const data = await axios.get(`https://${params.name}`, {
      maxRedirects: 10,
    });

    headers = data.headers as Params;
  } catch (error) {
    if (params.name) {
      throw new Error("Error fetching headers");
    }
  }

  const code = `\`\`\`json showLineNumbers
${JSON.stringify(headers, null, 4)}`;

  return (
    <main className="flex flex-col gap-32 pb-32 pt-64">
      <QueryHeader />

      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-10">
        <GetRaportDetails code={code} headers={headers} />
        <Divider />
        <RaportDetails headers={headers} />
      </div>
    </main>
  );
}
