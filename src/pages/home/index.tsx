import Banner from "./banner/Banner";
import CarPolish from "./carPolish/CarPolish";
import KeyFeatures from "./keyFeatures/KeyFeatures";

import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <KeyFeatures />
      <CarPolish />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
