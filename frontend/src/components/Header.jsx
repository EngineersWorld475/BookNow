import React from 'react';
import { TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaPlane, FaBed, FaCar } from 'react-icons/fa';
import { MdHotel, MdLocalTaxi } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="w-full px-4  bg-blue-700 flex flex-col md:flex-row md:items-center md:justify-between py-5">
        <div className="mx-5">
          <Link
            to="/"
            className="font-extrabold text-white tracking-wide text-xl"
          >
            BookNow.com
          </Link>
        </div>

        <form className="flex mt-4 md:mt-0 md:flex-grow md:max-w-lg">
          <TextInput
            type="text"
            placeholder="Search here..."
            rightIcon={AiOutlineSearch}
            className="w-full"
          />
        </form>

        <div className="flex flex-col md:flex-row md:gap-5 mt-4 md:mt-0">
          <h1 className="text-sm text-white font-semibold cursor-pointer hover:underline">
            About
          </h1>
          <h1 className="text-sm text-white font-semibold cursor-pointer hover:underline">
            Contact us
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
          <Link
            to="/register"
            className="px-4 py-2 bg-white text-blue-600 font-semibold text-sm border border-blue-400 rounded hover:bg-blue-100 transition-colors duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-blue-600 font-semibold text-sm border border-blue-400 rounded hover:bg-blue-100 transition-colors duration-300"
          >
            Sign in
          </Link>
        </div>
      </div>
      <div className="flex flex-row scroll gap-10 px-3 md:px-10 bg-blue-700 text-white py-5">
        <div className="flex items-center gap-2 hover:rounded-full  md:hover:bg-blue-500 md:hover:px-2 py-2 transition-all 300 cursor-pointer">
          <FaBed size={24} />
          <h1>Stays</h1>
        </div>
        <div className="flex items-center gap-2 hover:rounded-full  md:hover:bg-blue-500 md:hover:px-2 py-2 transition-all 300 cursor-pointer">
          <FaPlane size={24} />
          <h1>Flights</h1>
        </div>
        <div className="flex items-center gap-2 hover:rounded-full  md:hover:bg-blue-500 md:hover:px-2 py-2 transition-all 300 cursor-pointer">
          <MdHotel size={24} />
          <h1>Flight + Hotel</h1>
        </div>
        <div className="flex items-center gap-2 hover:rounded-full  md:hover:bg-blue-500 md:hover:px-2 py-2 transition-all 300 cursor-pointer">
          <FaCar size={24} />
          <h1>Car rentals</h1>
        </div>
        <div className="flex items-center gap-2 hover:rounded-full  md:hover:bg-blue-500 md:hover:px-2 py-2 transition-all 300 cursor-pointer">
          <MdLocalTaxi size={24} />
          <h1>Airport taxis</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
