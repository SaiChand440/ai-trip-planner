import OpenAI from "openai";

interface IProps {
  messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  maxRetries: 3,
  timeout: 60 * 1000,
});

export async function chat({ messages }: IProps) {
  try {
    const result = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      response_format: { type: "json_object" }
    });

    console.log("result",result.choices[0].message);

    return result.choices[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
