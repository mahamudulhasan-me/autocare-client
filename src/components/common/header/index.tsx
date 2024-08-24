import logo from "../../../assets/images/logo.png";
import Nav from "./Nav";
import Top from "./Top";
const Header = () => {
  return (
    <div className="relative">
      <Top />
      <header className="bg-gradient-header w-full">
        {/* Full-width background section */}
        <div className="absolute inset-x-0 top-0 z-0">
          <div className="w-full h-full bg-slate-900"></div>
        </div>

        {/* Container with content */}
        <div className="container mx-auto relative z-10 grid grid-cols-12 items-end">
          <aside className="col-span-3 w-full pl-1 py-4 bg-transparent relative z-50">
            <div className="h-5 w-[150%] text-white absolute bg-slate-900 -top-5 right-0"></div>
            <div className="h-full w-24 absolute bg-slate-900 z-10 header-shape"></div>
            <img src={logo} alt="logo" className="w-52" />
          </aside>
          <Nav />
        </div>
      </header>
    </div>
  );
};

export default Header;
