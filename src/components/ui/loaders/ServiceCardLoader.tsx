import { Skeleton } from "antd";

const ServiceCardLoader = () => {
  return (
    <div className="w-full min-h-72">
      <Skeleton.Button
        active
        className="w-full z-10 min-h-72"
        size="large"
        block
      />
    </div>
  );
};

export default ServiceCardLoader;
