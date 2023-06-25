import React from "react";
import { HiHome } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="pt-12">
			<div className="grid grid-cols-5 max-w-5xl mx-auto px-2">
				<div className="col-span-2">
					<div className="flex items-center space-x-2 mb-2">
						<HiHome className="text-accent" size={30} />
						<h1 className="text-3xl ">Elysian</h1>
					</div>
					<p className="text-secondary w-4/5 mb-8">
						Your Vision. Our Expertise. Beautifully Realized.
					</p>
					<div className="flex items-center space-x-4">
						<button className="inline-flex items-center justify-center border border-gray-300 rounded-full hover:bg-light w-10 h-10">
							<FaFacebookF />
						</button>
						<button className="inline-flex items-center justify-center border border-gray-300 rounded-full hover:bg-light w-10 h-10">
							<FaTwitter />
						</button>
						<button className="inline-flex items-center justify-center border border-gray-300 rounded-full hover:bg-light w-10 h-10">
							<FaInstagram />
						</button>
					</div>
				</div>
				<div className="col-span-1 flex flex-col items-start space-y-4">
					<h5 className="text-lg">Pages</h5>
					<Link
						href="/about"
						className="text-sm text-secondary hover:text-accentDark">
						About Us
					</Link>
					<Link
						href="/pricing"
						className="text-sm text-secondary hover:text-accentDark">
						Pricing
					</Link>
					<Link
						href="/about"
						className="text-sm text-secondary hover:text-accentDark">
						Our Team
					</Link>
					<Link
						href="/contact"
						className="text-sm text-secondary hover:text-accentDark">
						Contact Us
					</Link>
					<Link
						href="/services"
						className="text-sm text-secondary hover:text-accentDark">
						Services
					</Link>
				</div>
				<div className="col-span-1 flex flex-col items-start space-y-4">
					<h5 className="text-lg">Services</h5>
					<button className="text-sm text-secondary hover:text-accentDark">
						Kitchen
					</button>
					<button className="text-sm text-secondary hover:text-accentDark">
						Living Area
					</button>
					<button className="text-sm text-secondary hover:text-accentDark">
						Bathroom
					</button>
					<button className="text-sm text-secondary hover:text-accentDark">
						Dining Hall
					</button>
					<button className="text-sm text-secondary hover:text-accentDark">
						Bedroom
					</button>
				</div>
				<div className="col-span-1 flex flex-col items-start space-y-4">
					<h5 className="text-lg">Contact</h5>
					<p className="text-secondary">
						123 Main Street Los Angeles, CA 90001
					</p>
					<button className="text-secondary hover:text-accentDark">
						elysianinterior@yahoo.com
					</button>
					<p className="text-secondary">+1 563 - 8903</p>
				</div>
			</div>
			<div className="border-t border-t-gray-300 py-4 mt-8">
				<div className="max-w-4xl mx-auto px-2">
					<p className="text-gray-500 text-sm text-center">
						Copyright &copy; Elysian 2023 | All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
