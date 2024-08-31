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
  }),
});

export const { useGetAllBookingsQuery, useGetBookingByUserQuery } =
  bookingApiSlice;
