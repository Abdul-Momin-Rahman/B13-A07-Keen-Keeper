import logoImg from '../../assets/logo.png'
import { RiHome2Line } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { LuClock3 } from 'react-icons/lu';
import MyNavLink from '../UI/MyNavLink';
import MobileDropdown from '../UI/MobileDropdown';

const Navbar = () => {
    return (
        <nav className='shadow-sm px-2 sticky top-0 bg-base-100'>
            <div className='flex justify-between items-center py-4 container mx-auto'>
                <img src={logoImg} alt="" />


                <MobileDropdown></MobileDropdown>

                <div className=' items-center gap-1 hidden sm:flex'>

                    <MyNavLink to={'/'}>
                        <RiHome2Line />
                        <span>Home</span>
                    </MyNavLink>

                    <MyNavLink to={'/timeline'}>
                        <LuClock3 />
                        <span>Timeline</span>
                    </MyNavLink>

                    <MyNavLink to={'/stats'}>
                        <GoGraph />
                        <span>Stats</span>
                    </MyNavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;