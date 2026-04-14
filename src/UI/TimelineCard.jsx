import React from 'react';

const TimelineCard = ({time}) => {

    // console.log(time)
    return (
        <div className='p-4 w-full bg-white rounded-xl shadow-lg flex gap-4 items-center'>
            <div><img src={time.icon} alt="" className='w-10 h-10' /></div>
            <div className='space-y-1'>
                <p className='text-[#64748B] text-lg font-normal flex gap-2'><span className='text-[#244D3F] font-medium text-xl'>{time.typeOfCheckIn}</span> with {time.name}</p>
                <p className='text-[#64748B] font-medium text-base'>{time.date}</p>
            </div>
        </div>
    );
};

export default TimelineCard;