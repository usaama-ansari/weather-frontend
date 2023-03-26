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
    cities,
  } = useContext(WeatherContext);

  useEffect(() => {
    getCitiesList();
  }, []);

  const handleCitySelect = (city: string) => {
    fetchCityWeather(city);
  };

  return (
    <div>
      <CityListWidget cities={cities} onCitySelect={handleCitySelect} />
      <div style={{ marginTop: "50px" }}>
        {forecastedWeather.length && currentWeather && (
          <WeatherDataWidget data={{ currentWeather, forecastedWeather }} />
        )}
      </div>
    </div>
  );
}

export default CityListPage;
