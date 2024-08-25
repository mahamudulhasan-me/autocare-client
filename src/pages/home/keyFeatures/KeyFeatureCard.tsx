/* eslint-disable @typescript-eslint/no-explicit-any */
const KeyFeatureCard = ({
  number,
  title,
  icon: Icon,
}: {
  number: number;
  title: string;
  icon: any;
}) => {
  return (
    <div className="p-8 w-full group shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg ">
      <div className="w-full flex justify-between items-center">
        <Icon className="text-6xl text-primary" />
        <p className="stoke-number">0{number}</p>
      </div>
      <h4 className="text-lg group-hover:text-white mt-5 font-semibold ">
        {title}
      </h4>
    </div>
  );
};

export default KeyFeatureCard;
