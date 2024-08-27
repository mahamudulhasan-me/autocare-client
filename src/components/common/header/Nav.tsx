import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import BtnAccount from "../../ui/buttons/BtnAccount";

const Nav = () => {
  const { user } = useAppSelector((state) => state.auth);

  const navItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About Us",
      path: "/about",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      title: "Products",
      path: "/products",
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      path: `/dashboard/${user?.role as string}`,
    },
  ];
  return (
    <nav className="bg-slate-900 w-full">
      <div className="container mx-auto px-[4%] text-white font-semibold flex justify-between items-center">
        <div>
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={item.id}
              className="h-full border-b-2 border-slate-900 hover:border-primary text-center hover:text-primary inline-block transition-colors py-5"
            >
              <span
                className={`px-5 ${
                  index !== navItems.length - 1
                    ? "border-r border-slate-400"
                    : ""
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <BtnAccount />
      </div>
    </nav>
  );
};

export default Nav;
