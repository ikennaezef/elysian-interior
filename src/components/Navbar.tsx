"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi2";

const links = [
	{ id: 1, href: "/", title: "Home" },
	{ id: 2, href: "/about", title: "About" },
	{ id: 3, href: "/pricing", title: "Pricing" },
	{ id: 4, href: "/services", title: "Services" },
	{ id: 5, href: "/contact", title: "Contact" },
];

const Navbar = () => {
	const currentPath = usePathname();
	return (
		<nav className="shadow-md py-4">
			<div className="flex items-center justify-between max-w-5xl mx-auto px-2">
				<Link href="/">
					<div className="flex items-center space-x-2">
						<HiHome className="text-accent" size={30} />
						<h1 className="text-3xl ">Elysian</h1>
					</div>
				</Link>
				<div className="flex items-center space-x-6">
					{links.map((link) => (
						<Link
							key={link.id}
							className={
								currentPath === link.href
									? "text-accentDark hover:text-accent"
									: "text-secondary hover:text-accent"
							}
							href={link.href}>
							{link.title}{" "}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
