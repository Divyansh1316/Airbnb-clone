"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date()); //new date gives today's date
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    const params = new URLSearchParams({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests: noOfGuests.toString(),
    });
    router.push(`/search?${params.toString()}`);
  };

  // const search = () => {
  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       noOfGuests,
  //     },
  //   });
  // };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* sticky stics to the top, z-index tells which layer its on(its gonna bring it to front always) */}

      {/* left div */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 w-32 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} //get the value/text in text box
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your seach"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right div */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer"></GlobeAltIcon>
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6"></MenuIcon>
          <UserCircleIcon className="h-6"></UserCircleIcon>
        </div>
      </div>
      {/* check if search box has some value and is not empty */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-grey-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
