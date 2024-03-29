/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */

import { useState } from "react";
import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
import "./WeatherDataWidget.styles.css";

type WeatherDataWidgetProps = {
  data: any;
};

export function WeatherDataWidget(props: WeatherDataWidgetProps) {
  const [tab, setTab] = useState(0);

  const { data } = props;
  const { currentWeather, forecastedWeather } = data;

  const handleTabClick = function (selectedTab: number) {
    if (selectedTab !== tab) setTab(selectedTab);
  };

  return (
    <div className="WeatherDataWidget">
      <div className="WeatherDataWidget__inner">
        <div className="WeatherDataWidget__header">
          <div
            onClick={() => handleTabClick(0)}
            className={`WeatherDataWidget__current-weather ${
              tab === 0 && "selected"
            }`}
          >
            Current Weather
          </div>
          <div
            onClick={() => handleTabClick(1)}
            className={`WeatherDataWidget__five-day-forecast ${
              tab === 1 && "selected"
            }`}
          >
            5 days forecast
          </div>
        </div>

        <div className="WeatherDataWidget__body">
          {tab === 0 && <CurrentWeather data={currentWeather} />}
          {tab === 1 && <ForecastWeather data={forecastedWeather} />}
        </div>
      </div>
    </div>
  );
}
