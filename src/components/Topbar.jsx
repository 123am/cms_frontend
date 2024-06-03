import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"

const Topbar = ({ itm }) => {


    let all_top_link={
        "dashboard":"Market Place",
        "listMyContent":"My Content Dashboard",
        "history":"Order History",
        "cart":"My Cart",
        "checkout":"Checkout"
    }
    console.log(window.location.pathname,"dhakjsdhsakdjas")
    return <h3 className="text-3xl">{all_top_link[window.location.pathname.replace("/","")]}</h3>
}

export default Topbar