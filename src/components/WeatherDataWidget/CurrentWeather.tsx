import "./WeatherDataWidget.styles.css";
import { WeatherProperties } from "./WeatherProperties";

export function CurrentWeather({ data }: { data: any }) {
  return (
    <div className="CurrentWeather">
      <WeatherProperties data={data} />
    </div>
  );
}
