import { useParams } from 'react-router';
import useFriendsData from '../hooks/useFriendsData';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import SummaryCard from '../UI/SummaryCard';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { FiVideo } from 'react-icons/fi';
import { useContext } from 'react';
import { TimelineContext } from '../Context/TimelineContext';
import UseCurrentDate from '../hooks/UseCurrentDate';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { toast, Zoom } from 'react-toastify';


const FriendDetails = () => {

    const { id } = useParams();

    const { friends, loading } = useFriendsData();

    const { timeline, SetTimeline } = useContext(TimelineContext);

    const date = UseCurrentDate();

    const handleCheckIn = (typeOfCheckIn) => {


        const checkInObj = {
            typeOfCheckIn,
            name,
            date,
            icon: typeOfCheckIn === 'Call' ? callIcon : typeOfCheckIn === 'Text' ? textIcon : videoIcon
        }

        SetTimeline([...timeline, checkInObj]);

        toast(`Starting ${typeOfCheckIn} with ${name}`, 
        
            {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        });
    }

    if (loading) return <div className='text-center h-[70vh] flex flex-col items-center justify-center gap-10 bg-[#F8FAFC]'>
        <div className="flex w-75 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>

        <p className='text-3xl text-[#1F2937] font-semibold'>Loading Please Wait...</p>
    </div>


    const expectedFriend = friends.find((friend) => friend.id === Number(id))

    const { picture, name, tags, status, days_since_contact, goal, next_due_date, bio, email } = expectedFriend;

    const bgColor = (status === 'On-Track' ? 'bg-[#244D3F]' : status === 'Overdue' ? 'bg-[#EF4444]' : 'bg-[#EFAD44]')

    return (

        <div className=' bg-[#F8FAFC] py-20'>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between gap-6'>

                <div className='lg:w-[30%] space-y-4 flex flex-col'>
                    {/* Left */}
                    <div className='p-6 rounded-xl shadow-lg bg-white flex flex-col items-center justify-center gap-3 text-center  w-full mx-auto '>

                        <img src={picture} alt={name} className='rounded-full ' />

                        <div className='flex flex-col gap-2'>

                            <h2 className='text-[#1F2937] font-semibold text-4xl sm:text-xl'>{name}</h2>

                            <div className='flex gap-2 items-center justify-center'>
                                {tags.map((tag, i) => <p className='text-[#244D3F] sm:text-xs font-medium bg-[#CBFADB] p-2 rounded-2xl' key={i}>{tag}</p>)}
                            </div>

                            <div className={`${bgColor} p-2 rounded-2xl text-white w-fit mx-auto sm:text-xs font-medium`}>
                                {status}
                            </div>

                            <p className='font-medium text-base text-[#64748B] '>{bio}</p>

                            <p className='font-normal text-sm text-[#64748B] '>Email: {email}</p>
                        </div>
                    </div>

                    <div className='space-y-2'>

                        <div className='p-4 flex gap-2 justify-center items-center bg-white rounded-xl shadow-lg hover:scale-102 cursor-pointer'>
                            <RiNotificationSnoozeLine />
                            <p className='font-medium text-base text-[#1F2937]'>Snooze 2 weeks</p>
                        </div>

                        <div className='p-4 flex gap-2 justify-center items-center bg-white rounded-xl shadow-lg hover:scale-102 cursor-pointer'>
                            <HiOutlineArchiveBox />
                            <p className='font-medium text-base text-[#1F2937]'>Archive</p>
                        </div>

                        <div className='p-4 flex gap-2 justify-center items-center text-[#EF4444] bg-white rounded-xl shadow-lg hover:scale-102 cursor-pointer'>
                            <RiDeleteBinLine />
                            <p className='font-medium text-base '>Delete</p>
                        </div>
                    </div>
                </div>




                <div className='lg:w-[65%] space-y-6'>
                    {/* right */}

                    <div className='stats-cards flex flex-col lg:flex-row justify-center  gap-6'>
                        <SummaryCard headText={days_since_contact} paraText={'Days Since Contact'} ></SummaryCard>
                        <SummaryCard headText={goal} paraText={'Goal (Days)'} ></SummaryCard>
                        <SummaryCard headText={next_due_date} paraText={'Next Due'} ></SummaryCard>
                    </div>

                    <div className='relationship-card p-6 rounded-xl shadow-lg bg-white flex flex-col justify-between gap-4'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#244D3F] font-medium text-xl'>Relationship Goal</p>
                            <button className='btn btn-md'>Edit</button>
                        </div>

                        <p className='text-[#64748B] font-normal text-lg text-center sm:text-left sm:w-fit '>Connect every <span className='text-[#1F2937] font-bold'>{goal} days</span></p>
                    </div>

                    <div className='quick-card px-6 py-6 rounded-xl shadow-lg bg-white flex flex-col justify-between gap-4'>
                        <p className='text-[#244D3F] font-medium text-xl text-center sm:text-left'>Quick Check-In</p>

                        <div className='flex  gap-6 justify-between'>
                            <button
                                onClick={() => handleCheckIn('Call')}
                                className='p-8 bg-[#F8FAFC] shadow-lg rounded-lg flex flex-col gap-2 items-center text-center w-full cursor-pointer  hover:border border-[#244D3F'>
                                <h1 className='text-[#244D3F] font-semibold text-[32px]'><LuPhoneCall /></h1>
                                <p className='text-[#1F2937] text-lg font-normal'>Call</p>
                            </button>
                            <button
                                onClick={() => handleCheckIn('Text')}
                                className='p-8 bg-[#F8FAFC] shadow-lg rounded-lg flex flex-col gap-2 items-center text-center w-full cursor-pointer  hover:border border-[#244D3F '>
                                <h1 className='text-[#244D3F] font-semibold text-[32px]'><MdOutlineTextsms /></h1>
                                <p className='text-[#1F2937] text-lg font-normal'>Text</p>
                            </button>
                            <button
                                onClick={() => handleCheckIn('Video')}
                                className='p-8 bg-[#F8FAFC] shadow-lg rounded-lg flex flex-col gap-2 items-center text-center w-full cursor-pointer  hover:border border-[#244D3F'>
                                <h1 className='text-[#244D3F] font-semibold text-[32px]'><FiVideo /></h1>
                                <p className='text-[#1F2937] text-lg font-normal'>Video</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;