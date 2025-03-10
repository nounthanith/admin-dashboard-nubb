import { useEffect, useState } from "react"
import api from "../../utils/api"

const useCategory = (page = 1, limit = 10, search = '')=>{
    const [categories, setCategories] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [totalItem, setTotalItem] = useState(0)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await api.get(
                    `/api/category?page=${page}&limit=${limit}&search=${search}`
                );
                setCategories(res.data.data)
                setTotalPage(res.data.totalPages)
                setTotalItem(res.data.totalItems)
                // console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData()
    }, [limit, page, search]);
    return {
        categories, totalPage, totalItem
    }
};
export default useCategory