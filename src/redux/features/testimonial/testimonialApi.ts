import baseApiSlice from "../../baseApi/baseApiSlice";

const testimonialApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Testimonial"],
    }),
    getAllTestimonial: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["Testimonial"],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetAllTestimonialQuery } =
  testimonialApiSlice;
