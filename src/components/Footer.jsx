import footerImg from '../../assets/logo-xl.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return (
        <footer className='bg-[#244D3F] pt-20 pb-7.5 flex flex-col gap-10'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-center gap-4 w-fit mx-auto'>
                    <img src={footerImg} alt="footerImg" className='w-60 sm:w-80 md:w-105' />
                    <p className='text-white/80  font-normal text-base text-center px-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <div className='flex flex-col w-fit text-center gap-4 mx-auto'>
                    <p className='font-medium text-xl text-white'>Social Links</p>

                    <div className='flex gap-3'>
                        <img src={instagram} alt="instagram" className='hover:scale-125 cursor-pointer ' />
                        <img src={facebook} alt="facebook"  className='hover:scale-125 cursor-pointer '/>
                        <img src={twitter} alt="twitter" className='hover:scale-125 cursor-pointer ' />
                    </div>
                </div>
            </div>

            <div className='border-t border-[#1A8862]/20 flex flex-col-reverse gap-5 sm:gap-15 sm:flex-row sm:w-9/12 justify-between mx-auto pt-7.5'>
                <div className='text-base font-normal text-[#FAFAFA]/50 text-center'>© 2026 KeenKeeper. All rights reserved.</div>
                <div className='flex justify-evenly gap-5 lg:gap-15 flex-wrap'>
                    <p className='text-base font-normal text-[#FAFAFA]/50 hover:text-white hover:underline transition duration-200 cursor-pointer'>Privacy Policy</p>
                    <p className='text-base font-normal text-[#FAFAFA]/50 hover:text-white hover:underline transition duration-200 cursor-pointer'>Terms of Service</p>
                    <p className='text-base font-normal text-[#FAFAFA]/50 hover:text-white hover:underline transition duration-200 cursor-pointer'>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;