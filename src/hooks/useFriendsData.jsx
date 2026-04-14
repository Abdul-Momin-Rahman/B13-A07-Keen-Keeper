import { useEffect, useState } from "react";

let cachedFriends = null;

const useFriendsData = () => {


    const [friends, setFriends] = useState(cachedFriends || []);
    const [loading, setLoading] = useState(!cachedFriends);

    useEffect(() => {

        if(!cachedFriends){
            
            const fetchData = async () => {
                const response = await fetch('/friends.json');
                const data = await response.json();
    
                setTimeout(() => {
                    cachedFriends = data;
                    setFriends(data);
                    setLoading(false);
                }, 2000)
            }
    
            fetchData();
        }
        
    }, [])

    return {friends, loading}
};

export default useFriendsData;