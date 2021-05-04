import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style/style.css';

export default function Softech() {
    const [destination, setDestination] = useState([]);//Popular Destination
    const [boat, setBoat] = useState([]);//Boat
    const fetchDestination = async () => {
        try {
            const res = await axios.get('https://dev-boatflex-api.azurewebsites.net/api/Home/inspired');
            setDestination(res.data.countries);
        } catch (error) {
            console.log("error", error);
        }
    }
    const fetchBoat = async () => {
        try {
            const res = await axios.get('https://dev-boatflex-api.azurewebsites.net/api/Home/featuredboats');
            setBoat(res.data)
        } catch (error) {
            console.log("error", error);
        }
    }
    return (
        <div className="home">
            <h2>Popular Destinations</h2><button onClick={() => fetchDestination()}>Get Popular Destinations</button>
            {
                destination.map((item) => {
                    return (
                        <p>{item.name}</p>
                    )
                })
            }
            <hr />
            <div>
                <h2>Featured Boats</h2><button onClick={() => fetchBoat()}>Get Featured'Boats</button>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Beds</th>
                            <th scope="col">Cabins</th>
                            <th scope="col">Currency</th>
                            <th scope="col">City</th>
                            <th scope="col">Price</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boat.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.beds}</td>
                                        <td>{item.cabins}</td>
                                        <td>{item.currency}</td>
                                        <td>{item.city}</td>
                                        <td>{item.price}</td>
                                        <td><img style={{width: "50px", height: "50px"}} src={item.photos[0].imageUrl}></img></td>
                                        <td>{item.model}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
