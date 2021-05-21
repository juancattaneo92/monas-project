import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [profile, setProfile] = useState([]);
    const [user, setUser] = useState({});
    

    const getUser = async () => {
        const response = await fetch(`api/users/${window.currentUser.id}`)
        const user = await response.json() 
        setUser(user)
        console.log(user)
    }

    useEffect(()=> {
        getUser()
    }, [])

    return (
        <div className="profile-container">
            <div>
                PROFILE
                {user.name}
            </div>
        </div>
    )
}

export default Profile