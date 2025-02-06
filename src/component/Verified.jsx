import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Verified = () => {
    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg text-center max-w-sm mx-auto">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                    Verified!
                </h1>
                <p className="text-gray-700 mb-6">Yahooo! You have successfully verified the account</p>
                <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">Go to Dashboard</button>
            </div>
        </div>
    );
}

export default Verified;
