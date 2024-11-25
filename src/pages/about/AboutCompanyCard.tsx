import { ReactNode } from "react";

interface IAboutCompanyCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}
const AboutCompanyCard = ({ icon, title, desc }: IAboutCompanyCardProps) => {
  return (
    <div className="flex items-center gap-5">
      <figure className="min-w-24 h-24 rounded-md bg-slate-800 text-primary flex justify-center items-center text-4xl">
        {icon}
      </figure>
      <article>
        <h1 className="text-2xl font-semibold uppercase">{title}</h1>
        <p className="text-slate-800 text-lg mt-2">{desc}</p>
      </article>
    </div>
  );
};

export default AboutCompanyCard;
