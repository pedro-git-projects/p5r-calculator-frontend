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
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b" colSpan={5}>
              <h2 className="text-center text-xl font-bold">Skills</h2>
            </th>
          </tr>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Element</th>
            <th className="py-2 px-4 border-b">Cost</th>
            <th className="py-2 px-4 border-b">Effect</th>
            <th className="py-2 px-4 border-b">Target</th>
          </tr>
        </thead>
        <tbody>
          {skills.map(skill => (
            <tr key={skill.id} className="border-b">
              <td className="py-2 px-4 text-center">{skill.name}</td>
              <td className="flex justify-center items-center">
                <img
                  className="object-center"
                  src={
                    // @ts-ignore
                    getImageForSkill(skill.element)
                  }
                  alt={skill.element}
                />
              </td>
              <td className="py-2 px-4 text-center">{skill.cost}</td>
              <td className="py-2 px-4 text-center">{skill.effect}</td>
              <td className="py-2 px-4 text-center">{skill.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailedSkillstable;
