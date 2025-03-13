"use client"
import { useState } from 'react';
const LoginForm =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        
    };
    return <form onSubmit={handleLogin} className="space-y-4">
    <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        required
    />
    <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        required
    />
    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded">Login</button>
</form>
}
export default LoginForm;