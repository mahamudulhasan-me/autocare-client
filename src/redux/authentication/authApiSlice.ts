import baseApiSlice from "../baseApi/baseApiSlice";

const authApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApiSlice;
