import { Modal, Select } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { IoGitCompare } from "react-icons/io5";
import {
  resetServiceCompare,
  setService1,
  setService2,
} from "../../../redux/features/compareServices/CompareServicesSlice";
import {
  useGetAllServicesQuery,
  useGetServiceQuery,
} from "../../../redux/features/service/serviceApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IService } from "../../../types";

const CompareServices: React.FC<{ serviceIdProp?: string }> = ({
  serviceIdProp,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<
    string | undefined
  >(serviceIdProp || "");
  const [activeService, setActiveService] = useState<string>("service1");

  const dispatch = useAppDispatch();
  const { service1, service2 } = useAppSelector(
    (state) => state.compareServices
  );

  const { data: services, isLoading: serviceLoading } = useGetAllServicesQuery(
    {}
  );
  const {
    data: service,

    isSuccess,
  } = useGetServiceQuery(selectedServiceId, { skip: !selectedServiceId });

  // Set initial service ID from prop
  useEffect(() => {
    if (serviceIdProp) {
      setSelectedServiceId(serviceIdProp);
    }
  }, [serviceIdProp]);

  // Update Redux store when a service is successfully fetched
  useEffect(() => {
    if (isSuccess && service?.data) {
      if (activeService === "service1") {
        dispatch(setService1(service.data));
      } else {
        dispatch(setService2(service.data));
      }
    }
  }, [isSuccess, service, activeService, dispatch]);

  // Handle service selection for comparison
  const handleSelectService = (value: string, serviceKey: string) => {
    setActiveService(serviceKey);
    setSelectedServiceId(value);
  };

  // Prepare select options from fetched services
  const serviceOptions = useMemo(
    () =>
      services?.data.map((service: IService) => ({
        value: service._id,
        label: service.name,
      })),
    [services]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white rounded-md flex items-stretch gap-1 group mt-8"
      >
        <span className="bg-slate-900 rounded-l-md px-5 py-2.5 font-semibold group-hover:bg-opacity-90 transition-opacity uppercase">
          Compare Service
        </span>
        <span className="bg-slate-900 px-2 py-2 flex justify-center items-center text-2xl rounded-r-md hover:bg-opacity-90 transition-opacity">
          <IoGitCompare />
        </span>
      </button>

      <Modal
        title={<p>Compare Service</p>}
        open={open}
        onCancel={() => {
          setOpen(false);
          dispatch(resetServiceCompare());
        }}
        width={800}
        footer={null}
      >
        <div className="grid grid-cols-12 gap-x-2 border-t pt-4 border-slate-300 divide-y">
          {/* Service selection */}
          <div className="col-span-2 py-4"></div>
          <div className="col-span-5 py-4">
            <Select
              className="w-full"
              showSearch
              placeholder="Select a service"
              optionFilterProp="label"
              value={service1?._id}
              onChange={(value) => handleSelectService(value, "service1")}
              options={serviceOptions}
              loading={serviceLoading}
            />
          </div>
          <div className="col-span-5 py-4">
            <Select
              className="w-full"
              showSearch
              placeholder="Select a service"
              optionFilterProp="label"
              value={service2?._id}
              onChange={(value) => handleSelectService(value, "service2")}
              options={serviceOptions}
              loading={serviceLoading}
            />
          </div>

          {/* Comparison Data */}
          {[
            { label: "Name", value1: service1?.name, value2: service2?.name },
            {
              label: "Price",
              value1: `$${service1?.price}`,
              value2: `$${service2?.price || 0}`,
            },
            {
              label: "Duration",
              value1: `${service1?.duration} min`,
              value2: `${service2?.duration || ""} min`,
            },
            {
              label: "Description",
              value1: service1?.description,
              value2: service2?.description,
            },
          ].map(({ label, value1, value2 }, index) => (
            <React.Fragment key={index}>
              <h1 className="col-span-2 py-2">{label}</h1>
              <p className="col-span-5 py-2">{value1}</p>
              <p className="col-span-5 py-2">{value2}</p>
            </React.Fragment>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default CompareServices;
