import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import authActions from "../redux/actions/auth-actions"
import Swal from "sweetalert2"

const Sidebar = () => {

    const userDetails = useSelector((state) => {
        return state.auth.userDetails
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return <>
        <div className="flex justify-between">

            <h3 className="text-xl mt-6">
                Welcome, {userDetails.firstname}
            </h3>
            <h3 className="text-xl mt-8">
                <span onClick={() => {
                    
                    Swal.fire({
                        // title:"Logout",
                        text: "Are you sure you want to logout?",
                        icon: "question",
                        showCancelButton: true,
                        denyButtonText: 'No',
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No',
                        customClass: {
                            cancelButton: "order-1",
                            confirmButton: "order-2",
                            denyButton: "order-3"
                        }

                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(authActions.logout())
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
                }}>
                    <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 384.971 384.971" xml:space="preserve">
                        <g>
                            <g id="Sign_Out">
                                <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
C192.485,366.299,187.095,360.91,180.455,360.91z"/>
                                <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
                            </g>
                        </g>
                    </svg>
                </span>
            </h3>
        </div>


        <div className="flex justify-between mt-4">

            <span className="flex flex-row" onClick={() => { 
                navigate("/dashboard")
            }}>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"
                    width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                    <g>
                        <path d="M20.1,26H44c0.7,0,1.4-0.5,1.5-1.2l4.4-15.4c0.3-1.1-0.5-2-1.5-2H11.5l-0.6-2.3c-0.3-1.1-1.3-1.8-2.3-1.8
H4.6c-1.3,0-2.5,1-2.6,2.3C1.9,7,3.1,8.2,4.4,8.2h2.3l7.6,25.7c0.3,1.1,1.2,1.8,2.3,1.8h28.2c1.3,0,2.5-1,2.6-2.3
c0.1-1.4-1.1-2.6-2.4-2.6H20.2c-1.1,0-2-0.7-2.3-1.7v-0.1C17.4,27.5,18.6,26,20.1,26z"/>
                        <circle cx="20.6" cy="44.6" r="4" />
                        <circle cx="40.1" cy="44.6" r="4" />
                    </g>
                </svg>
                Dashboard
            </span>

            <span className="flex flex-row" onClick={() => { 
                navigate("/cart")
            }}>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"
                    width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                    <g>
                        <path d="M20.1,26H44c0.7,0,1.4-0.5,1.5-1.2l4.4-15.4c0.3-1.1-0.5-2-1.5-2H11.5l-0.6-2.3c-0.3-1.1-1.3-1.8-2.3-1.8
H4.6c-1.3,0-2.5,1-2.6,2.3C1.9,7,3.1,8.2,4.4,8.2h2.3l7.6,25.7c0.3,1.1,1.2,1.8,2.3,1.8h28.2c1.3,0,2.5-1,2.6-2.3
c0.1-1.4-1.1-2.6-2.4-2.6H20.2c-1.1,0-2-0.7-2.3-1.7v-0.1C17.4,27.5,18.6,26,20.1,26z"/>
                        <circle cx="20.6" cy="44.6" r="4" />
                        <circle cx="40.1" cy="44.6" r="4" />
                    </g>
                </svg>
                Cart
            </span>

            <span className="flex flex-row" onClick={() => { 
                navigate("/history")
             }}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M12 8V12L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.60414 5.60414L5.07381 5.07381V5.07381L5.60414 5.60414ZM4.33776 6.87052L3.58777 6.87429C3.58984 7.28556 3.92272 7.61844 4.33399 7.62051L4.33776 6.87052ZM6.87954 7.6333C7.29375 7.63539 7.63122 7.30129 7.6333 6.88708C7.63538 6.47287 7.30129 6.1354 6.88708 6.13332L6.87954 7.6333ZM5.07496 4.3212C5.07288 3.90699 4.73541 3.5729 4.3212 3.57498C3.90699 3.57706 3.5729 3.91453 3.57498 4.32874L5.07496 4.3212ZM3.82661 10.7849C3.88286 10.3745 3.59578 9.99627 3.1854 9.94002C2.77503 9.88377 2.39675 10.1708 2.3405 10.5812L3.82661 10.7849ZM18.8622 5.13777C15.042 1.31758 8.86873 1.27889 5.07381 5.07381L6.13447 6.13447C9.33358 2.93536 14.5571 2.95395 17.8016 6.19843L18.8622 5.13777ZM5.13777 18.8622C8.95796 22.6824 15.1313 22.7211 18.9262 18.9262L17.8655 17.8655C14.6664 21.0646 9.44291 21.0461 6.19843 17.8016L5.13777 18.8622ZM18.9262 18.9262C22.7211 15.1313 22.6824 8.95796 18.8622 5.13777L17.8016 6.19843C21.0461 9.44291 21.0646 14.6664 17.8655 17.8655L18.9262 18.9262ZM5.07381 5.07381L3.80743 6.34019L4.86809 7.40085L6.13447 6.13447L5.07381 5.07381ZM4.33399 7.62051L6.87954 7.6333L6.88708 6.13332L4.34153 6.12053L4.33399 7.62051ZM5.08775 6.86675L5.07496 4.3212L3.57498 4.32874L3.58777 6.87429L5.08775 6.86675ZM2.3405 10.5812C1.93907 13.5099 2.87392 16.5984 5.13777 18.8622L6.19843 17.8016C4.27785 15.881 3.48663 13.2652 3.82661 10.7849L2.3405 10.5812Z" fill="#1C274C" />
                </svg>
                History
            </span>

        </div>
        
    </>
}

export default Sidebar