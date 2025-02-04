import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserType = ({ title, description, lockupPeriod, buyingRate, sellingRate }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full max-w-xs">
        {/* title */}
        <div className="bg-blue-900 text-white text-center py-4 rounded-t-lg">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-center text-gray-300 mb-4">{description}</p>
        </div>
        {/* description */}
        <div className="p-4">
            <ul className="text-gray-700 mb-4">
                <li className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mr-2" />
                    {lockupPeriod}
                </li>
                <li className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mr-2" />
                    {buyingRate}
                </li>
                <li className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mr-2" />
                    {sellingRate}
                </li>
            </ul>
            <Link to="/UserSignup">
                <button className="bg-blue-900 text-white hover:bg-blue-800 transition duration-300 w-full py-2 rounded-lg">Get Started</button>
            </Link>
        </div>
    </div>
);

export default UserType; 