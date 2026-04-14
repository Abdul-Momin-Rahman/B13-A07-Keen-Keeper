import { DotLoader } from "react-spinners";
import useFriendsData from "../hooks/useFriendsData";
import ProfileCard from "../UI/ProfileCard";


const YourFriend = () => {

    const { friends, loading } = useFriendsData();

    if (loading) return <div className="h-[50vh] flex justify-center items-center gap-20 bg-[#F8FAFC]">
        <DotLoader color="#244D3F" />
        <span className="text-2xl font-semibold text-[#244D3F]">Loading Please Wait....</span>
    </div>



    return (
        <div className="bg-[#F8FAFC] pb-20">
            <div className=" px-5 sm:px-0 md:w-fit  mx-auto space-y-4">
                <h2 className="font-semibold text-2xl text-[#1F2937] text-center sm:text-left">Your Friends</h2>

                <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5  ">
                    {
                        friends.map(friend => <ProfileCard key={friend.id} friend={friend}></ProfileCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default YourFriend;