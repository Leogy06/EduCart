import axios from "axios";
import { useMemo } from "react";

export const useAPIInstance = () => {
  const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
  const eduCartAPI = useMemo(
    () =>
      axios.create({
        baseURL: baseURL,
      }),
    []
  );

  return eduCartAPI;
};
