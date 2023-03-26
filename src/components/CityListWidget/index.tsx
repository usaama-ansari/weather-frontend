import "./CityListWidget.styles.css";

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

type CityListWidgetProps = {
  cities: string[];
  onCitySelect: (cityName: string) => void;
};

export function CityListWidget({
  cities,
  onCitySelect,
}: CityListWidgetProps) {
  return (
    <div>
      <ul aria-label="cities">
        {cities.map((city) => (
          <li onClick={() => onCitySelect(city)} key={city}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
