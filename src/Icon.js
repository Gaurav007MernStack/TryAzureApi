import React from 'react';
import './Style/style.css';
import {FaSistrix,FaBookmark,FaHeart,FaInbox,FaUser} from "react-icons/fa";

export default function Icon() {
    return (
        <div className="icon">
            <div className="setIcon"><FaSistrix id="fix" /> <p>Explore</p></div>
            <div className="setIcon"><FaBookmark id="fix" /> <p>Bookings</p></div>
            <div className="setIcon"><FaHeart id="fix" /> <p>Saved</p></div>
            <div className="setIcon"><FaInbox id="fix" /> <p>Inbox</p></div>
            <div className="setIcon"><FaUser id="fix" /> <p>Profile</p></div>
        </div>
    )
}
