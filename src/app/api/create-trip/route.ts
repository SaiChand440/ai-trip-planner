import * as openai from "../../../service/openai";
import output_schema from "../../../tools/output_schema.json";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

interface IRequest {
  destination: string;
  date: {
    from: Date;
    to: Date;
  };
  usertype: "solo" | "couple" | "friends" | "family";
  budget:
    | "<500"
    | "500-1000"
    | "1000-2000"
    | "2000-5000"
    | "5000-10000"
    | ">10000";
}

export async function POST(request: Request) {
  const { destination, date:{from,to}, usertype, budget } : IRequest = await request.json();

  if (!destination || !from || !to || !usertype || !budget) {
    return Response.json({success: false, error: "some of the fields are missing"},{
        status: 400,
        statusText: 'fail'
    })
  }

  let system_prompt =
    `You are a helpful travel planner specializing in ${destination} and designed to output json. ` +
    `Your output is called as an API. ` +
    `Create valid json complying to the schema. ` +
    `Create an itinerary starting from ${from} and ending on ${to}, include activities for all days including the start and end date` +
    `This is a ${usertype} trip. ` +
    `The total budget of the trip should be in the range of ${budget}, split this into each day expenses based on the itinerary` +
    `and json output schema` +
    JSON.stringify(output_schema, null, 2);

  let messages: ChatCompletionMessageParam[] = [
    { role: "system", content: system_prompt },
    { role: "user", content: `Create an itinerary to ${destination}` },
  ];

  const response = await openai.chat({
    messages,
  });

  const output = response.message.content
    ?.replace(/\\/g, "")
    .replace(/\n/g, "")!;

  return new Response(
    JSON.stringify({
      status: "ok",
      data : JSON.parse(output),
    }),
    {
      status: 200,
    }
  );
}
