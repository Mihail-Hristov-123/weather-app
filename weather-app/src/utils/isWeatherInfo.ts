import type { WeatherInfo } from "../types";

export function isWeatherInfo(obj: unknown): obj is WeatherInfo {
  if (typeof obj !== "object" || obj === null) return false;

  const w = obj as WeatherInfo;

  return (
    typeof w.current?.temp_c === "number" &&
    typeof w.current.condition?.text === "string" &&
    typeof w.current.condition?.icon === "string" &&
    typeof w.current.condition?.code === "number" &&
    typeof w.location?.name === "string" &&
    typeof w.location?.country === "string" &&
    typeof w.location?.region === "string"
  );
}
