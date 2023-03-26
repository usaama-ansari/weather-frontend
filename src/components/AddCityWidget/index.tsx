import { useState } from "react";
import "./AddCityWidget.styles.css";

type AddCityWidgetProps = {
  onAdd: (cityName: string) => void;
};

export function AddCityWidget({ onAdd }: AddCityWidgetProps) {
  const [city, setCity] = useState("");

  return (
    <div>
      <button type="button" onClick={() => onAdd(city)}>
        Add
      </button>
      <input
        onChange={(e) => setCity(e.target.value)}
        type="text"
        aria-label="city-input"
        placeholder="Enter city"
      />
    </div>
  );
}
