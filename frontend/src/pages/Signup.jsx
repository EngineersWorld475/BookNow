import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';

const Signup = () => {
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
        <div className="flex flex-col gap-4">
          <div>
            <Label value="Email address" />
            <TextInput
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="mt-1"
            />
          </div>
          <div>
            <Label value="Password" />
            <TextInput
              type="password"
              id="password"
              placeholder="Enter a password"
              className="mt-1"
            />
          </div>
          <div>
            <Label value="Confirm password" />
            <TextInput
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="mt-1"
            />
          </div>
          <div className="mt-4">
            <Button className="w-full">Create account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
