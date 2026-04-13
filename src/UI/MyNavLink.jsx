import { NavLink } from "react-router";


const MyNavLink = ({to ,children}) => {
    return (
        <NavLink to={to} className={({ isActive }) => `btn btn-ghost text-[#64748B] font-medium px-4 py-3 rounded-lg ${isActive && ' bg-[#244D3F] text-white font-bold'}`}>
            {children}
        </NavLink>
    );
};

export default MyNavLink;