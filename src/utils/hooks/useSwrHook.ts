import useSWR from "swr";
import api from "@/services/api";

import type { AxiosRequestConfig } from "axios";
export type GetRequest = AxiosRequestConfig | null;

const useSwrHook = (request: GetRequest, config = {}) => {
  return useSWR(
    request && JSON.stringify(request),
    () => api(request || {}).then((response) => response.data),
    {
      ...config,
    }
  );
};

export default useSwrHook;
