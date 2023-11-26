import DetailedSkill from "../types/detailed/DetailedSkill";
import SkillUnion from "../types/detailed/SkillUnion";
import bless from "../assets/bless.png";
import curse from "../assets/curse.png";
import elec from "../assets/elec.png";
import fire from "../assets/fire.png";
import gun from "../assets/gun.png";
import ice from "../assets/ice.png";
import wind from "../assets/wind.png";
import nuke from "../assets/nuke.png";
import phys from "../assets/phys.png";
import psy from "../assets/psy.png";
import ail from "../assets/ailment.png";
import passive from "../assets/passive.png";
import support from "../assets/support.png";
import almighty from "../assets/almighty.png";
import healing from "../assets/healing.png";

interface DetailedSkillsProps {
  skills: DetailedSkill[];
}

const getImageForSkill = (el: SkillUnion) => {
  switch (el) {
    case "fir":
      return fire;
    case "pas":
      return passive;
    case "sup":
      return support;
    case "lig":
      return bless;
    case "ice":
      return ice;
    case "ele":
      return elec;
    case "psy":
      return psy;
    case "win":
      return wind;
    case "ail":
      return ail;
    case "gun":
      return gun;
    case "dar":
      return curse;
    case "nuk":
      return nuke;
    case "alm":
      return almighty;
    case "rec":
      return healing;
    case "phy":
      return phys;
    case "none":
      null;
  }
};

const DetailedSkillstable: React.FC<DetailedSkillsProps> = ({ skills }) => {
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead className="bg-[#732424] shadow-lg">
          <tr>
            <th className="py-2 px-4" colSpan={5}>
              <h2 className="text-center text-xl font-bold">Skills</h2>
            </th>
          </tr>
          <tr>
            <th className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">Name</th>
            <th className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
              Element
            </th>
            <th className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">Cost</th>
            <th className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">Effect</th>
            <th className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">Target</th>
          </tr>
        </thead>
        <tbody>
          {skills.map(skill => (
            <tr key={skill.id}>
              <td className="py-2 px-4 text-center whitespace-nowrap bg-[#0d0d0d]">
                {skill.name}
              </td>
              <td className="flex justify-center whitespace-nowrap bg-[#0d0d0d] items-center">
                <img
                  className="object-center"
                  src={
                    // @ts-ignore
                    getImageForSkill(skill.element)
                  }
                  alt={skill.element}
                />
              </td>
              <td className="py-2 px-4 text-center whitespace-nowrap bg-[#0d0d0d]">
                {skill.cost}
              </td>
              <td className="py-2 px-4 text-center whitespace-nowrap bg-[#0d0d0d]">
                {skill.effect}
              </td>
              <td className="py-2 px-4 text-center whitespace-nowrap bg-[#0d0d0d]">
                {skill.target}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailedSkillstable;
