import { IServiceQueryParams } from "../../../types/global.type";
import baseApiSlice from "../../baseApi/baseApiSlice";

const serviceApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
    }),
    getAllServices: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IServiceQueryParams) =>
            params.append(item.name, item.value)
          );
        }
        return { url: "/services", method: "GET", params };
      },
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
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),
  }),
});

export const {
  useGetServiceQuery,
  useGetAllServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApiSlice;
