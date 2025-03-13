import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-red-700 text-white py-8 px-4 text-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-lg font-bold">
                    Blood Bank © {new Date().getFullYear()}
                    <p className="text-sm mt-2">Saving lives, one donation at a time.</p>
                </div>

                <nav className="flex flex-col gap-2">
                    <Link href="/about" className="hover:underline">About Us</Link>
                    <Link href="/donate" className="hover:underline">Donate Now</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <Link href="/faq" className="hover:underline">FAQs</Link>
                </nav>

                <div className="flex flex-col gap-2 ">
                    <p className="font-semibold">Follow Us:</p>
                    <div className="flex gap-4 justify-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-xl hover:text-blue-500" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-xl hover:text-blue-400" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-xl hover:text-pink-500" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
