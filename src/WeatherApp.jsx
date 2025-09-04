import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [info , setinfo] = useState({
            // city : "Delhi",
            // feels_like : 30,
            // temp : 25.84,
            // min : 25,
            // max : 25.84,
            // humidity: 47,
            // weather : "Haze"
    });
    let updateInfo= (newinfo)=>{
        setinfo(newinfo);
    };
    return(
        <div>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info ={info}/>
        </div>
    );
}