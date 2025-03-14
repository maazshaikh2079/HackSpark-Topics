require('dotenv').config(); // Add this line at the top

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const linkedIn = "generate a linked post:\n"
  const youTube = "generate a youTube post:\n"
  const x = "generate a X tweet:\n"
  const instaCap = "genrate a Instagram caption to post:\n"

  const userInput = "iot project \n made w/ servo motor and ir sensor \n working: when ir sesor detect some thing servo goes 90 degree else remain 0 degree"

  const result = await chatSession.sendMessage(
    `${linkedIn}
    \"${userInput}\"\n
    \n
    Optimize the above user-input and make it postable on social media app mention above\n
    Only give the paragraphs to post nothing else\n
    Then leave a line and give pointers to impove the post qaulity`
  );
  console.log(result.response.text());
}

run();
