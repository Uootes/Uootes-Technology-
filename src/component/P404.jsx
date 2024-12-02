import React from 'react';
import { Link } from 'react-router-dom';

const P404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-700">Coming Soon</h1>

                <p className="text-2xl text-gray-500 mt-4">We're working hard to bring this page to you. Stay tuned!.</p>


                <Link to="/" className="mt-6 inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition duration-300">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default P404;