"use client";
import { RegisterData } from "@/data";
import { IRegister } from "@/interface";
import {  useState } from "react";

const RegisterForm =()=>{
    const [register,setRegister] = useState<IRegister>({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        city_id:'',
        phone:'',
        d_o_d:'',
        blood_type_id:'',
        governorate_id:'',
        last_donation_date:''
    })

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const { name, value } = e.target;
        setRegister({
            ...register,
            [name]:value
        })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
    };
    console.log(register)
    return (
        <form onSubmit={onSubmit} className="space-y-4 grid grid-cols-2 gap-5 mb-3">
           {RegisterData.map((data,idx) => (
            <div key={idx} className="flex flex-col space-y-3">
                <label className="text-xl text-red-800" htmlFor={data.name}>{data.label}</label>
                <input value={register[data.name]} onChange={handelChange} className="p-1.5 w-80 border-b transition duration-300 border-red-500 focus:rounded-md focus:outline-red-500" type={data.type}name={data.name}id={data.name} placeholder={data.placeholder} />
            </div>
           ))}
           <div className="w-full col-span-2 flex justify-center">
              <button type="submit" className="cursor-pointer border w-full px-28 py-2 rounded-lg bg-red-600 text-white  hover:bg-red-800 text-lg font-semibold ">Submit</button>
           </div>
        </form>
    )
}
export default RegisterForm;