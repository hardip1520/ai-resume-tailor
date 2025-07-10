const express = require('express');
const cors = require ('cors');
const {spawn} = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
    const { resumetext, jobdescription } = req.body;
      const prompt = `
You are a resume optimization assistant. Based on the job description below, rewrite 3 bullet points from this resume to better align with the role, using language and keywords from the job. 

Make the tone professional, concise, and use action verbs.

Job Description:
${jobdescription}

Resume Bullets:
${resumetext}

Return 2-3 optimized bullet points.
`;
    const ollama = spawn('ollama', ['run', 'mistral']);
    let output = '';
    ollama.stdin.write(prompt);
    ollama.stdin.end();
    ollama.stdout.on('data', (data) => {
        output += data.toString();
    });
    ollama.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
    })
    ollama.on('close',() => {
        res.json({result: output.trim()});
    });
});
app.listen(5000, () => console.log('Server running on port 5000'));