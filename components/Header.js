import React from "react";
import Image from "next/legacy/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* sticky stics to the top, z-index tells which layer its on(its gonna bring it to front always) */}
      {/* left div */}
      <div className="relative flex items-center h-10 w-32 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain" // this maintians aspect ratio
          objectPosition="left"
        />
      </div>

      {/* middle div */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your seach"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right div */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6"></MenuIcon>
          <UserCircleIcon className="h-6"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
}

export default header;
