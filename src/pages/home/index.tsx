import Banner from "./banner/Banner";
import CarPolish from "./carPolish/CarPolish";
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
      <Testimonials />
      <Team />
    </div>
  );
};

export default HomePage;
