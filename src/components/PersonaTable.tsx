import { Link } from "react-router-dom";
import Persona from "../types/Persona";
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
import almighty from "../assets/almighty.png";
import ailment from "../assets/ailment.png";
import healing from "../assets/healing.png";
import InheritanceUnion from "../types/InheritanceUnion.ts";
import ResistsUnion from "../types/ResistsUnion.ts";
import "../styles/fonts.css";
import "../styles/liiink.css";

interface PersonaTableProps {
  personas: Persona[];
}

const getImageForInheritance = (el: InheritanceUnion) => {
  switch (el) {
    case "curse":
      return curse;
    case "bless":
      return bless;
    case "psy":
      return psy;
    case "elec":
      return elec;
    case "phys":
      return phys;
    case "ice":
      return ice;
    case "nuke":
      return nuke;
    case "wind":
      return wind;
    case "fire":
      return fire;
    case "almighty":
      return almighty;
    case "ailment":
      return ailment;
    case "healing":
      return healing;
    case "none":
      return null;
  }
};

const getTextForResistance = (el: ResistsUnion) => {
  switch (el) {
    case "-":
      return "";
    case "d":
      return <div className="text-green-500">ab</div>;
    case "s":
      return <div className="text-blue-300">rs</div>;
    case "r":
      return <div className="text-emerald-300">rp</div>;
    case "w":
      return <div className="text-orange-700">wk</div>;
    case "n":
      return <div className="text-amber-50">nu</div>;
  }
};

const PersonaTable: React.FC<PersonaTableProps> = ({ personas }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-[#f2e852] bg-gray-800 text-white">
        <thead
          className="bg-[#732424]"
          style={{ position: "sticky", top: 0, zIndex: 1 }}
        >
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Arcana
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Lvl
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Inherits
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Trait
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <img
                src={phys}
                alt="physical resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={gun}
                alt="gun resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={fire}
                alt="fire resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={ice}
                alt="ice resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={elec}
                alt="electrical resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={wind}
                alt="wind resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={psy}
                alt="psy resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={nuke}
                alt="nuke resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={bless}
                alt="bless resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 tracking-wider">
              <img
                src={curse}
                alt="curse resist"
                style={{ width: "24px", height: "24px" }}
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              St
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Ma
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              En
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Ag
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Lu
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {personas.map(persona => (
            <tr key={persona.id}>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm font-medium text-gray-200">
                  {persona.arcana}
                </div>
              </td>

              <td className="frame px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <Link to={`/persona-details/${persona.name}`}>
                  <a className="menu1">{persona.name}</a>
                </Link>

                {
                  // <ul>
                  // <Link to={`/persona-details/${persona.name}`}>
                  //   <li className="menu1">{persona.name}</li>
                  // </Link>
                  // </ul>
                  //  <ul className="backlayer">
                  //  <Link to={`/persona-details/${persona.name}`}>
                  //    <li className="menu1">{persona.name}</li>
                  //  </Link>
                  //  </ul>
                }
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.lvl}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    //@ts-ignore
                    getImageForInheritance(persona.inherits) !== null && (
                      <img
                        // @ts-ignore
                        src={getImageForInheritance(persona.inherits)}
                        // @ts-ignore
                        alt={persona.inherits}
                        style={{ width: "18px", height: "18px" }}
                      />
                    )
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.trait}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.phys)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.gun)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.fire)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.ice)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.elec)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.wind)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.pys)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.nuke)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.bless)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">
                  {
                    // @ts-ignore
                    getTextForResistance(persona.resists.curse)
                  }
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.stats.st}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.stats.ma}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.stats.en}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.stats.ag}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm text-gray-200">{persona.stats.lu}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PersonaTable;
