<h1 style="color:#green">Weather App with React and OpenWeatherMap API</h1>
<img src="/src/assets/Screenshot from 2023-08-24 23-13-30.png" alt=""/>

<p>This is a weather application built using React that fetches real-time weather data from the OpenWeatherMap API. It provides information about the current temperature, wind speed, cloud cover, humidity, and dynamically changes the background image to match the weather condition.</p>

Features

    Real-time Weather Data: The app fetches real-time weather data from the OpenWeatherMap API to provide up-to-date weather information.

    Temperature Display: The current temperature in degrees Celsius is prominently displayed on the screen.

    Wind Speed: The wind speed in meters per second (m/s) is displayed to provide information about the current wind conditions.

    Cloud Cover: The cloud cover percentage is shown to give an indication of the sky's cloudiness.

    Humidity: The humidity percentage is displayed to provide information about the moisture level in the air.

    Dynamic Background: The background image changes dynamically to match the current weather condition, creating a visually appealing user experience.

Getting Started

To get started with the Weather App using OpenWeatherMap API, follow these steps:

    Clone the repository to your local machine:

    bash

git clone https://github.com/yourusername/weather-app-react.git

Navigate to the project directory:

bash

cd weather-app-react

Install the project dependencies using npm or yarn:

bash

npm install

# or

yarn install

Create a .env file in the root of the project and add your OpenWeatherMap API key:

env

REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE

Replace YOUR_API_KEY_HERE with your actual OpenWeatherMap API key.

Start the development server:

bash

    npm start
    # or
    yarn start

    Open your web browser and visit http://localhost:3000 to see the Weather App in action.

OpenWeatherMap API Usage

The app uses the OpenWeatherMap API to fetch weather data. You need to sign up for an OpenWeatherMap API key if you don't have one. Replace the placeholder in the .env file with your actual API key.
Technologies Used

    React: A popular JavaScript library for building user interfaces.
    Axios: A promise-based HTTP client for making API requests.
    CSS: Cascading Style Sheets for styling the application.
    OpenWeatherMap API: The application fetches real-time weather data from the OpenWeatherMap API.

Credits

This Weather App was created by [Your Name] and is open source under
