import React from 'react'
import logo from '../assets/airbnb.png'
import '../style.css'

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt='Airbnb Logo' className='nav--logo'/>
        </nav>
    )
}

export default Navbar