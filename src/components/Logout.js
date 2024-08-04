import React from 'react'
import style from './logout.module.css'
import { logout } from '../reduxStore/userSlice'
import { useDispatch } from 'react-redux'

const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className={style.container}>
            <p>HELLO, YOU CAN LOGOUT BY CLICKING THE BUTTON!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout