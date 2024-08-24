import { Outlet } from "react-router-dom";
import FooterSection from "../components/common/footer";
import Header from "../components/common/header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
