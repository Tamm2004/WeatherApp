# ☀️ WeatherApp

**WeatherApp** is a modern and interactive weather forecast application built using **React** and **Vite**.  
It allows users to search for any city and view current weather conditions including temperature, humidity, wind speed, and more — all fetched in real time from a weather API.

---

## 🌦️ Features

- 🔍 Search weather by city
- 📍 Displays current temperature, weather conditions, humidity, and wind speed
- 🕶️ Clean and responsive UI
- React hooks & API integration
- Fast development experience with Vite

---

## 🗂️ Project Structure

```
WeatherApp/
├── public/ # Public assets & index.html
├── src/ # React source code
│ ├── components/ # Reusable UI components (if any)
│ ├── App.jsx # Main application component
│ ├── index.css # Global styles
│ └── main.jsx # React entry file
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to run the WeatherApp locally:

### 📦 Prerequisites

Make sure you have:

- **Node.js** (v14+)
- **npm** (Node Package Manager)

---

### 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tamm2004/WeatherApp.git
2. **Navigate into the project folder**
   ```bash
   cd WeatherApp
3. **Install dependencies**
   ```bash
   npm install
4. **Run the dev server**
  ```bash
  npm run dev
 

📡 API Configuration

This app requires a weather API key to fetch real-time weather data.

1. Create an account on a weather API provider like:

    -OpenWeatherMap (openweathermap.org)

    -WeatherAPI (weatherapi.com)

2. Create a .env file in the root of the project and add your API key:
  VITE_WEATHER_API_KEY=your_api_key_here


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
