"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi2";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { menuContainer, menuItem } from "@/utils/motionVariants";

const links = [
	{ id: 1, href: "/", title: "Home" },
	{ id: 2, href: "/about", title: "About" },
	{ id: 3, href: "/pricing", title: "Pricing" },
	{ id: 4, href: "/services", title: "Services" },
	{ id: 5, href: "/contact", title: "Contact" },
];

const Navbar = () => {
	const currentPath = usePathname();
	const [navIsOpen, setNavIsOpen] = useState(false);

	const router = useRouter();

	const navigate = (href: string) => {
		setNavIsOpen(false);
		router.push(href);
	};

	return (
		<motion.nav
			initial={false}
			animate={navIsOpen ? "open" : "closed"}
			className="shadow-md py-4">
			<div className="flex items-center justify-between max-w-5xl mx-auto px-4 sm:px-2">
				<Link href="/">
					<div className="flex items-center space-x-2">
						<HiHome className="text-accent" size={30} />
						<h1 className="text-2xl md:text-3xl">Elysian</h1>
					</div>
				</Link>
				<div className="hidden md:flex items-center space-x-6">
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
				<button
					onClick={() => setNavIsOpen(true)}
					className="inline-block md:hidden text-lg">
					<MdMenu />
				</button>
				<motion.div
					variants={menuContainer}
					className="flex md:hidden flex-col space-y-4 fixed top-0 left-0 z-50 w-full h-screen bg-accentDark p-6">
					<div className="flex justify-end mb-8">
						<button
							onClick={() => setNavIsOpen(false)}
							className="text-white text-xl">
							<MdOutlineClose />
						</button>
					</div>
					{links.map((link) => (
						<motion.div key={link.id} variants={menuItem}>
							<button
								onClick={() => navigate(link.href)}
								className="text-white text-lg font-serif tracking-wider">
								{link.title}
							</button>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
