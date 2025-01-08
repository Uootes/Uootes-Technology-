import React from 'react';

const UserType = ({ title, description, lockupPeriod, buyingRate, sellingRate }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full max-w-xs">
        {/* title */}
        <div className="bg-blue-900 text-white text-center py-4 rounded-t-lg">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-center text-gray-300 mb-4">{description}</p>
        </div>
        {/* description */}
        <div className="p-4">
            {/* <p className="text-center text-gray-700 mb-4">{description}</p> */}
            <ul className="text-gray-700 mb-4">

                <li className="flex items-center mb-2">
                    <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                    {lockupPeriod}
                </li>
                <li className="flex items-center mb-2">
                    <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                    {buyingRate}
                </li>
                <li className="flex items-center mb-2">
                    <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                    {sellingRate}
                </li>
            </ul>
            <button className="bg-blue-900 text-white w-full py-2 rounded-lg">Get Started</button>
        </div>
    </div>
);

export default UserType;