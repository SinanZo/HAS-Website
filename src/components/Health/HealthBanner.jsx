import React, { useEffect, useState } from 'react';
import './health.css';

const HealthBanner = () => {
  const [status, setStatus] = useState({ ok: true, dbConnected: null });

  useEffect(() => {
    let mounted = true;
    fetch('/api/health')
      .then((r) => r.json())
      .then((j) => {
        if (mounted) setStatus(j);
      })
      .catch(() => {
        if (mounted) setStatus({ ok: false, dbConnected: false });
      });
    return () => { mounted = false; };
  }, []);

  if (status.dbConnected === null) return null; // still loading

  if (status.dbConnected) return null; // healthy DB - no banner

  return (
    <div className="health-banner">
      <div className="health-inner">
        <strong>Dev notice:</strong> Backend DB not connected — running in fallback/mock mode.
      </div>
    </div>
  );
};

export default HealthBanner;
