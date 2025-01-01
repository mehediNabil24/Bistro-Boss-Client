import React from 'react';
import OrderCard from '../../../Components/OrderCard/OrderCard';

const OrderTab = ({items}) => {
    return (
         <div className='md:grid grid-cols-3 gap-10 my-8'>
                   {
                       items?.map(item=> <OrderCard key={item._id} item={item}></OrderCard>)
                   }
               </div>
    );
};

export default OrderTab;