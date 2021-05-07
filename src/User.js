import React, { useState } from 'react';
import axios from 'axios';

export default function User() {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const fetchUser = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            console.table(res.data)
            setData(res.data);
            di(res.data);
        } catch (error) {
            console.table("error", error);
        }
    };
    let dummyArr = [];
    //const dummy = () => {
    //    let dummyArr = [];
    //    for(let i= 0; i<data.length; i++){
    //        console.log(data[1])
    //    }
    //}
    let comp = ([]);
    let arr = [];
    const di = (data) => {
        console.log("start")
        console.log(data)
        const newArray = data.map(item => {
            return {
                id: item.id,
                name: item.name,
                username: item.username,
                email: item.email,
                phone: item.phone,
                website: item.website,
            }
        })
        setNewData(newArray)
    }
    const popmsg = (msg)=> {
        alert(msg)
    }
    return (
        <div>
            <button onClick={() => fetchUser()}>Get</button>
            
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>UserName</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Website</td>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        newData.map((item) => {
                                            return (
                                                <tr onClick={() => popmsg(item.name)}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.website}</td>
                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
        </div>
    )
}
