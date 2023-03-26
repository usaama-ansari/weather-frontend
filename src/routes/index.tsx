import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  WEATHER_DASHBOARD_ROUTE,
  ADD_CITY_ROUTE,
  CITY_LIST_ROUTE,
} from "@Constants/routes";
import { ErrorBoundary } from "@Components/errorBoundaries/ErroBoundary";

const WeatherDashboard = React.lazy(() => import("@Features/WeatherDashboard"));
const NewCityPage = React.lazy(
  () => import("@Features/WeatherDashboard/pages/NewCityPage"),
);
const CityListPage = React.lazy(
  () => import("@Features/WeatherDashboard/pages/CityListPage"),
);

function RootRoutes() {
  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route path="/" element={<Navigate to={WEATHER_DASHBOARD_ROUTE} />} />
        <Route
          path={WEATHER_DASHBOARD_ROUTE}
          element={
            <ErrorBoundary>
              <WeatherDashboard />
            </ErrorBoundary>
          }
        >
          <Route
            path={ADD_CITY_ROUTE}
            element={
              <ErrorBoundary>
                <NewCityPage />
              </ErrorBoundary>
            }
          />
          <Route
            path={CITY_LIST_ROUTE}
            element={
              <ErrorBoundary>
                <CityListPage />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default RootRoutes;
