import sectionDiv from "../../../assets/images/bg-img.png";
const SectionDivider = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${sectionDiv})` }}
        className="w-full h-8 mt-10"
      ></div>
    </>
  );
};

export default SectionDivider;
