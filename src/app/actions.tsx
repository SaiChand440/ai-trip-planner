"use server";

import { generateObject } from "ai";
import outputSchema from "@/tools/outputSchema";
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

  const data = 
  (async () => {
    let system_prompt = `You are a helpful travel planner specialized in ${destination}. Create an itinerary starting from ${from} and ending on ${to} with a minimum of 400 characters for each day mandatorily,Try to include the specific address of each location only in the places key-value pair of the specified json output format. If specific start and end locations are not given, choose ones that you think are suitable and give specific addresses, be sure to mention the type of transit for the trip and also including activities for all days along with start and end date. Remember to not include about arrival and departure, no mention about arrival and departure from given destination whatsoever. This is a ${usertype} trip. The total budget of the trip is ${budget}, split the budget into daily expenses based on the itinerary.`;
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: outputSchema,
      system: system_prompt,
      prompt: system_prompt,
      temperature: 0.4,
    });
    return { object: object, status: "completed" };
  })();

  return data;
}
