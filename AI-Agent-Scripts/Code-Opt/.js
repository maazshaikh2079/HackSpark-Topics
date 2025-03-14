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

  const py = "This is a Python code:\n"
  const c = "This is a C code:\n"
  const cpp = "This is a C++ code:\n"
  const cs = "This is a C# code:\n"
  const java = "This is a Java code:\n"
  const js = "This is a JavaScript code:\n"
  const json = "This is a JSON code:\n"
  const css = "This is CSS code:\n"
  const html = "This is a HTML code:\n"

  // const userInput = "iot project \n made w/ servo motor and ir sensor \n working: when ir sesor detect some thing servo goes 90 degree else remain 0 degree"

  const userInput =
  `
  #include<stdio.h>
  int main(){
  int a[100],n,i,j,temp;
  printf("Enter size: ");
  scanf("%d",&n);
  printf("Enter elements: ");
  for(i=0;i<n;i++)
  scanf("%d",&a[i]);
  for(i=0;i<n-1;i++)
  for(j=0;j<n-1;j++)
  if(a[j]>a[j+1]){
  temp=a[j];
  a[j]=a[j+1];
  a[j+1]=temp;}
  printf("Sorted array: ");
  for(i=0;i<n;i++)
  printf("%d ",a[i]);
  return 0;
  }
  `

  const result = await chatSession.sendMessage(
    `${c}
    \"${userInput}\"\n
    \n
    Give a short concise summary of the user-input code
    Then leave a line
    print "**Formatted Code:**"
    Correctly format the above user-input code WITHOUT doing any logical changes in it\n
    Only give formatted code NOTHING ELSE!!! \n
    Then Leave a line
    print "**Optimized Code:**"
    Give an optimized version of the code, do correct logical changes in code to get good time and space complexity
    Then leave a line
    **Optimization:**
    Give bullet points on how you optimized the above code
    `
    // Then leave a line and give pointers to impove the post qaulity`
  );
  console.log(result.response.text());
}

run();
