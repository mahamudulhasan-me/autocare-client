import SectionHead from "../../../components/common/sectionHead/SectionHead";
import TeamMember1 from "./TeamMember1";
import TeamMember2 from "./TeamMember2";
import TeamMember3 from "./TeamMember3";
const Team = () => {
  return (
    <div className="container mx-auto px-[10%] mb-28">
      <div className="mb-32">
        <SectionHead
          title="Meet Our Team"
          desc="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer."
        />
      </div>
      <div className="md:grid grid-cols-3 gap-x-20 ">
        {/* team - 1 */}
        <TeamMember1 />
        {/* team - 2 */}
        <TeamMember2 />
        {/* team - 3 */}
        <TeamMember3 />
      </div>
    </div>
  );
};

export default Team;
