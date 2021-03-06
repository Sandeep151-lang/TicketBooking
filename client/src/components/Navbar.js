import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    const { state, dispatch } = props;
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const userdata = async () => {
        // const token = window.localStorage.getItem('jwt')
        try {

            const res = await axios.create({
                withCredentials: true,
                credentials: "include",
            }).get('/about')
            // console.log(res.data.message)
            if (res.status === 200) {
                localStorage.getItem('jwt');
                setdata(res.data.message);
                dispatch({ type: 'USER', payload: true })
                // console.log(res.data)
                setloading(false);
            }
        } catch (err) {
            setloading(loading);

        }
    }

    useEffect(() => {

        userdata()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <>
            <nav className='w3-card-4 d-flex justify-content-start'>
                {/* <p className='mx-5 my-3'>Movie</p> */}
                <img src='https://www.pngkey.com/png/detail/107-1070596_it-movie-logo-png-movies-logo-png.png' className=' movie-image' alt="Paris" width="60" height="60" style={{ 'objectFit': 'scale-down' }} />
                {state ? <Link to='/logout'> <button className=' butn'>Logout</button></Link> : <Link to='/login'> <button className=' butn'>Login</button></Link>}

            </nav>
        </>
    )
}

export default Navbar
