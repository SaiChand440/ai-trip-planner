import { z } from "zod";

const outputSchema = z.object({
    title: z.string(),
    welcome: z.object({
      title: z.string(),
      text: z.string(),
      image: z.string(),
    }).required(),
    itineraries: z.array(
      z.object({
        title: z.string(),
        date: z.date().or(z.string()),
        budget: z.number(),
        text: z.string(),
        image: z.string(),
        places: z.array(z.string()),
      }).required()
    ),
    closing: z.object({
      title: z.string(),
      text: z.string(),
      image: z.string(),
      places: z.array(z.string()),
    }).required(),
});

export default outputSchema;
