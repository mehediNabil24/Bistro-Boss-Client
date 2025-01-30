import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
           {
            isAdmin? <>
             <li><NavLink to={'/dashboard/adminHome'}> <FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to={'/dashboard/addItems'}> <FaUtensils></FaUtensils> Add Items</NavLink></li>
            <li><NavLink to={'/dashboard/manageItems'}> <FaList></FaList> Manage Items</NavLink></li>
            <li><NavLink to={'/dashboard/manageBookings'}> <FaBook></FaBook> Manage Bookings</NavLink></li>
            <li><NavLink to={'/dashboard/allUsers'}> <FaUser></FaUser> All Users</NavLink></li>
            </>: <>
            <li><NavLink to={'/dashboard/userHome'}> <FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink></li>
            <li><NavLink to={'/dashboard/reservation'}> <FaCalendar></FaCalendar> Reservation</NavLink></li>
            <li><NavLink to={'/dashboard/review'}> <FaAd></FaAd> Add A Review</NavLink></li>
            <li><NavLink to={'/dashboard/bookings'}> <FaList></FaList> My Bookings</NavLink></li>
            </>
           }
            <div className="divider divider-neutral"></div>
            {/* shared items  */}
            <li><NavLink to={'/'}> <FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to={'/menu'}> <FaSearch></FaSearch> Menu</NavLink></li>
            <li><NavLink to={'/contact'}> <FaEnvelope></FaEnvelope> Contact Us</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
