"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import SettingsModal from "./Menu";

interface LinkItem {
    href: string;
    icon: JSX.Element;
}

export default function NavBar() {
    const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);

      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  console.log(width)


    const pathname = usePathname();
    const isLogin = false;

    const links: LinkItem[] = [
        {
            href: "/",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3z" />
                </svg>
            )
        },
        {
            href: "/favorite",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            )
        },
        {
            href: "/articles",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
            )
        },
        {
            href: "/notifications",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            )
        }
    ];

    const getIconClass = (href: string): string =>
        pathname === href
            ? "border-b-2 border-white text-white"  
            : "text-white";

    return (
       <header>
           <nav className={`py-6 flex bg-red-600  ${width > 850 ? "justify-around items-center px-5" : " px-2 justify-between "}`}>

               <Link href="/">
               <div className="flex cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
                         <path 
                          d="M50 10 C50 10, 80 40, 80 70 C80 85, 65 95, 50 95 C35 95, 20 85, 20 70 C20 40, 50 10, 50 10 Z" 
                          fill="white" 
                          stroke="#A00012" 
                          strokeWidth="3"/>
                    </svg>

                    <h1 className="text-white text-3xl font-semibold">Blood Bank</h1>
               </div>
               </Link>
                 

     {
        width > 850 ? (
            <>
                <ul className="flex text-white text-2xl font-semibold min-w-4/12 justify-between">
                    {links.map(({ href, icon }) => (
                        <Link key={href} href={href}>
                            <li className={`cursor-pointer pb-2 ${getIconClass(href)}`}>
                                {icon}
                            </li>
                        </Link>
                    ))}
                </ul>
                {isLogin ? (
                    <div>
                        <button className="flex justify-center items-center">
                            <span className="text-white text-2xl">Settings</span>
                        </button>
                    </div>
                ) : (
                    <Link href="/login"><span className="text-white text-2xl">Login</span></Link>   
                )}
            </>
        ) : 
        <div className="flex items-center">
             <SettingsModal/>
        </div>
     }
               
              
               

           </nav>
       </header>
    );
}
