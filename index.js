const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const link = "https://www.youtube.com/watch?v=gmFAyi4yCJs";

const { YoutubeTranscript } = require("youtube-transcript");

const fs = require("node:fs");

fs.readFile("prompt.md", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  YoutubeTranscript.fetchTranscript(link).then((captions) => {
    const transcript = captions.map((c) => c.text).join(" ");

    const prompt = `${data}\n${transcript}`;

    axios({
      method: "post",
      url: `${API_URL}?key=${API_KEY}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
    })
      .then((response) => {
        console.log(
          "Response:",
          response.data.candidates[0].content.parts[0].text
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

// const data = {
//   contents: [
//     {
//       parts: [{ text: "Explain how AI works" }],
//     },
//   ],
// });
