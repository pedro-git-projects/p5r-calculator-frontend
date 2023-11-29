import { Link } from "react-router-dom";
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
import "../../styles/table.css";
import "../../styles/hover.css";
import { useState } from "react";
import Navbar from "../utils/Navbar.tsx";
import Persona from "../../types/compendium/Persona.ts";
import InheritanceUnion from "../../types/compendium/InheritanceUnion.ts";
import ResistsUnion from "../../types/compendium/ResistsUnion.ts";

interface PersonaTableProps {
  personas: Array<Persona>;
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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("arcana");

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const shouldDisplayIndicator = (column: string) => {
    return sortColumn === column;
  };

  const sortedPersonas = [...personas].sort((a, b) => {
    if (sortColumn === "arcana" || sortColumn === "name") {
      return (
        // @ts-ignore
        a[sortColumn].localeCompare(b[sortColumn]) *
        (sortOrder === "asc" ? 1 : -1)
      );
    } else if (["st", "ma", "en", "ag", "lu"].includes(sortColumn)) {
      return (
        // @ts-ignore
        (a.stats[sortColumn] - b.stats[sortColumn]) *
        (sortOrder === "asc" ? 1 : -1)
      );
    } else {
      // @ts-ignore
      return (a[sortColumn] - b[sortColumn]) * (sortOrder === "asc" ? 1 : -1);
    }
  });

  return (
    <div>
      <table className="min-w-full bg-[#732424] text-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              <Navbar />
            </th>
          </tr>
        </thead>
      </table>

      <table className="min-w-full bg-gray-800 text-white">
        <thead className="bg-[#732424] sticky top-0">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("arcana")}
            >
              Arcana
              {shouldDisplayIndicator("arcana") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
              {shouldDisplayIndicator("name") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("lvl")}
            >
              Lvl
              {shouldDisplayIndicator("lvl") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
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
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("st")}
            >
              St
              {shouldDisplayIndicator("st") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("ma")}
            >
              Ma
              {shouldDisplayIndicator("ma") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("en")}
            >
              En
              {shouldDisplayIndicator("en") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("ag")}
            >
              Ag
              {shouldDisplayIndicator("ag") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("lu")}
            >
              Lu
              {shouldDisplayIndicator("lu") && (
                <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {sortedPersonas.map(persona => (
            <tr key={persona.id}>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="text-sm font-medium text-gray-200">
                  {persona.arcana}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-[#0d0d0d]">
                <div className="link-wrapper">
                  <span className="fallback">Index</span>
                  <div className="text-wrapper">
                    <Link to={`/persona-details/${persona.name}`}>
                      <div className="normal">{persona.name}</div>
                    </Link>
                    <Link to={`/persona-details/${persona.name}`}>
                      <div className="active">{persona.name}</div>
                    </Link>
                  </div>
                  <div className="shape-wrapper">
                    <div className="shape red-fill jelly">
                      <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 108.1 47"
                        enableBackground="new 0 0 108.1 47"
                      >
                        <polygon
                          fill="#FF0000"
                          points="0,7.1 127.3,0 32.3,64 4.8,58.2"
                        />
                      </svg>
                    </div>
                    <div className="shape cyan-fill jelly">
                      <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 108.1 47"
                        enableBackground="new 0 0 108.1 47"
                      >
                        <polygon
                          fill="#00FFFF"
                          points="14,0.5 127.4,0 77.4,164 2.3,61.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
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
