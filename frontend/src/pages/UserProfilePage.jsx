import { Dropdown, FooterDivider, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileUpdateSuccess } from '../redux/user/userSlice';

const UserProfilePage = () => {
  const showUsernameInputRef = useRef(null);
  const showEmailInputRef = useRef(null);
  const showPhoneInputRef = useRef(null);
  const showAddressInputRef = useRef(null);
  let { currentUser } = useSelector((state) => state.booknowuser);
  const [formData, setFormData] = useState({});
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showNationalityInput, setShowNationalityInput] = useState(false);
  const [showGenderInput, setShowGenderInput] = useState(false);
  const [showAddressInput, setShowAddressInput] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (showUsernameInput && showUsernameInputRef.current) {
      showUsernameInputRef.current.focus();
    }
  }, [showUsernameInput]);
  useEffect(() => {
    if (showEmailInput && showEmailInputRef.current) {
      showEmailInputRef.current.focus();
    }
  }, [showEmailInput]);
  useEffect(() => {
    if (showPhoneInput && showPhoneInputRef.current) {
      showPhoneInputRef.current.focus();
    }
  }, [showPhoneInput]);
  useEffect(() => {
    if (showAddressInput && showAddressInputRef.current) {
      showAddressInputRef.current.focus();
    }
  }, [showAddressInput]);

  const handleSubmit = async () => {
    try {
      showUsernameInput && setShowUsernameInput(false);
      showEmailInput && setShowEmailInput(false);
      showPhoneInput && setShowPhoneInput(false);
      showNationalityInput && setShowNationalityInput(false);
      showGenderInput && setShowGenderInput(false);
      showAddressInput && setShowAddressInput(false);
      const res = await fetch(`/api/users/update-user/${currentUser?._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.refreshToken}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(profileUpdateSuccess(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser);

  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      <div className="flex flex-col min-w-80 p-3 mb-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row gap-5 justify-center overflow-hidden items-center">
            <h1 className="font-bold text-3xl mt-4">Personal Details</h1>
            <img
              src={currentUser?.profilePicture}
              alt="user_profile_picture"
              className="rounded-lg w-12 h-12 mt-5"
            />
          </div>
          <p className="mt-3 font-light text-gray-600">
            Update your information and find out how it's used.
          </p>
        </div>
        <FooterDivider />
        <div className="flex flex-row justify-between">
          <p>Name</p>
          {showUsernameInput ? (
            <>
              <TextInput
                id="username"
                placeholder="Enter the username"
                className="w-56"
                ref={showUsernameInputRef}
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 hover:bg-gray-400 hover:text-white hover:font-semibold"
                  onClick={() => setShowUsernameInput(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-2 py-1 mt-3 hover:bg-blue-600 hover:text-white hover:font-semibold"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500">{currentUser?.username}</p>
              <button
                className="px-3 py-1 bg-blue-600 text-white font-semibold"
                onClick={() => setShowUsernameInput(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
        <FooterDivider />
        <div className="flex flex-row justify-between">
          <p>Email address</p>
          {showEmailInput ? (
            <>
              <TextInput
                id="email"
                placeholder="Enter your email"
                ref={showEmailInputRef}
                className="w-56"
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 hover:bg-gray-400 hover:text-white hover:font-semibold"
                  onClick={() => setShowEmailInput(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-2 py-1 mt-3 hover:bg-blue-600 hover:text-white hover:font-semibold"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500">{currentUser?.email}</p>
              <button
                className="px-3 py-1 bg-blue-600 text-white font-semibold"
                onClick={() => setShowEmailInput(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
        <FooterDivider />
        <div className="flex flex-row justify-between">
          <p>Phone number</p>
          {showPhoneInput ? (
            <>
              <TextInput
                id="phoneNumber"
                placeholder="Enter your phone number"
                ref={showPhoneInputRef}
                className="w-56"
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 hover:bg-gray-400 hover:text-white hover:font-semibold"
                  onClick={() => setShowPhoneInput(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-2 py-1 mt-3 hover:bg-blue-600 hover:text-white hover:font-semibold"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500">
                {currentUser
                  ? currentUser.phoneNumber
                  : `Add your phone number`}
              </p>
              <button
                className="px-3 py-1 bg-blue-600 text-white font-semibold"
                onClick={() => setShowPhoneInput(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
        <FooterDivider />
        <div className="flex flex-row justify-between">
          <p>Nationality</p>
          {showNationalityInput ? (
            <>
              <Select className="w-56" id="nationality" onChange={handleChange}>
                <option>Select your nationality</option>
                <option>Belgium</option>
                <option>China</option>
                <option>Denmark</option>
                <option>England</option>
                <option>Finland</option>
                <option>Germany</option>
                <option>India</option>
                <option>Italy</option>
                <option>Poland</option>
                <option>United states of America</option>
              </Select>
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 hover:bg-gray-400 hover:text-white hover:font-semibold"
                  onClick={() => setShowNationalityInput(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-2 py-1 mt-3 hover:bg-blue-600 hover:text-white hover:font-semibold"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500">
                {currentUser
                  ? currentUser.nationality
                  : `Select the country/region you are from`}
              </p>
              <button
                className="px-3 py-1 bg-blue-600 text-white font-semibold"
                onClick={() => setShowNationalityInput(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
        <FooterDivider />
        <div className="flex flex-row justify-between">
          <p>Gender</p>
          {showGenderInput ? (
            <>
              <Select className="w-56" id="gender" onChange={handleChange}>
                <option>Select your gender</option>
                <option>I am a man</option>
                <option>I am a women</option>
                <option>I am non binary</option>
                <option>I prefer not to say</option>
              </Select>
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 hover:bg-gray-400 hover:text-white hover:font-semibold"
                  onClick={() => setShowGenderInput(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-2 py-1 mt-3 hover:bg-blue-600 hover:text-white hover:font-semibold"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500">
                {currentUser ? currentUser.gender : `Select your gender`}
              </p>
              <button
                className="px-3 py-1 bg-blue-600 text-white font-semibold"
                onClick={() => setShowGenderInput(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
        <FooterDivider />
        <div className="flex flex-row justify-between">
          <p>Address</p>
          {showAddressInput ? (
            <>
              <TextInput
                id="address"
                placeholder="Enter the username"
                className="w-56"
                ref={showAddressInputRef}
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <button
                  className="px-2 py-1 hover:bg-gray-400 hover:text-white hover:font-semibold"
                  onClick={() => setShowAddressInput(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-2 py-1 mt-3 hover:bg-blue-600 hover:text-white hover:font-semibold"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500">
                {currentUser ? currentUser.address : `Add your address`}
              </p>
              <button
                className="px-3 py-1 bg-blue-600 text-white font-semibold"
                onClick={() => setShowAddressInput(true)}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
