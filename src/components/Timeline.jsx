import React, { useContext, useState } from 'react';
import { TimelineContext } from '../Context/TimelineContext';
import TimelineCard from '../UI/TimelineCard';
import { FaRegSadCry } from 'react-icons/fa';

const Timeline = () => {

    const { timeline } = useContext(TimelineContext);

    const [status, setStatus] = useState("");

    const callInteraction = timeline.filter(time => time.typeOfCheckIn === 'Call');
    const textInteraction = timeline.filter(time => time.typeOfCheckIn === 'Text');
    const videoInteraction = timeline.filter(time => time.typeOfCheckIn === 'Video');

    return (
        <div className='bg-[#F8FAFC] py-20'>
            <div className=' sm:w-7/12 px-10 sm:px-0  mx-auto'>
                <h1 className='text-[#1F2937] text-5xl font-bold text-center sm:text-left'>Timeline</h1>

                <div className='py-6 '>
                    <select className="select select-bordered bg-[#F8FAFC] text-black rounded-xl px-4  max-w-xs border border-gray-300 p-2   outline-0 focus:ring-2 focus:ring-gray-200"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="" disabled={true} className='text-[#64748B]'>Filter timeline</option>
                        <option value="Call" className='text-[#64748B]'>Call</option>
                        <option value="Text" className='text-[#64748B]'>Text</option>
                        <option value="Video" className='text-[#64748B]'>Video</option>
                    </select>

                </div>

                <div className='space-y-6 min-h-40'>
                    {
                        timeline.length === 0 ?
                            <div className='text-5xl text-[#1F2937] font-bold text-center h-[50vh] flex flex-col gap-5 items-center justify-center'>
                                <FaRegSadCry /> Your Timeline is empty
                            </div> 

                            : status === "" ?
                                [...timeline].reverse().map((time, index) => <TimelineCard time={time} key={index}></TimelineCard>) 

                                :status === "Call" ?
                                    callInteraction.length === 0 ?
                                        <h2 className='text-[#1F2937] text-2xl font-bold text-center h-40 flex flex-col gap-5 items-center justify-center'>You have no Calls.</h2> 
                                            :[...callInteraction].reverse().map((time, index) => <TimelineCard time={time} key={index}></TimelineCard>) 

                                :status === "Text" ? 
                                    textInteraction.length === 0 ?
                                        <h2 className='text-[#1F2937] text-2xl font-bold text-center h-40 flex flex-col gap-5 items-center justify-center'>You have no Texts</h2> 
                                            :[...textInteraction].reverse().map((time, index) => <TimelineCard time={time} key={index}></TimelineCard>) 

                                :status === "Video" ?
                                    videoInteraction.length === 0 ?
                                        <h2 className='text-[#1F2937] text-2xl font-bold text-center h-40 flex flex-col gap-5 items-center justify-center'>You have no Video</h2>
                                            : [...videoInteraction].reverse().map((time, index) => <TimelineCard time={time} key={index}></TimelineCard>)
                                : null

                                       
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;