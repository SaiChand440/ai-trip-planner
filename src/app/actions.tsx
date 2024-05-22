"use server";

import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { object, z } from "zod";
import outputSchema from "@/tools/outputSchema";
import { google } from "@ai-sdk/google";

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

export async function generate(input: string) {
  "use server";

  const {
    destination,
    date: { from, to },
    usertype,
    budget,
  } = JSON.parse(input);

  const stream = createStreamableValue();
  const status = createStreamableValue('in_progress');
  (async () => {
    let system_prompt = `You are a helpful travel planner specialized in ${destination}. Create an itinerary starting from ${from} and ending on ${to}, including activities for all days along with start and end date. This is a ${usertype} trip. The total budget of the trip is ${budget}, split the budget into daily expenses based on the itinerary.`;

    const { partialObjectStream } = await streamObject({
      model: google("models/gemini-1.5-flash-latest"),
      // model: openai("gpt-3.5-turbo"),
      schema: outputSchema,
      system: system_prompt,
      prompt: `Create an itinerary to ${destination}`,
      temperature: 0.4,
    });

    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }

    await stream.done();
    await status.done('completed');
  })();

  return { object: stream.value, status: status.value };
}
