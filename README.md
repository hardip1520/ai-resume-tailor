# 🧠 AI Resume Tailor

Tailor your resume bullet points to match any job description using a local LLM — no internet required, no API costs. Powered by [Ollama](https://ollama.com/) and Mistral, with a clean and responsive frontend built in HTML, CSS, and JavaScript.

> 📍 Ideal for job seekers who want quick, private, and customized resume bullet rewriting.

---

## ✨ Features

- ⚡ **Local LLM-based rewriting** using Ollama + Mistral
- 📋 Copy-to-clipboard output
- 📂 Two-panel UI: Resume on left, Job Description on right
- ⏳ Loading indicator + input validation
- 🔒 100% offline — no data leaves your device
- 📱 Responsive design for desktop and mobile

---

## 🖼️ Live Demo (Frontend Only)

🔗 (https://ai-resume-tailor-mu.vercel.app/)

> Note: This is a frontend-only demo. The backend (Ollama model) must run locally for full functionality.

---

## 🖥️ Screenshot

<img width="500" height="500" alt="demo-2" src="https://github.com/user-attachments/assets/266d282a-ec84-4108-9e06-ee2eb06b9c09" />
<img width="500" height="500" alt="Demo- image" src="https://github.com/user-attachments/assets/68c4e4a9-8f56-4f5f-b351-7f357dad7c60" />


## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **LLM Runtime:** Ollama running Mistral (or any compatible model)

---

## 🚀 How to Run Locally

### Prerequisites
- [Install Ollama](https://ollama.com)
- Node.js installed

### Steps

1. **Download a model** (e.g., mistral or gemma)
   ```bash
   ollama pull mistral
