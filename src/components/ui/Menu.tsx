import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

export default function SettingsModal() {
    const [isOpen, setIsOpen] = useState(false);
    // Define the LinkItem type
    type LinkItem = { href: string; label: string; };
    const pathname = usePathname();
    
    const getIconClass = (href: string): string =>
        pathname === href
            ? "border-b-2 border-red-500 text-red-500"  
            : "text-gray-700 hover:text-red-500 transition-colors";

    const links: LinkItem[] = [
        { href: "/", label: "Home" },
        { href: "/favorite", label: "Favorite" },
        { href: "/articles", label: "Articles" },
        { href: "/notifications", label: "Notifications" }
    ];

    const renderItems = (): ReactNode => {
        return <ul className="flex flex-col text-gray-800 text-lg font-medium space-y-4">
            {links.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                    <li className={`cursor-pointer pb-2 ${getIconClass(href)}`}>
                        {label}
                    </li>
                </Link>
            ))}
        </ul>;
    }

    return (
        <div className="flex justify-center items-center relative mr-10 z-10">
            <button 
                className="flex justify-center items-center bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition-all"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>

            <div 
                className={`fixed top-0 right-0 w-56 text-gray-800 bg-white shadow-2xl rounded-l-2xl flex flex-col pt-4 px-4 overflow-hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 h-screen' : 'translate-x-full h-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="mt-4 bg-red-500 text-white p-2 rounded-full w-fit hover:bg-red-600 transition-all"
                    onClick={() => setIsOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="mt-6">
                    {renderItems()}
                </div>
            </div>
        </div>
    );
}