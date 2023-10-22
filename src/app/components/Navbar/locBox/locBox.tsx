import "./locBox.css";
import { MdOutlineCancel } from "react-icons/md";
import {useSelector,useDispatch} from "react-redux";
import { RootState,AppDispatch } from "@/redux/store";
import { counter2 } from "@/redux/features/toggle2Slice";

let LocBox=()=>{
    let selector=useSelector((state:RootState)=>state.toggle2);
    let dispatch=useDispatch<AppDispatch>();
    return(
        <div className={(selector?" click-loc-vis ":" click-loc-no-vis ")+" click-location gap-2"}>
                <div className="flex flex-row justify-between">
                    <p>Change the location</p>
                    <MdOutlineCancel className="cancel-btn" size={"1.1rem"} onClick={()=>dispatch(counter2())} />
                </div>
                <div className="location-input flex flex-row gap-2 items-center">
                    <button className="p-1 text-sm">Detect my location</button>
                    <p className="text-xs p-1" >OR</p>
                    <input type="text" placeholder="enter your location" />
                </div>
            </div>
    );
}

export default LocBox;