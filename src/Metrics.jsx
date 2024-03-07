import { useEffect, useState } from "react";
import axios from "axios";
import Metric from "./Metric";

let axiosConfig = {};

if (import.meta.env.MODE !== "production") {
  axiosConfig = {
    auth: {
      username: import.meta.env.VITE_REACT_APP_USERNAME,
      password: import.meta.env.VITE_REACT_APP_PASSWORD,
    },
  };
}

export default function Metrics() {
  const [serverStatus, setServerStatus] = useState("error");
  const [applicationReady, setApplicationReady] = useState(0);
  const [applicationStarted, setApplicationStarted] = useState(0);

  const fetchMetrics = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_REACT_APP_METRICS,
        axiosConfig
      );
      if (typeof res.data === "object" && res.data !== null) {
        setServerStatus("success");
      } else {
        console.error("Authorization error");
        setServerStatus("error");
      }
    } catch (error) {
      console.log("Error fetching metrics:", error);
    }
  };

  const fetchMetric = async (url, setFunction) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_REACT_APP_METRICS + url,
        axiosConfig
      );
      if (typeof res.data === "object" && res.data !== null) {
        setFunction(res.data.measurements[0].value);
      }
    } catch (error) {
      console.log("Error fetching metric:", error);
    }
  };

  useEffect(() => {
    fetchMetrics();
    fetchMetric("/application.ready.time", setApplicationReady);
    fetchMetric("/application.started.time", setApplicationStarted);
  }, []);

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-x-3">
            <div
              className={`flex-none rounded-full ${
                serverStatus === "error"
                  ? "bg-red-400/10 p-1 text-red-400"
                  : "bg-green-400/10 p-1 text-green-400"
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-current" />
            </div>
            <h1 className="flex gap-x-3 text-base leading-7">
              <span className="font-semibold text-white">Server status</span>
              <span className="text-gray-600">/</span>
              <span className="font-semibold text-white">Spring</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            title={"Application ready time"}
            variable={applicationReady}
            unit={"seconds"}
          />
          <Metric
            title={"Application started time"}
            variable={applicationStarted}
            unit={"seconds"}
          />
        </div>
      </div>
      <div className="bg-gray-900"></div>
    </>
  );
}
