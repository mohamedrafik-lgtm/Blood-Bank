import LoginForm from '@/components/login/LoginForm';
import Link from 'next/link';

function LoginPage() {
    

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-2xl border-red-500 border-2 rounded-2xl px-6 py-12 ">
                <h1 className="text-3xl font-bold text-red-700 text-center mb-6">Blood Bank Login</h1>
                  <LoginForm/>
                <p >
                    Don&apos;t have an account? <Link href="/register" className="text-red-600 hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
}
export default LoginPage;