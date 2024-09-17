import { Button, Label, TextInput } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';

const Signin = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-100 py-0 px-3">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full px-5 mt-20">
        <h3 className="font-bold text-2xl mb-4 py-4">
          Sign in or create an account
        </h3>

        <div className="flex flex-col gap-4">
          <div>
            <Label value="Email address" />
            <TextInput
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="mt-1"
              ref={inputRef}
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

          <div className="mt-4">
            <Button className="w-full">Create account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
