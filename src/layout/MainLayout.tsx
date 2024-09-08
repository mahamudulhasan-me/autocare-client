import { Outlet } from "react-router-dom";
import FooterSection from "../components/common/footer";
import Header from "../components/common/header";
import BackToTop from "../components/ui/backToTop/BackToTop";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterSection />

      <BackToTop />
    </div>
  );
};

export default MainLayout;
