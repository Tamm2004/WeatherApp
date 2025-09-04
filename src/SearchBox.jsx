import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';



export default function SearchBox({updateInfo}){
    let [city,setcity] = useState("");
    let [err , seterr] = useState(false);
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const key = "8b0c465155e89278ee7156233f1015cc";
    let getInfo = async () =>{
       try{
            let response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
            let json_res = await response.json();
            console.log(json_res);
            let result ={
            city : city,
            temp : json_res.main.temp,
            min : json_res.main.temp_min,
            max : json_res.main.temp_max,
            humidity: json_res.main.humidity,
            feels_like : json_res.main.feels_like,
            weather : json_res.weather[0].description,
            };
            console.log(result);
            return result;
       }catch(err){
        throw err;
       }
        
    };

    let handleChange = (evt) =>{
        setcity(evt.target.value);

    };
    let handleSubmit= async (evt)=>{
        try{
            evt.preventDefault();
            setcity("");
            let newinfo = await getInfo();
            updateInfo(newinfo);
        }catch(err){
            seterr(true);
            updateInfo({});
        }
        
    };
    return(
        <div className='searchbox'>
            <h3>Weather App</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                value={city} 
                onChange ={handleChange}
                required/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                <br/>
                {err && <p style={{color:"red"}}>  No such place!</p>}
            </form>
        </div>
    );
}