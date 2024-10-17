import { useContext } from "react";
import { Input } from "../components/ui/input";
import { SearchContext } from "../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
    const search = useContext(SearchContext)
    return (
        <header className=" flex items-center py-4 px-6 justify-between">
            <Link to={"/"}>
                <div className="font-bold">MovieFinder</div>
            </Link>
            <div>
                <Input type="text" placeholder='Search...' onChange={e => search?.setSearchQuery(e.target.value)} value={search?.searchQuery} />
            </div>
        </header>
    )
}

export default Navbar