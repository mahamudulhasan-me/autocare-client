import baseApiSlice from "../../baseApi/baseApiSlice";

const bookingApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["Bookings"],
    }),
  }),
});

export const { useGetAllBookingsQuery } = bookingApiSlice;
