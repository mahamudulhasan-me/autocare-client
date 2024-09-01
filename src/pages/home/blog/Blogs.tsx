import SectionHead from "../../../components/common/sectionHead/SectionHead";
import { carWashBlogs } from "../../../const/carWashBlogs";
import { CarWashBlog } from "../../../types/blog";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div
        className="container mx-auto px-[5%]  my-28
      "
      >
        <div className="">
          <SectionHead
            title="We’re Connected to Help You"
            desc="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer."
          />
        </div>
        <div className="grid grid-cols-3 gap-x-12 mt-10">
          {carWashBlogs.map((blog: CarWashBlog, index) => (
            <BlogCard key={blog.id} blog={blog} data-id={`card-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
