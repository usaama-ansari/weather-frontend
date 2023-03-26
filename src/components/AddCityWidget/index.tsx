import { useState } from "react";
import "./AddCityWidget.styles.css";

type AddCityWidgetProps = {
  onAdd: (cityName: string) => void;
};

export function AddCityWidget({ onAdd }: AddCityWidgetProps) {
  const [city, setCity] = useState("");

  return (
    <div className="AddCityWidget">
      <div>
        <button
          className="AddCityWidget__button"
          type="button"
          onClick={() => onAdd(city)}
        >
          Add
        </button>
        <input
          className="AddCityWidget__input"
          onChange={(e) => setCity(e.target.value)}
          type="text"
          aria-label="city-input"
          placeholder="Enter city"
        />
      </div>
    </div>
  );
}
