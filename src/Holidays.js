import React, {useState} from 'react';
import axios from 'axios';
//holiday api key  =>   5807a054-23a5-477a-869a-240b45e39b14
const Holidays = ()=>{
    const[days,setdays] = useState([]);
    const fetchdays = async() =>{
        try {
            const daysData = await axios.get('https://holidayapi.com/v1/holidays?pretty&key=5807a054-23a5-477a-869a-240b45e39b14&country=IN&year=2020');
            //console.log("daysData", daysData.data.holidays);
            setdays(daysData.data.holidays);
        } catch (error) {
            console.log("Error",error);
        }
    }
    return (
        <div className="parent">
            <h1 className="title">List OF Holidays 20-20</h1>
            <button id="btn" onClick={()=> fetchdays()}>Fetch_The_Days</button>
            {
                days.map((item)=>{
                    return(
                        <div className="main">
                            <h3 className="head"><span id="sph">Name:</span>{item.name}</h3>
                            <p className="sub-head"><span id="sps">Date:</span>{item.date}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    )
};
export default Holidays;