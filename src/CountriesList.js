import React, {useState} from 'react';
import axios from 'axios';
import './Style/style.css';
//Countries api key   =>   5807a054-23a5-477a-869a-240b45e39b14
const List = ()=>{
    const[List,setList] = useState([]);//country
    const[Slist,setSlist] = useState([]);//state
    const fetchList = async() =>{
        try {
            const country = await axios.get('https://holidayapi.com/v1/countries?pretty&key=5807a054-23a5-477a-869a-240b45e39b14')
            //for countries name
            //console.log(country.data.countries.length);
            //console.log(country.data.countries[0].subdivisions.length);
            setList(country.data.countries);
            console.log(country.data.countries)
        } catch (error) {
            console.log("Error",error);
        }
    }
    const handleCountryChange= (e)=>{
        console.log(e.target.value);
        const state = e.target.value;
        console.log(List)
        for (const item of List) {
            if (item.name === state) {
                console.log(item.subdivisions)
                setSlist(item.subdivisions);
            }
          }
          
    }
    return(
        <div className="parent">
            
            <button onClick={()=>fetchList()} id="btn-head">Get List Of Countries & Their States</button><br />
            <h2 className="headCountry">Countries</h2>
            <select onChange={(e)=>handleCountryChange(e)} className="selectCtn">
                <option>Select The Country</option>
                {
                    List.map((item)=>{
                        return(
                            <option>{item.name}</option>
                        )
                    })
                }
            </select>
            <h2 className="headState">States</h2>
            <select onChange={(e)=>handleCountryChange(e)} className="selectSt">
                {
                    Slist.map((item)=>{
                        return(
                            <option>{item.name}</option>
                        )
                    })
                }
            </select>
            
        </div>
    )
};
export default List;