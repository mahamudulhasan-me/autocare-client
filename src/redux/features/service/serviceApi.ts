import baseApiSlice from "../../baseApi/baseApiSlice";

const serviceApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["Services"],
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
  }),
});

export const { useGetAllServicesQuery, useCreateServiceMutation } =
  serviceApiSlice;
