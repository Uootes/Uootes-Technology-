import React from 'react'

const Btn = () => {
    return (
        <section class="bg-gradient-to-r from-purple-500 to-orange-500 p-4 md:p-8 rounded-lg md:flex justify-between items- center">
            <div>
                <p>Request Early access To Get Started</p>
                <b class="text-black mb-4">Register today & start exploring the endless possibilities.</b>
            </div>
            <button class="bg-black text-white py-2 px-9 rounded-full"><a href="/signup_user">Get Started</a></button>
        </section>
    )
}

export default Btn