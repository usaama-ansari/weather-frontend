import { CityFiveDaysForecastDTO, CityWeatherDTO } from "@Types";
import "./WeatherDataWidget.styles.css";
import { WeatherProperties } from "./WeatherProperties";

export function ForecastWeather({ data }: { data: any }) {
  console.log(data);

  // extract one forecast data out of all 5 days forecast data
  const forecastFiveDays = data.map((d: CityFiveDaysForecastDTO) => d[0]);
  return (
    <div className="ForecastWeather">
      {forecastFiveDays.map((forecast: CityWeatherDTO, i: number) => (
        <div>
          <h4 style={{ marginLeft: "20px" }}>Day: {i + 1}</h4>
          <WeatherProperties data={forecast} key={forecast.cityName} />
        </div>
      ))}
    </div>
  );
}
