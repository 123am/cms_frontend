import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"
import dataActions from "../redux/actions/data-actions"
import { image_base_url } from "../utilities/Constant"
import Sidebar from "../components/Sidebar"
import OneCard from "../components/OneCard"
import Topbar from "../components/Topbar"

const HistoryCmp = () => {
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => {
        return state.auth.userDetails
    })
    const cms_dashboard = useSelector((state) => {
        return state.data.cms_dashboard
    })

    const {
        register,
        setValues,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    console.log(userDetails.userRoleName, "userDetailsuserDetails")
    useEffect(() => {
        dispatch(dataActions.dashboard())
    }, [])

    let data = ["{}", "{itm}", "{itm}", "{itm}", "{itm}", "{itm}"]

    return <>
        <div className="flex flex-row w-[100vw] h-[100vh]">
            <div className="flex border bg-gray-100 flex-col w-[25vw] items-center">
                <div className="flex flex-col w-[90%]">
                    <Sidebar />
                </div>
            </div>
            <div className="flex flex-col w-[75vw] items-center">
                <Topbar/>
                {
                    cms_dashboard.filter(itm => itm.title.includes(filter)).length ? <><div className="grid grid-cols-4 gap-2 w-full m-4 p-4">

                        {
                            cms_dashboard.filter(itm => itm.title.includes(filter)).sort(function (a, b) { return sort == "hl" ? b.price - a.price : a.price - b.price }).map((itm) => {
                                return <>
                                    <OneCard itm={itm} />
                                </>
                            })
                        }
                    </div></> : <>
                        <h6>
                            No Record Found
                        </h6>
                    </>
                }
            </div>
        </div>
    </>
}



export default HistoryCmp