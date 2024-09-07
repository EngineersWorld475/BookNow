import React from 'react';
import TrendingDesinations from '../components/TrendingDesinations';

const Home = () => {
  return (
    <div className="min-h-screen w-full mx-auto">
      {/* Top section */}
      <div className="md-h-96 flex flex-col md:flex-row bg-blue-700 w-full">
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <h1
            className="font-bold text-white mb-4"
            style={{ fontSize: '4rem' }}
          >
            Sign in, save money
          </h1>
          <p className="text-white text-xl font-thin max-w-md">
            Save 10% or more at participating properties – just look for the
            blue Genius label. Sign in or register
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center p-4 min-h-full bg-blue-700">
          <img
            src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-three-gifts-boxes-presents-png-image_11627194.png"
            alt="Description"
            className="w-100 h-100"
          />
        </div>
      </div>
      {/* Second section */}
      <div className="flex flex-col gap-2 px-10 py-7">
        <h1 className="font-bold text-2xl">Offers</h1>
        <p className="text-gray-700 ">
          Promotions, deals, and special offers for you
        </p>
      </div>
      {/* Third section */}
      <div className="flex flex-col  md:flex-row justify-center gap-5 mb-5  px-10 md:h-52">
        {/* first section */}
        <div className="flex flex-row w-full md:w-1/2 items-center justify-center text-center border border-gray-500 rounded-lg">
          <div>
            <h1 className="font-bold text-2xl">
              Fly away to your dream vacation
            </h1>
            <p>Get inspired – compare and book flights with flexibility</p>
          </div>
          <div className="flex w-44 h-14  items-center mx-5">
            <img
              src="https://www.pngitem.com/pimgs/m/22-225238_flight-png-photos-flight-png-transparent-png.png"
              alt=""
            />
          </div>
        </div>
        {/* second section */}
        <div className="w-full md:w-1/2 overflow-hidden border border-gray-600 rounded-lg object-cover relative">
          <img
            src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/350960127.jpeg?k=e2732d40882766c8edd0001d7cca566de1d43af2d117b964f2e3ccf579d9a498&o="
            alt="banner_img"
            height={10}
          />
          <div className="absolute top-3 left-3">
            <h1 className="font-bold text-2xl text-white">Seize the moment!</h1>
            <p className="w-80 text-sm text-white">
              Save 15% or more when you book and stay before October 1, 2024z
            </p>
            <button className="px-3 py-2 bg-blue-600 text-white font-semibold mt-3">
              Find Gateway Deals
            </button>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="flex flex-col gap-2 px-10 py-7">
        <h1 className="font-bold text-2xl">Trending destinations</h1>
        <p className="text-gray-700 ">
          Travelers searching for India also booked these
        </p>
      </div>
      <TrendingDesinations />
    </div>
  );
};

export default Home;
