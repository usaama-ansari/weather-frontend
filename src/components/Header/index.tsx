import { Link } from "react-router-dom";
import { ADD_CITY_ROUTE, CITY_LIST_ROUTE } from "@Constants/routes";
import "./Header.styles.css";

export function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <Link to={ADD_CITY_ROUTE}>Add city</Link>
        </li>
        <li>
          <Link to={CITY_LIST_ROUTE}>Cities</Link>
        </li>
      </ul>
    </div>
  );
}
