import { useDispatch } from "react-redux"
import { image_base_url } from "../utilities/Constant"
import dataActions from "../redux/actions/data-actions"

const OneCard = ({ itm }) => {


    const dispatch = useDispatch()


    const addToCart = (uniqueId) => {
        dispatch(dataActions.addToCart({"productUniqueId":uniqueId}, () => {
            
        }))
    }





    return <div className="flex flex-col w-full bg-blue-200 h-[22rem] rounded-xl p-2">
        <img src={image_base_url + itm.coverImage} />

        <div className="flex flex-col h-[18rem]">
            <span className="flex flex-row "><h5>Title : </h5> {itm.title}</span>
            <span className="flex flex-col"><h5>Description : </h5>  {itm.description.length > 84 ? itm.description.slice(0, 84) + "....." : itm.description}</span>
        </div>

        <hr className="bg-black h-1" />

        <div className="flex flex-row h-[4rem] justify-between pt-2">
            <span className="flex flex-row"><h5>Price : </h5>  ₹ {itm.price}</span>
            <span className="flex flex-row" onClick={() => {
                addToCart(itm.uniqueId)
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

            </span>
        </div>
    </div>
}

export default OneCard