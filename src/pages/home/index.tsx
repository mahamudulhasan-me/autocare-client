import Banner from "./banner/Banner";
import CarPolish from "./carPolish/CarPolish";
import KeyFeatures from "./keyFeatures/KeyFeatures";

import Services from "./services/Services";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <KeyFeatures />
      <CarPolish />
      <Services />
    </div>
  );
};

export default HomePage;
