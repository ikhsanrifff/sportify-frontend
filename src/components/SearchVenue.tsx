"use client";
import { Combobox, Transition } from '@headlessui/react';
import { SearchVenueProps } from '../../types';
import { useState, Fragment } from "react";
import Image from 'next/image';
import { venues } from '../../constants';

const SearchVenue = ({ venue, setVenue }: SearchVenueProps) => {
  const [query, setQuery] = useState('');

  const filteredVenues =
    query === ""
      ? venues
      : venues.filter((item) => (
        item.toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, "")
          )))

  return (
    <div>
      <div className='bg-white h-max rounded-lg'>
        <Combobox >
          <div className='w-full'>

            <Combobox.Input
              className={'relative bg-white text-gray-400 p-3 rounded-lg'}
              placeholder='Nama Venue'
              displayValue={(venue: string) => venue}
              onChange={(e) => setQuery(e.target.value)}
            />

            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options>
                {filteredVenues.length === 0 &&
                  query !== "" ? (
                  <Combobox.Option
                    value={query}
                    className={'absolute h-max'}
                  >
                    Create "{query}"
                  </Combobox.Option>
                ) : (
                  filteredVenues.map((item) => (
                    <Combobox.Option
                      key={item}
                      className={({ active }) => `
                      relative ${active ? ' bg-slate-400 text-white' : 'text-gray-500'}
                      `}
                      value={item}
                    >
                      {item}
                    </Combobox.Option>
                  )))}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>

  )
}

export default SearchVenue