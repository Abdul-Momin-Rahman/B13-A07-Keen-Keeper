import React from 'react';

const SummaryCard = ({headText, paraText}) => {
    return (
        <div className='p-8 bg-white shadow-lg rounded-lg flex items-center justify-center sm:flex-col gap-5 sm:gap-2 text-center  w-full'>
            <h1 className='text-[#244D3F] font-semibold text-[32px]'>{headText}</h1>
            <p className='text-[#64748B] text-lg font-normal'>{paraText}</p>
        </div>
    );
};

export default SummaryCard;