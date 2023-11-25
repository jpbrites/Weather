import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import WeatherCity from './pages/weather-city';
import { WeatherProvider } from './WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/city" element={<WeatherCity/>}/>
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
