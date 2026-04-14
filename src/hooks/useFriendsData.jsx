import { useEffect, useState } from "react";

const useFriendsData = () => {


    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('/friends.json');
            const data = await response.json();

            setTimeout(() => {
                setFriends(data);
                setLoading(false);
            }, 1500)
        }

        fetchData();
    }, [])

    return {friends, loading}
};

export default useFriendsData;