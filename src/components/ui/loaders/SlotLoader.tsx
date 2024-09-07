import { Skeleton } from "antd";

const SlotLoader = () => {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton.Input active style={{ width: "100%" }} />
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton.Button active key={i} style={{ width: "100%" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotLoader;
