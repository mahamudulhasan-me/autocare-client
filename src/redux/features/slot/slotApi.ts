import baseApiSlice from "../../baseApi/baseApiSlice";

const slotApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
      providesTags: ["Slots"],
    }),
    createSlot: builder.mutation({
      query: (data) => ({
        url: "/services/slots/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Slots"],
    }),
    updateSlot: builder.mutation({
      query: ({ id, data }) => ({
        url: `/slots/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Slots"],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useCreateSlotMutation,
  useUpdateSlotMutation,
} = slotApiSlice;
