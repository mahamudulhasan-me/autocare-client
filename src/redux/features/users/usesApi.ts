import baseApiSlice from "../../baseApi/baseApiSlice";

const usersApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApiSlice;
