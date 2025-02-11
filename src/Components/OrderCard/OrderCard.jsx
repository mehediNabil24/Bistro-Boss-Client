import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const OrderCard = ({item}) => {
    const {name, image, price, recipe,_id} = item;
    // const {user} = useAuth();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] =useCart();
    const axiosSecure =useAxiosSecure();
    const handleAddtoCart = ()=>{
     

      if( user && user.email){
       
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to the cart`,
              showConfirmButton: false,
              timer: 1500
            });
            
          }
          refetch()
          
        })
        
      }
      else{
        Swal.fire({
          title: "Please log in?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: " Yes, Log in!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from:location}});
           
          }
        });
      }
    }
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <p className="absolute right-0 top-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
    <img className='object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddtoCart} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;