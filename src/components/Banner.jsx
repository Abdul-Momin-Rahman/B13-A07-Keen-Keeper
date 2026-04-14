import React from 'react';
import { FaPlus } from 'react-icons/fa';
import SummaryCard from '../UI/SummaryCard';
import useFriendsData from '../hooks/useFriendsData';
import { ClipLoader } from 'react-spinners';


const Banner = () => {

    const { friends, loading } = useFriendsData();

    const total = friends.length;
    let onTrack = 0; 
    let needAttention = 0; 
    let interactions = 0; 

    for(const obj of friends) {
        if(obj.status === 'On-Track') {
            onTrack += 1;
        }
        else if(obj.status === 'Overdue') {
            needAttention += 1;
        }

        if(obj.days_since_contact <= 7) {
            interactions += 1;
        }
    }

    return (
        <div className='bg-[#F8FAFC] pt-20 pb-10'>
            <div className=' pb-10 flex flex-col gap-8 text-center '>
                <div className='w-fit mx-auto flex flex-col gap-4'>
                    <h1 className='text-[#1F2937] font-bold text-5xl px-2'>Friends to keep close in your life</h1>
                    <p className='text-[#64748B] text-base font-normal md:w-xl mx-auto px-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                </div>

                <button className='bg-[#244D3F] flex px-4 py-3 gap-1 items-center justify-between w-fit mx-auto rounded-lg btn btn-lg'>
                    <FaPlus className='text-white' />
                    <span className='text-white text-base font-semibold'>Add a Friend</span>
                </button>
            </div>

            <div className=' w-fit mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 items-stretch auto-rows-fr'>
                    <SummaryCard paraText={"Total Friends"} headText={loading? <ClipLoader color="#244D3F" /> :total}></SummaryCard>
                    <SummaryCard paraText={"On Track"} headText={loading? <ClipLoader color="#244D3F" /> :onTrack}></SummaryCard>
                    <SummaryCard paraText={"Need Attention"} headText={loading? <ClipLoader color="#244D3F" /> :needAttention}></SummaryCard>
                    <SummaryCard paraText={"Interactions This Week"} headText={loading? <ClipLoader color="#244D3F" /> :interactions}></SummaryCard>
                </div>

                <div className='mt-10 border text-[#E9E9E9]'></div>
            </div>


        </div>
    );
};

export default Banner;