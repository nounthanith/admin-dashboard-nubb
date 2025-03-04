import api from "../../utils/api"

const useSignOut = () => {
    const signout = async () => {
        try {
            const res = await api.get('/api/auth/signout')
            if(res.data){
                window.location.href = '/signin'
            }
        } catch (err) {
            console.log(err)
        }
    }
    return{
        signout
    }
}

export default useSignOut