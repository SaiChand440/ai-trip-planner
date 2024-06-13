"use server";

import { streamObject } from "ai";
import { createStreamableValue } from "ai/rsc";
import outputSchema from "@/tools/outputSchema";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { formSchema } from "@/components/customcomponents/TripPlanForm";

export async function generate(input: z.infer<typeof formSchema>) {
  "use server";

  const {
    destination,
    date: { from, to },
    usertype,
    budget,
  } = input;

  const stream = createStreamableValue();
  const status = createStreamableValue('in_progress');
  const numberOfDays = Math.ceil((new Date(to).getTime() - new Date(from).getTime()) / (1000 * 60 * 60 * 24));
  (async () => {
    let system_prompt = `You are a helpful travel planner specialized in ${destination}. Create an itinerary starting from ${from} and ending on ${to}, including activities for all days along with start and end date. Remember to not include about arrival and departure. This is a ${usertype} trip. The total budget of the trip is ${budget}, split the budget into daily expenses based on the itinerary.`;
    const { partialObjectStream } = await streamObject({
      model: numberOfDays > 4 ? google("models/gemini-1.5-flash-latest") : openai("gpt-4o"),
      // model: openai("gpt-4o"),
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
