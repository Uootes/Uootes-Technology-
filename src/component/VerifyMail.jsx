import React from 'react'

const VerifyMail = () => {
    return (
        <div className='flex w-full items-center w-full h-screen md:m-auto px-2 max-w-md'>
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg   ">
                {/* heading */}
                <h1 className="text-2xl font-bold mb-4 text-center">Verify your email</h1>
                <p className="text-center mb-6">Please enter the 6 digit code sent to your email
                </p>
                {/* input box */}
                <div className="flex justify-center space-x-2 mb-6">
                    <input type="text" maxLength="1" className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" maxLength="1" className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" maxLength="1" className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" maxLength="1" className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" maxLength="1" className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" maxLength="1" className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                {/* resend link */}
                <div className="text-center mb-6">
                    <a href="#" className="text-gray-300 hover:underline">Resend code</a>
                </div>
                {/* confirm button */}
                <button className="w-full py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Continue</button>

                {/* changed mail link */}
                <div className="text-center mt-4">
                    <a href="#" className="text-gray-300 hover:underline">Change email</a>
                </div>
            </div>
        </div>
    )
}

export default VerifyMail