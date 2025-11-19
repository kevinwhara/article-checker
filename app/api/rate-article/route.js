import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
    try {
        const { article } = await req.json();

        if (!article) {
            return Response.json({ error: "No article provided" }, { status: 400 });
        }

        const prompt = `
You are a JSON-only article evaluator.
ALWAYS respond ONLY with JSON in this exact format:

{
  "score": number(1-10),
  "summary": "string",
  "strength": "string",
  "weakness": "string",
  "improved full version": "string"
}

Here is the article:
"""${article}"""
`;

        const completion = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                { role: "system", content: "You return JSON only." },
                { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" }
        });

        return Response.json(JSON.parse(completion.choices[0].message.content));
    } catch (err) {
        console.error(err);
        return Response.json({ error: "Internal error" }, { status: 500 });
    }
}
