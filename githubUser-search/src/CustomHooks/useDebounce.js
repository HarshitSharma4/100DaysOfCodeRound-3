import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = (value, delay = 800) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeInterval);
  }, [value]);
  return debounceValue;
};
