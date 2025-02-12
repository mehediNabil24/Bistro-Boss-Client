import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading={"Add an Item"}
        subheading={"What's New?"}
      ></SectionTitle>
      <div>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Name?</span>
            </div>
            <input
              {...register("name", {required:true})}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              autoComplete="off"
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
                className="select select-bordered w-full " autoComplete="off"
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
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
             
            </div>
            <textarea {...register('recipe',{required:true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
           
          </label>

          <div className="form-control w-full">
          <input {...register('image',{required:true})} type="file" className="file-input file-input-bordered w-full " />
          </div>

          <button className="btn">Add Items <FaUtensils className="ml-2"></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
