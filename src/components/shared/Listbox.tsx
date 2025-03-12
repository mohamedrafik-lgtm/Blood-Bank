"use client";
import { useState } from 'react';
import { Option } from '@/interface/index'
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';




interface IListbox{
    options: Option[],
    label:string
}

export default function ListBox({label,options}:IListbox) {
  const [selected, setSelected] = useState<Option>(options[0]);

  const handleSelect = (value: Option) => {
    setSelected(value); 
  };
  return (
    <div className="w-72">
      <label className="block text-xl font-semibold mb-2">{label}</label>
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-2xl bg-white py-3 pl-4 pr-10 text-left shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="w-5 h-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-auto rounded-2xl bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-red-100 text-red-900' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="w-5 h-5 text-red-500" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
