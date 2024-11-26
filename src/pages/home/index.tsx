import Banner from "./banner/Banner";
import Blog from "./blog/Blogs";
import CarPolish from "./carPolish/CarPolish";
import Client from "./client/Client";
import KeyFeatures from "./keyFeatures/KeyFeatures";

import Services from "./services/Services";
import Team from "./team/Team";
import Testimonials from "./testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <KeyFeatures />
      <CarPolish />
      <Services />
      <Team />
      <Testimonials sectionDivider={true} />
      <Blog />
      <Client />
    </div>
  );
};

export default HomePage;
