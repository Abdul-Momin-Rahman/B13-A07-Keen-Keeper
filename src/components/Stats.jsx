import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../Context/TimelineContext';
import { FaRegSadCry } from 'react-icons/fa';

const Stats = () => {

    const { timeline } = useContext(TimelineContext);

    const callInteraction = timeline.filter(time => time.typeOfCheckIn === 'Call');
    const textInteraction = timeline.filter(time => time.typeOfCheckIn === 'Text');
    const videoInteraction = timeline.filter(time => time.typeOfCheckIn === 'Video');

    const data = [
        { name: 'Call', value: callInteraction.length, fill: '#244D3F' },
        { name: 'Text', value: textInteraction.length, fill: '#7E35E1' },
        { name: 'Video', value: videoInteraction.length, fill: '#37A163' },
    ];

    return (
        <>
            {
                timeline.length > 0 ? <div className='bg-[#F8FAFC] py-20'>

                    <div className='sm:max-w-8/12 px-10 sm:px-0 mx-auto  space-y-6'>
                        <h1 className='text-[#1F2937] font-bold text-2xl sm:text-5xl text-center sm:text-left'>Friendship Analytics</h1>
                        <div className='p-8 bg-white rounded-2xl shadow-lg space-y-6 flex flex-col items-center'>
                            <p className='text-[#244D3F] font-medium text-xl w-full'>By Interaction Type</p>

                            <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '40', aspectRatio: 1 }} responsive>
                                <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                />
                                <Tooltip />
                            </PieChart>

                            <div className='flex gap-6'>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#244D3F]"></span>
                                    <span>Call</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#7E35E1]"></span>
                                    <span>Text</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#37A163]"></span>
                                    <span>Video</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                    :

                    <div className='bg-[#F8FAFC] text-5xl text-[#1F2937] font-bold text-center h-screen flex flex-col gap-5 items-center justify-center'>
                        <FaRegSadCry /> Your Timeline is empty
                    </div>
            }
        </>
    );
};

export default Stats;