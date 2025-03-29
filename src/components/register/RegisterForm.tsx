"use client";
import { RegisterData } from "@/data";
import { IRegister } from "@/interface";
import { useRegisterMutation } from "@/lip/features/LoginThinkThunk";
import { useState } from "react";

const RegisterForm = () => {

    
    const [register, setRegister] = useState<IRegister>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        city_id: '',
        phone: '',
        d_o_d: '',
        blood_type_id: '',
        governorate_id: '',
        last_donation_date: ''
    });

    const [registerMutation, { isLoading, error }] = useRegisterMutation();

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegister({
            ...register,
            [name]: value
        });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result = await registerMutation(register).unwrap();
            console.log(result);

            
            setRegister({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                city_id: '',
                phone: '',
                d_o_d: '',
                blood_type_id: '',
                governorate_id: '',
                last_donation_date: ''
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4 grid grid-cols-2 gap-2 mb-3">
            {RegisterData.map((data, idx) => (
                <div key={idx} className="flex flex-col space-y-3">
                    <label className="text-xl text-red-800" htmlFor={data.name}>
                        {data.label}
                    </label>
                    <input
                        value={register[data.name]}
                        onChange={handelChange}
                        className="p-1.5 w-80 border-b transition duration-300 border-red-500 focus:rounded-md focus:outline-red-500"
                        type={data.type}
                        name={data.name}
                        id={data.name}
                        placeholder={data.placeholder}
                    />
                </div>
            ))}

            <div className="w-full col-span-2 flex justify-center">
                <button
                    type="submit"
                    className={`cursor-pointer border w-full px-28 py-2 rounded-lg text-white text-lg font-semibold
                        ${isLoading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-800'}
                    `}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Register'}
                </button>
            </div>

            {error && (
                <div className="w-full col-span-2 text-center text-red-600 font-bold">
                    ❗ {'data' in error ? (error.data as { message: string }).message : 'error register'}
                </div>
            )}
        </form>
    );
};

export default RegisterForm;
