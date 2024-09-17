import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const inputRef = useRef();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/users/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        setError(data.message);
      }
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8 px-3">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full px-5">
        <h3 className="font-bold text-2xl mb-4 py-4">
          Sign in or create an account
        </h3>
        <p className="text-gray-600 mb-6">
          Use a minimum of 10 characters, including uppercase letters, lowercase
          letters, and numbers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label value="Username" />
            <TextInput
              type="text"
              id="username"
              placeholder="Enter your username"
              className="mt-1"
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <div>
            <Label value="Email address" />
            <TextInput
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="mt-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Enter your address" />
            <TextInput
              type="address"
              id="address"
              placeholder="Enter your address"
              className="mt-1"
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
          <div>
            <Label value="Confirm password" />
            <TextInput
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
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
        {error && (
          <Alert color="failure" className="mt-3">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Signup;
