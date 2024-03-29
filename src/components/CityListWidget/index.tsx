import "./CityListWidget.styles.css";

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

type CityListWidgetProps = {
  cities: string[];
  selectedCity: string;
  onCitySelect: (cityName: string) => void;
};

export function CityListWidget({
  cities,
  onCitySelect,
  selectedCity,
}: CityListWidgetProps) {
  return (
    <div className="CityListWidget">
      <h3>Available Cities</h3>
      <div className="CityListWidget_inner">
        <ul className="CityListWidget__list" aria-label="cities">
          {cities.map((city) => (
            <li
              className={`${selectedCity === city ? "selected" : ""}`}
              onClick={() => onCitySelect(city)}
              key={city}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
