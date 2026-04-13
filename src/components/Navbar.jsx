import logoImg from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { LuClock3 } from 'react-icons/lu';

const Navbar = () => {
    return (
        <nav className='shadow-sm '>
            <div className='flex justify-between items-center py-4 container mx-auto'>
                <img src={logoImg} alt="" />

                <div className='flex items-center gap-1'>
                    <NavLink to={'/'} className={({ isActive }) => `btn btn-ghost text-[#64748B] font-medium px-4 py-3 rounded-lg ${isActive && ' bg-[#244D3F] text-white font-bold'}`}>
                        <RiHome2Line />
                        <span>Home</span>
                    </NavLink>

                    <NavLink to={'/timeline'} className={({ isActive }) => `btn btn-ghost text-[#64748B] font-medium px-4 py-3 rounded-lg ${isActive && ' bg-[#244D3F] text-white font-bold'}`}>
                        <LuClock3 />
                        <span>Timeline</span>
                    </NavLink>

                    <NavLink to={'/stats'} className={({ isActive }) => `btn btn-ghost text-[#64748B] font-medium px-4 py-3 rounded-lg ${isActive && ' bg-[#244D3F] text-white font-bold'}`}>
                        <GoGraph />
                        <span>Stats</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;