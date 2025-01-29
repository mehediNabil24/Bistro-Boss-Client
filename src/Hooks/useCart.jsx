import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import { AuthContext } from '../Provider/AuthProvider';

const useCart = () => {
    // const {user} =useAuth();
    const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const {refetch,data: cart =[]} =useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async ()=>{
        const res =await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data
    }
  }) 
  return [cart,refetch] 
   
};

export default useCart;
