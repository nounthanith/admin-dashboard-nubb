import { useEffect, useState } from "react"
import api from "../../utils/api"

const useUser = ()=>{
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const res = await api.get('/api/auth/current')
                // console.log(res.data)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }
        fetchUser()
    },[])
    return{
        user,
        isLoading,
    }
}

export default useUser
