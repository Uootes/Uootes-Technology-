import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../index.css';
import Gll from '../assets/Gll.jpg';

const tokenGroup = [
    {
        id: 1,
        image: Gll,
        username: 'Ethan Carter',
        tokenlevel: 'Highest CPT tokens purchased',
        tokenAmount: '500,000 CPT',
        groupNo: '01',
    },
    // C:\Users\PC\Desktop\New uootes\Uootes-Technology-\src\assets\Gll.jpg
    {
        id: 2,
        image: Gll,
        username: 'Ethan Carter',
        tokenlevel: 'Highest Direct Invite',
        tokenAmount: '100',
        groupNo: '02',
    },
    {
        id: 3,
        image: Gll,
        username: 'Ethan Carter',
        tokenlevel: 'Highest Net Invite',
        tokenAmount: '200,000',
        groupNo: '03',
    },
];

const Carouselgroup = ({ tokenGroup = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % tokenGroup.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [tokenGroup.length]);

    return (
        <div className="carousel-container flex w-full h-32 md:my-20 mb-3 pb-20">
            {tokenGroup.map((items, index) => (
                <div
                    key={items.id}
                    className={`carousel-item bg-gradient-to-l from-blue-900 to-gray-900 flex flex-row justify-between items-center h-full md:w-[70%] md:px-2 md:ml-[-46rem] ml-[-18.95rem] px-2 mx-2 ${index === currentIndex ? 'active' : ''} ${index === (currentIndex + 1) % tokenGroup.length ? 'next' : ''}`}
                >
                    <div className='text-[#fff] font-bold flex flex-row'>
                        <div className="my-auto w-[100px] h-20">
                            <img src={items.image} alt={items.username} className="w-full h-full object-cover" />
                        </div>
                        <div className="">
                            <p className="text-[13px] md:text-lg font-semibold">{items.username}</p>
                            <p className="md:text-[13px] text-sm">{items.tokenlevel}</p>
                            <p className="md:text-[13px] text-sm text-[#ffd700]">{items.tokenAmount}</p>
                        </div>
                    </div>
                    <div className="text-white opacity-40 md:text-6xl text-4xl md:mr-8">{items.groupNo}</div>
                </div>
            ))}
        </div>
    );
}

Carouselgroup.defaultProps = {
    tokenGroup: [], // Default to an empty array if no tokenGroup is provided
};

Carouselgroup.propTypes = {
    tokenGroup: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            tokenlevel: PropTypes.string.isRequired,
            tokenAmount: PropTypes.string.isRequired,
            groupNo: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Carouselgroup;