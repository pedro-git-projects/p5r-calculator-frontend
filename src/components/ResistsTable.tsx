import Resists from "../types/detailed/Resists";
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
import ResistsUnion from "../types/compendium/ResistsUnion.ts";

interface ResistsTableProps {
  resists: Resists;
}

const ResistsTable: React.FC<ResistsTableProps> = ({ resists }) => {
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead>
          <tr>
            <th className="title bg-[#732424]" colSpan={Object.keys(resists).length + 1}>
              Resistances
            </th>
          </tr>
          <tr>
            {Object.entries(resists).map(([resist, resistance]) => (
              <td key={resist} className="py-2 px-4">
                <div className="flex items-center flex-col">
                  <img
                    src={
                      // @ts-ignore
                      getImageForResistance(resist)
                    }
                    alt={resist}
                    className="mb-2"
                  />
                  {getTextForResistance(resistance)}
                </div>
              </td>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
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

const getImageForResistance = (el: keyof Resists) => {
  switch (el) {
    case "curse":
      return curse;
    case "gun":
      return gun;
    case "bless":
      return bless;
    case "pys":
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
  }
};

export default ResistsTable;
