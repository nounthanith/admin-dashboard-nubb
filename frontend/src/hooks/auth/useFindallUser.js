import { useEffect, useState } from 'react';
import api from '../../utils/api';

const useFindAllUser = (searchQuery = '') => {
    const [allUser, setAllUser] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
        // re-run fetchData whenever searchQuery changes
    }, [searchQuery]);

    const fetchData = async () => {
        try {
            // If a search query is provided, append it as a query parameter
            const url = searchQuery 
                ? `/api/auth/count?name=${encodeURIComponent(searchQuery)}`
                : '/api/auth/count';
            const res = await api.get(url);
            // console.log(res.data.data);
            setAllUser(res.data.totalUsers);
            setUsers(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    return { allUser, users };
};

export default useFindAllUser;
