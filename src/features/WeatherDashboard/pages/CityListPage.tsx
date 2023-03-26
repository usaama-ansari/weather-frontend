import { useContext, useEffect } from "react";
import { CityListWidget } from "@Components/CityListWidget";
import { WeatherDataWidget } from "@Components/WeatherDataWidget";
import { WeatherContext } from "@Context/weatherContext";

function CityListPage() {
  const {
    getCitiesList,
    fetchCityWeather,
    currentWeather,
    forecastedWeather,
    selectedCity,
    selectCity,
    clearWeatherData,
    cities,
  } = useContext(WeatherContext);

  useEffect(() => {
    selectCity();
    clearWeatherData();
    getCitiesList();
  }, []);

  const handleCitySelect = (city: string) => {
    fetchCityWeather(city);
  };

  return (
    <div>
      <CityListWidget
        cities={cities}
        onCitySelect={handleCitySelect}
        selectedCity={selectedCity}
      />
      <div style={{ marginTop: "50px" }}>
        {selectedCity && (
          <h3
            style={{ marginLeft: "10px" }}
          >{`${selectedCity} Weather Forecast`}</h3>
        )}
        {forecastedWeather.length && currentWeather ? (
          <WeatherDataWidget data={{ currentWeather, forecastedWeather }} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CityListPage;
