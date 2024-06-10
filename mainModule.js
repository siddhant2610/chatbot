//mainModule.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDglamIbegXkxNX1Bvx2VpjhWpRMoxMN0w"; // Paste your API key here
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// Export the 'model' variable for use in other modules
export { model };