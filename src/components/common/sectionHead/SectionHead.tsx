const SectionHead = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-2 md:px-0">
      <h1 className="md:text-3xl text-2xl text-center font-bold uppercase text-slate-900">
        {title}
      </h1>
      <div
        className="flex space-x-1 items-center mt-3"
        style={{ transform: "translateY(-50%) skewX(-10deg)" }}
      >
        <p className="w-24 h-1 bg-primary "></p>
        <p className="w-4 h-3 bg-slate-900 skew-y-[20deg]"></p>
        <p className="w-24 h-1 bg-primary"></p>
      </div>
      <p className=" text-slate-900 font-[500] md:w-[60%] text-center mt-4">
        {desc}
      </p>
    </div>
  );
};

export default SectionHead;
