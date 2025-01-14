import React, { useState } from 'react';
import "../App.css";

const Contact = () => {
   const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            setSubmissionStatus('success');
            setFName('');
            setLName('');
            setEmail('');
            setMessage('');
        } else {
            setSubmissionStatus('failed');
        }
    };

    return (
        <div className='flex justify-center py-20' id='contact'>
            <div className='w-[92%] py-10 background bg-[#002540]'>
                <div className='flex flex-col  md:ml-20'>
                    <div className='bg-gradient-to-r from-[#a454b8] to-[#d58836cd] w-[40px] h-[10px] rounded-lg '></div>
                    <a href="tel:+2348117740077">
                        {/* <h3 className='text-white text-2xl' id='contact' >Contact Us</h3> */}
                        <h3 className='text-white text-2xl' id='contact-class' >Contact Us</h3>
                        {/* text-2xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent */}
                    </a>
                </div>
                <div className='flex justify-center mt-6'>
                    <form onSubmit={handleSubmit} className='flex flex-col text-center justify-center md:w-[60%] md:gap-10 gap-5'>
                        <div className='flex justify-center text-2xl'>
                            <h2 className='text-[20px] md:text-2xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent'>Get In Touch</h2>
                        </div>

                        <input
                            type="text"
                            className='bg-gray-700 p-4 text-white outline-none'
                            name='fName'
                            placeholder='First Name'
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            className='bg-gray-700 p-4 text-white outline-none'
                            name='lName'
                            placeholder='Last Name'
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            className='bg-gray-700 p-4 text-white outline-none'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <textarea
                            name="message"
                            className='bg-gray-700 p-4 text-white outline-none'
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        {/* Submission Status Message */}
                        {submissionStatus === 'success' && (
                            <p className="text-green-500 mt-4">
                                Successfully!
                            </p>
                        )}
                        {submissionStatus === 'failed' && (
                            <p className="text-red-500 mt-4">
                                Oops! Something went wrong. Please try again.
                            </p>
                        )}

                        <div className='flex justify-center'>
                            <button type='submit' className='bg-blue-500  px-8 py-4 rounded text-white' id='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact