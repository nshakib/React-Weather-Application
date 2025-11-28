# React Weather Application

A simple **React-based Weather App** that allows users to input a city and country to fetch and display the current weather information.

---

## 📌 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Installation](#installation)
  * [Run the Project](#run-the-project)
* [Project Structure](#project-structure)
* [Future Improvements](#future-improvements)
* [License](#license)

---

## 🌿 Overview

**React Weather Application** fetches weather data using public APIs (e.g., OpenWeatherMap API) and displays the temperature, humidity, weather condition, and other relevant details for the entered city and country.

---

## ✨ Features

* **City & Country Input** – Users can type a city and select country
* **Weather Display** – Shows temperature, humidity, wind speed, and weather condition
* **Responsive Design** – Works on desktop and mobile

---

## 🛠️ Tech Stack

* **Frontend:** React, CSS Modules
* **API:** OpenWeatherMap API
* **State Management:** useState, useEffect
* **HTTP Requests:** Fetch API

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/your-username/react-weather-application.git
cd react-weather-application
npm install
```

### Run the Project

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

> Make sure to add your API key in the `.env` file (e.g., `REACT_APP_WEATHER_API_KEY=your_api_key`).

---

## 📁 Project Structure

```
📦 react-weather-application
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 README.md
```

---

## 🌱 Future Improvements

* **Forecast Data** – 5-day / 7-day weather forecast
* **Search History** – Save recently searched cities
* **Location Detection** – Auto-detect user location using geolocation API
* **Unit Toggle** – Switch between Celsius and Fahrenheit
* **Background Animations** – Dynamic animations for sunny, rainy, or snowy weather
* **Dark Mode** – UI theme toggle
* **Weather Alerts** – Notify for extreme weather conditions

---

## 📄 License

MIT License
