import baseApiSlice from "../../baseApi/baseApiSlice";

const serviceApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllServicesQuery, useCreateServiceMutation } =
  serviceApiSlice;
