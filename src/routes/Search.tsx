import Navbar from "../components/Navbar";
import SearchPersonas from "../components/SearchPersonas";

const SearchPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SearchPersonas />
    </div>
  );
};

export default SearchPage;
