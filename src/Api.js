import React, {useState} from 'react';
import axios from 'axios';

const Api = ()=>{
    const[users,setuser] = useState([]);
    const fetchusers = async () =>{
        //network return promise await
        try {
            const userData = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log("UserData", userData.data);
            setuser(userData.data);
        } catch (error) {
            console.log("err",error);
        }
    }
    return (
        <div className="parent">
            <h1 className="title">Welcome Users
                {/*console.log(users.length)*/}
            </h1>
            <button id="btn" onClick={()=> fetchusers()} >Fetch</button>
            {/*<h3>{users.length!==0 ? <p>{users[0].name}</p> : "No Data"}</h3>*/}
            {
                users.map((item)=>{
                    return(
                        <div className="main">
                            <h3 className="head"><span id="sph">Name:</span>{item.name}</h3>
                            <p className="sub-head"><span id="sps">Email:</span>{item.email}</p>
                        </div>
                        
                    )
                })
            }
        </div>
        
    )
};
export default Api;
