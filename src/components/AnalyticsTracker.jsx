// src/components/AnalyticsTracker.jsx
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your GA4 measurement ID

ReactGA.initialize(TRACKING_ID);

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event on every route change
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default AnalyticsTracker;
