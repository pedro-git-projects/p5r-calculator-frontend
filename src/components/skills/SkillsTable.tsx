import bless from "../../assets/bless.png";
import curse from "../../assets/curse.png";
import elec from "../../assets/elec.png";
import fire from "../../assets/fire.png";
import gun from "../../assets/gun.png";
import ice from "../../assets/ice.png";
import wind from "../../assets/wind.png";
import nuke from "../../assets/nuke.png";
import phys from "../../assets/phys.png";
import psy from "../../assets/psy.png";
import almighty from "../../assets/almighty.png";
import ailment from "../../assets/ailment.png";
import healing from "../../assets/healing.png";
import passive from "../../assets/passive.png";
import support from "../../assets/support.png";
import "../../styles/koreanKRSM.css";
import ElementUnion from "../../types/skills/ElementUnion";
import SkillEntry from "../../types/skills/SkillEntry";

interface SkillsTableProps {
  skillsEntries: Array<SkillEntry>;
}

const getImageForElement = (el: ElementUnion) => {
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
      return ailment;
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
      return undefined;
  }
};

const SkillsTable: React.FC<SkillsTableProps> = ({ skillsEntries }) => {
  return (
    <div>
      <table className="min-w-full bg-gray-800 text-white">
        <thead className="bg-[#732424] sticky top-0">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
              Element
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
              Cost
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
              Target
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
              Effect
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#0d0d0d] text-gray-200">
          {skillsEntries.map(skill => (
            <tr key={skill.id} className="hover:bg-red-950">
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {skill.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {getImageForElement(skill.element) !== null && (
                  <img
                    src={getImageForElement(skill.element)}
                    alt={skill.element}
                    style={{ width: "18px", height: "18px" }}
                  />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {skill.cost}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {skill.target}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {skill.effect}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SkillsTable;
