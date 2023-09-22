import "./App.css";

import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";

import weather from './assets/weather.png'

const App = () => {
  return (
    <div>
      <Header
        title="Brussels Weather"
        src={weather}
        alt="weather"
      />
      <WeatherContainer />
      <Footer
        attributionText="Coded and Designed"
        authorLink="https://github.com/Mileenka"
      />
    </div>
  );
};

export default App;
