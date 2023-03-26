import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { WEATHER_DASHBOARD_ROUTE } from "@Constants/routes";
import { ErrorBoundary } from "@Components/errorBoundaries/ErroBoundary";

const WeatherDashboard = React.lazy(() => import("@Features/WeatherDashboard"));

function RootRoutes() {
  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route
          path={WEATHER_DASHBOARD_ROUTE}
          element={
            <ErrorBoundary>
              <WeatherDashboard />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default RootRoutes;
