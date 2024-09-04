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
    getBookingByUser: builder.query({
      query: () => ({
        url: `/bookings/my-bookings`,
        method: "GET",
      }),
      providesTags: ["BookingByUser"],
    }),

    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetBookingByUserQuery,
  useCreateBookingMutation,
} = bookingApiSlice;
