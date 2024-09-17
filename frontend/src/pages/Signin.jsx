import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const inputRef = useRef();
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error: errorMessage } = useSelector(
    (state) => state.booknowuser
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch(`/api/users/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error) {
        return dispatch(signInFailure(data.error));
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      return dispatch(signInFailure(error.message));
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-100 py-0 px-3">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full px-5 mt-20">
        <h3 className="font-bold text-2xl mb-4 py-4">
          Sign in or create an account
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label value="Email address" />
            <TextInput
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="mt-1"
              ref={inputRef}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Password" />
            <TextInput
              type="password"
              id="password"
              placeholder="Enter a password"
              className="mt-1"
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <Button type="submit" className="w-full">
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Create account'
              )}
            </Button>
          </div>
        </form>
      </div>
      {errorMessage && (
        <Alert
          color={'failure'}
          className="flex justify-center items-center w-full mt-5 "
        >
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default Signin;
