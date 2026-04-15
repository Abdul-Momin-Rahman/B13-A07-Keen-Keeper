import React from 'react';
import { Link } from 'react-router';

const ProfileCard = ({ friend }) => {

    const {id, picture, name, days_since_contact, tags, status } = friend;

    const bgColor = (status === 'On-Track' ? 'bg-[#244D3F]' : status === 'Overdue' ?  'bg-[#EF4444]' : 'bg-[#EFAD44]')

    return (
        <Link onClick={()=> window.scrollTo(0, 0)} to={`/friend/${id}`} className='p-6 rounded-xl shadow-lg bg-white flex flex-col items-center justify-center gap-3 text-center min-w-55 w-full mx-auto 
        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-[#244D3F]
        '>

            <img src={picture} alt={name} className='rounded-full ' />

            <div className='flex flex-col gap-2'>

                <h2 className='text-[#1F2937] font-semibold text-3xl sm:text-xl'>{name}</h2>

                <p className='text-[#64748B] font-normal text-xl sm:text-xs'>{days_since_contact}d ago</p>

                <div className='flex gap-2 items-center justify-center'>
                    {tags.map((tag, i) => <p className='text-[#244D3F] sm:text-xs font-medium bg-[#CBFADB] p-2 rounded-2xl' key={i}>{tag}</p>)}
                </div>

                <div className={`${bgColor} p-2 rounded-2xl text-white w-fit mx-auto sm:text-xs font-medium`}>
                    {status}
                </div>
            </div>
        </Link>
    );
};

export default ProfileCard;