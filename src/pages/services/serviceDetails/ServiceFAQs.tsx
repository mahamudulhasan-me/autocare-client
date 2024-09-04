import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import sidebg from "../../../assets/images/banner/faq-sidebar-b.jpg";
import sideBg from "../../../assets/images/banner/service-d-2.jpg";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Can I return the product after purchase?",
    children: (
      <p className="text-slate-900 text-base">
        There are many variations of passages available, but the majority have
        suffered alteration in some form by injected randomised words which
        don’t look even slightly believable now. Phasellus mollis ac augue sed
        varius.
      </p>
    ),
  },
  {
    key: "2",
    label: "Where should I incorporate my business?",
    children: (
      <p className="text-slate-900 text-base">
        There are many variations of passages available, but the majority have
        suffered alteration in some form by injected randomised words which
        don’t look even slightly believable now. Phasellus mollis ac augue sed
        varius.
      </p>
    ),
  },
  {
    key: "3",
    label: "How there are many variations of passages",
    children: (
      <p className="text-slate-900 text-base">
        There are many variations of passages available, but the majority have
        suffered alteration in some form by injected randomised words which
        don’t look even slightly believable now. Phasellus mollis ac augue sed
        varius.
      </p>
    ),
  },
];

const ServiceFAQs: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <div className="col-span-5">
        <div
          style={{ backgroundImage: `url(${sidebg})` }}
          className="w-full bg-slate-900 bg-cover bg-center bg-no-repeat p-8 bg-blend-overlay flex flex-col justify-center items-center text-white gap-y-5"
        >
          <h2 className="text-3xl">Get Our Help</h2>
          <p className="text-center">
            Speak with a human to fill out a form? Call our corporate office and
            we will connect you with a team member.
          </p>
          <h1 className="text-4xl">123 456 789</h1>
          <BtnPrimary title="Appointment" />
        </div>
      </div>
      <div className="col-span-7 ml-10">
        <div className="grid grid-cols-2">
          <aside>
            <h1 className="text-2xl text-slate-900">Service Benefits</h1>
            <p className="text-lg mt-2 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-x-2">
                <IoIosCheckmarkCircleOutline
                  size={20}
                  className="text-primary"
                />
                Refresing to get such a touch.
              </p>
              <p className="flex items-center gap-x-2">
                <IoIosCheckmarkCircleOutline
                  size={20}
                  className="text-primary"
                />
                Refresing to get such a touch.
              </p>
              <p className="flex items-center gap-x-2">
                <IoIosCheckmarkCircleOutline
                  size={20}
                  className="text-primary"
                />
                Refresing to get such a touch.
              </p>
              <p className="flex items-center gap-x-2">
                <IoIosCheckmarkCircleOutline
                  size={20}
                  className="text-primary"
                />
                Refresing to get such a touch.
              </p>
            </div>
          </aside>
          <figure>
            <img src={sideBg} alt="" />
          </figure>
        </div>
        <Collapse
          accordion
          defaultActiveKey={["1"]}
          onChange={onChange}
          items={items}
          expandIconPosition="right"
          expandIcon={({ isActive }) =>
            isActive ? <FaMinus /> : <FaPlus color="#ee3131" />
          }
          className="mt-10 custom-collapse"
        />
      </div>
    </>
  );
};

export default ServiceFAQs;
