import React, { useState } from 'react';

export const LevelForm2 = ()=>{
    //const [firstName,setFirstName] = useState("");
    //const [email,setemail] = useState("");
    const [data,setData] = useState({
        name: "",
        email: ""
    });
    const handleNameChange=(e)=>{
        //setData({name: e.target.value});
        if(e.target.name === "name"){
            //setData({name: e.target.value});
            setData((prevValue)=>{
                return{
                    email: prevValue.email,
                    name: e.target.value
                };
            });
        }
        else{
            //setData({email: e.target.value});
            setData((prevValue)=>{
                return{
                    name: prevValue.name,
                    email: e.target.value
                };
            });
        }
    };

    const OnFormSubmit = (e)=>{
        e.preventDefault();
        //console.log("first",name);
        //console.log("last",email);
        console.log(data);
    };
    console.log(data);
    return(
        <>
            <form onSubmit={(e)=>OnFormSubmit(e)}>
                <div>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={data.name}
                    name="name"
                    onChange={(e)=>handleNameChange(e)}/>
                </div>
                <div>
                <input 
                    type="text" 
                    placeholder="email" 
                    value={data.email}
                    name="email"
                    onChange={(e)=>handleNameChange(e)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
        </>
    );
};