import React from 'react';
import UserType from './UserType';

const UserTypesList = () => (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center m-2 md:m-0">
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
);

export default UserTypesList;