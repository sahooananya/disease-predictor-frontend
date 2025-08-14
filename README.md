# 🏥 Disease Prediction App - Frontend

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-yellow)
![Status](https://img.shields.io/badge/Deployed-success-green)

🌐 **Live App:** [https://disease-predictor-frontend-qxfb.onrender.com](https://disease-predictor-frontend-qxfb.onrender.com)

A modern, responsive web application for AI-powered disease prediction based on symptoms.

---

## 📋 Table of Contents
- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎥 Demo

**Live Application:** [disease-predictor-frontend-qxfb.onrender.com](https://disease-predictor-frontend-qxfb.onrender.com)

**How it Works:**
1. Select symptoms from a comprehensive list
2. AI analyzes the inputs
3. View predicted diseases with confidence scores
4. See recommended precautions

---

## ✨ Features
- **Modern UI/UX**: Responsive React 18 interface with smooth navigation
- **Real-Time Analysis**: Sends symptoms to backend API and displays predictions
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Error Handling**: User-friendly messages for failed API requests
- **Optimized Build**: Vite-powered fast production builds

---

## 🛠 Tech Stack
- **Framework:** React 18+
- **Language:** TypeScript 5+
- **Build Tool:** Vite 5+
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Styling:** CSS (responsive)
- **Deployment:** Render (Static Site)
- **Package Manager:** npm

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/disease-predictor-frontend.git
cd disease-predictor-frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Update VITE_API_URL in .env to your backend API endpoint

# Start dev server
npm run dev
````

Visit: `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # App pages (Home, About, Diagnosis, Results)
├── types/            # TypeScript types
├── utils/            # Helper functions (API config)
├── styles/           # CSS styles
├── App.tsx           # Main app component
├── main.tsx          # App entry point
└── vite-env.d.ts
```

---

## 🔧 Environment Variables

Example `.env` file:

```env
VITE_API_URL=https://disease-predictor-api-lryq.onrender.com
VITE_APP_NAME=Disease Predictor
VITE_APP_VERSION=1.0.0
```

---

## 💻 Development

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run type-check # TypeScript type check
```

---

## 🚀 Deployment

**On Render (Static Site)**

1. Connect GitHub repo
2. Build Command:

   ```
   npm install && npm run build
   ```
3. Publish Directory: `dist`
4. Set `VITE_API_URL` environment variable

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit changes and push
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using React, TypeScript & Vite**

```
