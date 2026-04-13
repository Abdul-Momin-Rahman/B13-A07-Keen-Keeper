import { useState } from "react";
import MyNavLink from "./MyNavLink";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

export default function MobileDropdown() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(false);
    }

    return (
        <div className="sm:hidden ">

            <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 bg-gray-200 rounded"
            >
                {open ? <CiMenuFries /> : <CiMenuBurger />}
            </button>


            {open && (
                <div className="absolute right-0  mt-3 bg-gray-200 shadow-lg rounded">
                    <ul className="flex flex-col">
                        <MyNavLink to={'/'} onClick={handleClick}>
                            <RiHome2Line />
                            <span>Home</span>
                        </MyNavLink>

                        <MyNavLink to={'/timeline'} onClick={handleClick}>
                            <LuClock3 />
                            <span>Timeline</span>
                        </MyNavLink>

                        <MyNavLink to={'/stats'} onClick={handleClick}>
                            <GoGraph />
                            <span>Stats</span>
                        </MyNavLink>
                    </ul>
                </div>
            )}
        </div>
    );
}