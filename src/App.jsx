import "./App.css";

import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header
        title="Brussels Weather"
        src="./src/assets/weather-app.png"
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
