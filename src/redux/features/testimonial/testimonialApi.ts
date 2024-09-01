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
  }),
});

export const { useCreateTestimonialMutation } = testimonialApiSlice;
