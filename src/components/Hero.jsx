import React from 'react'
import '../style.css'
import groupImage from '../assets/Group 77.png'

const Hero = () => {
    return (
        <section className='hero'>
            <img src={groupImage} alt='group image' className='hero--image' />
            <h2 className='hero--title'>Online Experiences</h2>
            <span className='hero--txt'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</span>
        </section>
    )
}

export default Hero