import baseApiSlice from "../../baseApi/baseApiSlice";

const slotApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSlotsQuery } = slotApiSlice;
