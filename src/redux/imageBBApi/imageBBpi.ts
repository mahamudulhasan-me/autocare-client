import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imagebbApiSlice = createApi({
  reducerPath: "imagebbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.imgbb.com/1/" }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: `upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = imagebbApiSlice;
