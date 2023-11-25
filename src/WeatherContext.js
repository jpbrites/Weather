import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  const setWeather = (data) => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
