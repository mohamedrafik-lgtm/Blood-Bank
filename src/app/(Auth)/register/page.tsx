import RegisterForm from "@/components/register/RegisterForm";
import Link from "next/link";

const Register = ()=>{
    return(
        <div className="flex my-10  items-center justify-center">
        <div className="w-fit bg-white shadow-2xl border-red-500 border-2 rounded-2xl px-6 py-12 ">
            <h1 className="text-3xl font-bold text-red-700 text-center mb-6">Blood Bank Register</h1>
              <RegisterForm/>
              
            <p >
                 <Link href="/register" className="text-red-600 hover:underline">forget password?</Link>
            </p>
        </div>
    </div>
    )
}
export default Register;