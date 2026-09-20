
import { getDataByEmail } from '@/lib/allGet';
import { userSession } from '@/lib/session';
import React from 'react';
import MyProduct from './MyProduct';

const MyProductPage = async () => {

    const user = await userSession()
    const email=user?.email
    const myData = await getDataByEmail(email)
    console.log(myData, 'from my product');
    return (
        <div>
          <MyProduct myData={myData}/>
        </div>
    );
};

export default MyProductPage;