import * as openai from "../../../service/openai";
import output_schema from "../../../tools/output_schema.json";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export async function POST(request: Request) {
  const { inquiry } = await request.json();

  console.log("inquiry",inquiry);

  if (!inquiry) {
    return new Response("Bad request", {
      status: 400,
    });
  }

  let system_prompt =
    `You are a helpful travel planner specializing in ${inquiry} and designed to output json.\n` +
    `Your output is to an API.\n` +
    `Create valid json complying to the schema.\n\n`;

  system_prompt +=
    `# today\n` +
    `Today is ${new Date()}.\n\n` +
    `# json output schema\n` +
    JSON.stringify(output_schema, null, 2);

  let messages: ChatCompletionMessageParam[] = [
    { role: "system", content: system_prompt },
  ];

  const response = await openai.chat({
    messages,
  });

  console.log("response", response.message);

  const output = response.message.content;

  return new Response(
    JSON.stringify({
      status: "ok",
      text: "",
      output,
    }),
    {
      status: 200,
    }
  );
}
