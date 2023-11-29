import SearchPersonas from "../components/search/SearchPersonas";
import Navbar from "../components/utils/Navbar";

const SearchPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SearchPersonas />
    </div>
  );
};

export default SearchPage;
