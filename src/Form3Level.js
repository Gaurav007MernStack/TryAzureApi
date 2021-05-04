import React, { useState } from 'react';

export const LevelForm3 = ()=>{
    //const [firstCountry,setFirstName] = useState("");
    //const [State,setState] = useState("");
    const [userData,setuserData] = useState({
        Country: "",
        State: ""
    });
    const handleCountryChange=(e)=>{
        const {name, value} = e.target
        setuserData({...userData,[name]:value})
        //if(name==="Country"){
        //    setuserData({...userData,[Country]:value})
        //}
        //else{
        //    setuserData({...userData,[Country]:value})
        //}
        
    };

    const OnFormSubmit = (e)=>{
        e.preventDefault();
        console.log(userData);
    };
    console.log(userData);
    return(
        <>
            <form onSubmit={(e)=>OnFormSubmit(e)}>
                <div>
                <input 
                    type="text" 
                    placeholder="Country" 
                    value={userData.Country}
                    name="Country"
                    onChange={(e)=>handleCountryChange(e)}/>
                </div>
                <div>
                <input 
                    type="text" 
                    placeholder="State" 
                    value={userData.State}
                    name="State"
                    onChange={(e)=>handleCountryChange(e)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <h3>{userData.Country}</h3>
            <h3>{userData.State}</h3>
        </>
    );
};