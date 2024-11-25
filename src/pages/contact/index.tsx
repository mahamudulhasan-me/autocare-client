import { Breadcrumb } from "antd";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedin,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  IoHomeOutline,
  IoLocationOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import PageBanner from "../../components/ui/pageBanner/PageBanner";
import Client from "../home/client/Client";

const socialItem = [
  <FaFacebookF />,
  <FaTwitter />,
  <FaYoutube />,
  <FaLinkedin />,
  <FaGooglePlusG />,
];
const ContactUsPage = () => {
  return (
    <section>
      <PageBanner title="Contact Us" desc="Lorem ipsum dolor sit amet" />
      <div className=" shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  py-6 text-xl">
        <Breadcrumb
          className="container mx-auto md:px-[4%] px-4"
          items={[
            {
              href: "/",
              title: <IoHomeOutline />,
            },
            {
              title: "Contact Us",
            },
          ]}
        />
      </div>
      <div className="container mx-auto md:px-[4%] px-4 md:grid grid-cols-12 my-20 gap-x-12 ">
        <aside className="col-span-8 p-8 rounded-md bg-slate-200">
          <h1 className="text-2xl font-semibold">Send Message Us</h1>
          <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-5 ">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Phone"
                className="form-input"
              />
              <input
                required
                type="text"
                placeholder="Subject"
                className="form-input"
              />
            </div>
            <textarea
              required
              id=""
              placeholder="Your Message"
              className="form-input mt-5"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="mt-4 text-white  rounded-md flex items-stretch gap-1 group"
            >
              <span className="bg-primary rounded-l-md px-8 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
                Submit
              </span>
              <span className=" bg-primary px-2 py-1 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity ">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </form>
        </aside>
        <aside className="col-span-4 p-8 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <h1 className="text-3xl font-semibold">Quick Contact</h1>
          <p>
            If you have any questions simply use the following contact details.
          </p>
          <div className="mt-6 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-md p-2 text-white text-2xl">
                <IoLocationOutline />
              </div>
              <aside className="flex flex-col">
                <h4 className="uppercase">Address</h4>
                <p>123 West Street, Melbourne Victoria 3000 Australia.</p>
              </aside>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-md p-2 text-white text-2xl">
                <FaRegEnvelope />
              </div>
              <aside className="flex flex-col">
                <h4 className="uppercase">Email</h4>
                <p>info@autocare.com</p>
              </aside>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-md p-2 text-white text-2xl">
                <IoPhonePortraitOutline />
              </div>
              <aside className="flex flex-col">
                <h4 className="uppercase">Email</h4>
                <p>info@autocare.com</p>
              </aside>
            </div>
            <div className="flex items-center gap-4">
              {socialItem.map((link, index) => (
                <Link
                  key={index}
                  to={"#"}
                  className="text-2xl text-white bg-primary rounded-md p-2 inline-block hover:bg-white hover:text-primary transition-all border"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Client />
    </section>
  );
};
export default ContactUsPage;
