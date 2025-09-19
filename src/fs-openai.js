const fs = require("fs");
const path = require("path");
require("dotenv").config();

async function transcribeAudio(audioFilePath) {
  try {
    if (!fs.existsSync(audioFilePath)) {
      throw new Error(audioFilePath + " does not exist");
    }

    const audioFile = fs.readFileSync(audioFilePath);
    const formData = new FormData();
    const blob = new Blob([audioFile]);

    formData.append("file", blob, path.basename(audioFilePath));
    formData.append("model", "whisper-1");

    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API error: ${error.error.message}`);
    }

    const data = await response.json();
    const transcription = data.text;

    const outputFilePath = path.join(
      path.dirname(audioFilePath),
      `${path.basename(
        audioFilePath,
        path.extname(audioFilePath)
      )}_transcription.txt`
    );

    fs.writeFileSync(outputFilePath, transcription);
    console.log(`Transcription saved to ${outputFilePath}`);

    return transcription;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

const audioFilePath = "src/audio.mp3";

transcribeAudio(audioFilePath)
  .then((transcription) => {
    console.log("Transcription:", transcription);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
