import React from 'react'
import { Link } from 'react-router-dom'

const Btn = () => {
    return (
        <section className="bg-gradient-to-r from-purple-500 to-orange-500 p-4 md:p-8 rounded-lg md:flex justify-between items-center">
            <div>
                <p>Request Early access To Get Started</p>
                <b className="text-black mb-4">Register today & start exploring the endless possibilities.</b>
            </div>
            <Link to="/signup"><button className="bg-black text-white border-black py-2 px-9 rounded-full">Get Started</button></Link>
        </section>
    )
}

export default Btn