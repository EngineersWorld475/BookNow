import React, { useState } from 'react';
import { Alert, Avatar, Dropdown, Spinner, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  FaPlane,
  FaBed,
  FaCar,
  FaUserCircle,
  FaSuitcase,
  FaComment,
  FaHeart,
  FaSignOutAlt,
} from 'react-icons/fa';
import { MdHotel, MdLocalTaxi } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutSuccess, signOutStart } from '../redux/user/userSlice';

const Header = () => {
  const { currentUser, loading } = useSelector((state) => state.booknowuser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignOut = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch(`/api/users/logout`, {
        method: 'POST',
      });
      const data = await res.json();
      dispatch(signOutSuccess());
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
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

        <div className="flex flex-row gap-10 justify-center items-center mt-7 md:mt-0">
          <h1 className="text-sm text-white font-semibold cursor-pointer hover:underline">
            About
          </h1>
          <h1 className="text-sm text-white font-semibold cursor-pointer hover:underline">
            Contact us
          </h1>
          {currentUser ? (
            <div className="flex flex-row gap-4 items-center justify-center md:pr-10">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  loading ? (
                    <Spinner size="sm" />
                  ) : (
                    <Avatar
                      alt="user"
                      img={currentUser.profilePicture}
                      rounded
                    />
                  )
                }
              >
                <Link to="/user-account">
                  <Dropdown.Header className="flex flex-row gap-4 cursor-pointer">
                    <FaUserCircle size={15} />
                    <p>Manage Account</p>
                  </Dropdown.Header>
                </Link>
                <Link to="#">
                  <Dropdown.Item className="flex flex-row gap-4 cursor-pointer">
                    <FaSuitcase size={15} />
                    <p>Bookings & Trips</p>
                  </Dropdown.Item>
                </Link>
                <Link to="#">
                  <Dropdown.Item className="flex flex-row gap-4 cursor-pointer">
                    <FaComment size={15} />
                    <p>Reviews</p>
                  </Dropdown.Item>
                </Link>
                <Link to="#">
                  <Dropdown.Item className="flex flex-row gap-4 cursor-pointer">
                    <FaHeart size={15} />
                    <p>Saved</p>
                  </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Link to="#">
                  <Dropdown.Item
                    className="flex flex-row gap-4 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    <FaSignOutAlt size={15} />
                    <p>Sign out</p>
                  </Dropdown.Item>
                </Link>
              </Dropdown>
            </div>
          ) : (
            <div className="md:mr-10">
              <Link
                to="/login"
                className="text-sm text-white font-semibold cursor-pointer hover:underline"
              >
                Sign in
              </Link>
            </div>
          )}
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
      {errorMessage && (
        <Alert color={'failure'} className="mt-2">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default Header;
