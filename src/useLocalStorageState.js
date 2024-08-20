import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValues = localStorage.getItem(key);
    return storedValues ? JSON.parse(storedValues) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("Watched", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
