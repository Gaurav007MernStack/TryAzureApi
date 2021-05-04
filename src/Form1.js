import React, { useState } from 'react';

export const SimpleForm1 = ()=>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const handleFirstChange=(e)=>{
        setFirstName(e.target.value);
    };
    const handleLastChange=(e)=>{
        setLastName(e.target.value);
    };

    const OnFormSubmit = (e)=>{
        e.preventDefault();
        console.log("first",firstName);
        console.log("last",lastName);
    };

    return(
        <div>
            <form onSubmit={(e)=>OnFormSubmit(e)}>
                <div>
                    <input 
                    type="text" 
                    placeholder="firstName" 
                    value={firstName}
                    onChange={handleFirstChange}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="lastName" 
                    value={lastName}
                    onChange={handleLastChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
        </div>
    )
};