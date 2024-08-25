const SectionHead = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold uppercase text-slate-900">
        Offering Quality Services
      </h1>
      <div
        className="flex space-x-1 items-center mt-3"
        style={{ transform: "translateY(-50%) skewX(-10deg)" }}
      >
        <p className="w-24 h-1 bg-primary "></p>
        <p className="w-4 h-3 bg-slate-900 skew-y-[20deg]"></p>
        <p className="w-24 h-1 bg-primary"></p>
      </div>
      <p className=" text-slate-900 font-[500] w-[60%] text-center mt-4">
        There are many variations of passages of Lorem Ipsum typesetting
        industry has been the industry's standard dummy text ever since the been
        when an unknown printer.
      </p>
    </div>
  );
};

export default SectionHead;
