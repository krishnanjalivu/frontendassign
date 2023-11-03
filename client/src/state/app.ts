import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Appresponse } from "./type";
// 

export const app = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["apps"],
  endpoints: (build) => ({
    getApps: build.query<Array<Appresponse>, void>({
      query: () => "app/apps/",
      providesTags: ["apps"],
    }),
    
  }),
});

export const { useGetAppsQuery  }= app;

