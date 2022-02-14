import { AxiosRequestConfig } from "axios";
import { useState, useEffect, useContext } from "react";

import { UserContext } from "../Context/";

//services
import API from "../Api";

function useApi<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const { getAuth, logout } = useContext(UserContext);
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>();
  const [error, setError] = useState<Error | null>(null);

  const { authorization } = getAuth();
  API.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;

  useEffect(() => {
    setIsFetching(true);
    API.get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          logout();
        }
        setError(response);
      })
      .finally(() => {
        setIsFetching(false);
      });

    return () => {
      setData(null);
    };
  }, [options?.params.page]);

  return { data, error, isFetching };
}

export default useApi;
