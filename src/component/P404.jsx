import React from 'react';
import { Link } from 'react-router-dom';

const P404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-700">404</h1>

                <p className="text-2xl text-gray-500 mt-4">Oops! The page you're looking for doesn't exist.</p>

                <p className="text-xl text-gray-400 mt-2">You might have followed an incorrect link, or the page may have been moved.</p>

                <Link to="/" className="mt-6 inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition duration-300">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default P404;