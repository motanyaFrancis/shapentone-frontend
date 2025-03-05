import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaSpotify, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-500 py-8  mt-auto w-full bottom-0">
            {/* Fixed background image at the bottom of the footer */}
            {/* <Image
                src="/images/Silhouette.png"
                alt="Silhouette Background"
                fill={true}
                objectFit='contain'
                objectPosition='absolute'
                className="absolute bottom-0 inset-x-0 w-full h-72 object-cover opacity-100 z-0"
            /> */}
            <div className="container mx-auto px-4 relative z-0">
                {/* Main Grid for Top Part of Footer */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* First Column (Logo & Info) */}
                    <div className=''>
                        <Link href="/" className="text-lg font-bold text-gray-500 hover:text-orange-500">
                            <Image
                                alt="Well Lit Pictures"
                                src="/logo.png"
                                // className="h-20 w-auto"
                                width={200}
                                height={200}
                            />
                            {/* Well Lit Pictures */}
                        </Link>
                        <p className="mt-2 text-gray-900 text-sm">
                            {/* <ul className="space-y-4">
                                <li className="hover:text-orange-500 text-sm ">P.O. Box 5824 - 00200 Nairobi Kenya</li>
                                <li className="hover:text-orange-500 text-sm ">Email: shapentone360@gmail.com</li>
                                <li className="hover:text-orange-500 text-sm ">Tel: +254 721 942500</li>
                                <li className="hover:text-orange-500 text-sm "></li>
                            </ul> */}
                            {/* Good Memories, Good Times. */}
                        </p>
                    </div>

                    {/* Second Column (Nested Grid with 4 Columns) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        {/* <div>
                            <h5 className="font-medium text-lg mb-2">Company</h5>
                            <ul className="space-y-4">
                                <li className="hover:text-orange-500 text-sm ">P.O. Box 5824 - 00200 Nairobi Kenya</li>
                                <li className="hover:text-orange-500 text-sm ">Email: shapentone360@gmail.com</li>
                                <li className="hover:text-orange-500 text-sm ">Tel: +254 721 942500</li>
                                <li className="hover:text-orange-500 text-sm "></li>
                            </ul>
                        </div> */}
                        {/* Column 2 */}
                        <div>
                            <h5 className="font-medium text-lg mb-2">Useful Links</h5>
                            <ul className="space-y-4">
                                <li><Link href="/link1" className="hover:text-orange-500 text-sm ">Programs</Link></li>
                                <li><Link href="/link2" className="hover:text-orange-500 text-sm ">About Us</Link></li>
                                <li><Link href="/link3" className="hover:text-orange-500 text-sm ">Contact us</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h5 className="font-medium text-lg mb-2">Support</h5>
                            <ul className="space-y-4">
                                {/* <li><Link href="/link7" className="hover:text-orange-500 text-sm ">Help Center</Link></li> */}
                                <li><Link href="/link7" className="hover:text-orange-500 text-sm ">Privacy Policy</Link></li>
                                <li><Link href="/link7" className="hover:text-orange-500 text-sm ">Terms of services </Link></li>
                                <li><Link href="/link7" className="hover:text-orange-500 text-sm ">Trust and safety</Link></li>
                                <li><Link href="/link7" className="hover:text-orange-500 text-sm ">Accessibility</Link></li>
                                {/* <li><Link href="/link7" className="hover:text-orange-500 text-sm ">Help</Link></li> */}
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div>
                            <h5 className="font-medium text-lg mb-2">Get the App</h5>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="https://play.google.com/store" className="hover:text-orange-500 text-sm " target="_blank" rel="noopener noreferrer">
                                        Google Play Store
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.apple.com/app-store/" className="hover:text-orange-500 text-sm " target="_blank" rel="noopener noreferrer">
                                        Apple App Store
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom Section */}
                <div className="relative mt-8">
                    <div className="relative flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
                        <p className="text-sm text-gray-900 text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} Shape n&apos; Tone 360.</p>
                        <div className="flex space-x-4 justify-center md:justify-end">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="text-gray-900 hover:text-orange-500">
                                <FaTiktok className="h-6 w-6" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-900 hover:text-orange-500">
                                <FaYoutube className="h-6 w-6" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-900 hover:text-orange-500">
                                <FaXTwitter className="h-6 w-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-900 hover:text-orange-500">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="text-gray-900 hover:text-orange-500">
                                <FaSpotify className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
