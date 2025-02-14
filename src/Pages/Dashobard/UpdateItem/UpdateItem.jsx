import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaUtensils } from 'react-icons/fa';
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api =`https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
const UpdateItem = () => {
    const {name,recipe,price,category,image,_id} = useLoaderData();
    
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0]}
    const res= await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'Content-Type':'multipart/form-data'
        }
    })
    console.log(res.data)
    if(res.data.success)
    {
        const menuItem ={
            name: data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url,


        }
        const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem)
        console.log(menuRes.data)
        if(menuRes.data.modifiedCount>0){
            Swal.fire({
                title: `${data.name} is added`,
                text: "Good Job",
                icon: "success"
              });
        }
        // reset();
    }
    
}
    return (
        <div>
            <SectionTitle heading={"Update An Item"} subheading={"Refresh Item"}></SectionTitle>
            <div>
                    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                          {...register("name", {required:true})}
                          type="text"
                          defaultValue={name}
                          placeholder="Type here"
                          className="input input-bordered w-full"
                          
                        />
                      </label>
            
                      <div className="flex gap-2 ">
                        {/* category  */}
                        <label className="form-control w-full ">
                          <div className="label">
                            <span className="label-text">Category</span>
                          </div>
                          <select
                            {...register("category",{required:true})}
                            className="select select-bordered w-full " defaultValue={category}
                          >
                            <option disabled selected>
                              Choose Category
                            </option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                          </select>
                        </label>
            
                        {/* price  */}
                        <label className="form-control w-full ">
                          <div className="label">
                            <span className="label-text">Price</span>
                          </div>
                          <input
                            {...register("price",{required:true})}
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full" defaultValue={price}
                          />
                        </label>
                      </div>
            
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Recipe Details</span>
                         
                        </div>
                        <textarea defaultValue={recipe} {...register('recipe',{required:true})}
                          className="textarea textarea-bordered h-24"
                          placeholder="Recipe Details"
                        ></textarea>
                       
                      </label>
            
                      <div className="form-control w-full">
                      <input {...register('image',{required:true})} type="file" className="file-input file-input-bordered w-full " />
                      </div>
            
                      <button className="btn">Update the Item <FaUtensils className="ml-2"></FaUtensils></button>
                    </form>
                  </div>
            
            
        </div>
    );
};

export default UpdateItem;