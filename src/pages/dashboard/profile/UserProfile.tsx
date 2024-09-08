import { Breadcrumb, Tag } from "antd";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import cover from "../../../assets/images/banner/profile-cover.png";
import { useGetUserQuery } from "../../../redux/features/users/usesApi";
import { useAppSelector } from "../../../redux/hooks";
import UpdateProfileModal from "./UpdateProfileModal";
const UserProfile = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { data: userData, isLoading } = useGetUserQuery(user?._id);
  const { name, email, phone, address, role } = userData?.data || {};
  if (isLoading) return <div>Loading...</div>;
  console.log(userData);
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <Breadcrumb
        items={[
          {
            href: "/",
            title: <IoHomeOutline />,
          },
          {
            href: "",
            title: "Dashboard",
          },
          {
            title: "Profile",
          },
        ]}
      />
      <div className="w-full h-full bg-white title-shadow py-2 px-4 rounded-md mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>
      <div className="bg-white pb-10">
        <img src={cover} alt="" />
        <div className="flex flex-col justify-center items-center -mt-12 space-y-4">
          <div className="size-32 ring-8 ring-slate-300 rounded-full ">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
              className="w-full h-full rounded-full ring-4 ring-slate-500"
            />
          </div>
          <div className="flex items-center gap-1">
            <h2 className="md:text-2xl text-xl font-semibold ">{name}</h2>{" "}
            <Tag className="uppercase" color="orange">
              {role}
            </Tag>
          </div>
          <div className="flex  gap-4 flex-wrap justify-center items-center">
            <p className="text-slate-700 flex items-center gap-1">
              <FaRegEnvelope /> {email}
            </p>
            <p className="text-slate-700 flex items-center gap-1">
              <MdOutlinePhoneIphone /> {phone}
            </p>
          </div>
          <p className="text-slate-700 flex items-center gap-1">
            <CiLocationOn /> {address}
          </p>
          <UpdateProfileModal />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
