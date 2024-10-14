import { useState } from "react";
import { Input } from "../components/ui/input";

const Navbar = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <header className=" flex items-center py-4 px-6 justify-between">
            <a href="/">
                <div className="font-bold">MovieFinder</div>
            </a>
            <div>
                <Input type="text" placeholder='Search...' onChange={e => setSearchText(e.target.value)} value={searchText} />
            </div>
        </header>
    )
}

export default Navbar