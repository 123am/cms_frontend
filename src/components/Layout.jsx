import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const Layout = () => {
    let userDetails = useSelector((state) => {
        console.log(state, "statestatestate")
        return state.auth
    })

    const navigate = useNavigate()
    console.log(userDetails, "userDetailsuserDetails")

    

    useEffect(()=>{
        if (userDetails.userLogin) {
            navigate("/dashboard")
        } else {
            navigate("/login")
        }
    },[userDetails.userLogin])
    return (
        <>

        </>
    )
}

export default Layout
