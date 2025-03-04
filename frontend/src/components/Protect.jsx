import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/auth/useUser'

function Protect({children}) {

    const {user, isLoading} = useUser()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user && !isLoading){
            navigate('/signin')
        }
    }, [isLoading, user, navigate])

    if(isLoading){
        return(
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    }
    return children
}

export default Protect