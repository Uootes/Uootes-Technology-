import React from 'react';
import UserType from './UserType';

const UserTypesList = () => (
    <div className='flex flex-col justify-center items-center h-auto'>
        {/* <img src="/assets/utlogo.png" alt="uooteslogo" /> */}
        <img src="src/assets/utlogo.png" alt="" className="h-10 md:h-20" />
        <h2 className='text-white text-2xl md:text-6xl font-bold'>ACCOUNT TYPE</h2>
        <div className=" flex flex-col md:flex-row justify-center items-center mx-2 md:m-0">

            <UserType
                title="BRONZE"
                description="Register without referral I.D"
                lockupPeriod="360-hour token lockup period before selling is permitted."
                buyingRate="Buying rate per Token: 0.0000301 GSC"
                sellingRate="Selling rate per Token: 0.00005 GSC"
                
            />
            <UserType
                title="SILVER"
                description="Register with referral I.D or Unlock with 1.00 coupon"
                lockupPeriod="168-hour token lockup period before selling is permitted."
                buyingRate="Buying rate per Token: 0.0000258 GSC"
                sellingRate="Selling rate per Token: 0.00005 GSC"
            />
            <UserType
                title="GOLD"
                description="Become a Silver user and refer at least 5 people directly."
                lockupPeriod="72-hour token lockup period before selling is permitted."
                buyingRate="Buying rate per Token: 0.0000215 GSC"
                sellingRate="Selling rate per Token: 0.00005 GSC"
            />
        </div>
    </div>
);

export default UserTypesList;