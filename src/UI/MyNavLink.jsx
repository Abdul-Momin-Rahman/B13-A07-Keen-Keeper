import { NavLink } from "react-router";


const MyNavLink = ({to ,children, onClick}) => {
    return (
        <NavLink to={to} onClick={onClick}  className={({ isActive }) => `btn btn-ghost text-[#64748B] font-medium text-base px-4 py-3 rounded-lg ${isActive && ' bg-[#244D3F] text-white font-bold'}`}>
            {children}
        </NavLink>
    );
};

export default MyNavLink;