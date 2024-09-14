import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function main(creatorMessage: String ,summarizedData : String) {
  const res = await personalizeMessage(creatorMessage, summarizedData)
  console.log(res.choices[0]?.message?.content || "");
}

export async function personalizeMessage(creatorMessage: String ,summarizedData : String) {

  const prompt = `You are an content creator planning on sending a generalized message to your fans: ${creatorMessage}. Using data we know of the user, personalize the message: ${summarizedData}`
  const res = groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama-3.1-70b-versatile",
  });

  return res
}



main("Hi, everyone! 🙌 I hope you've all had a productive week so far. I've been getting some great feedback from you lately—love hearing how you’re squeezing in time for workouts, even during busy days! 🌟" , "User did a 20-minute yoga session during lunch. User had a hectic day. User expressed interest in stretching and unwinding. User referred to Catherine's upper body workout.")
