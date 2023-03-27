/* eslint-disable react/no-array-index-key */
import { CityFiveDaysForecastDTO, CityWeatherDTO } from "@Types";
import "./WeatherDataWidget.styles.css";
import { WeatherProperties } from "./WeatherProperties";

export function ForecastWeather({
  data: forecastFiveDays,
}: {
  data: CityFiveDaysForecastDTO;
}) {
  return (
    <div className="ForecastWeather">
      {forecastFiveDays.map((forecast: CityWeatherDTO, i: number) => (
        <div key={forecast.cityName + i}>
          <h4 style={{ marginLeft: "20px" }}>Day: {i + 1}</h4>
          <WeatherProperties data={forecast} />
        </div>
      ))}
    </div>
  );
}
