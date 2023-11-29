"use client";

import { PiTreePalmFill } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import classnames from "classnames";

const NavBar = () => {
	const currentPath = usePathname();

	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues" },
	];
	return (
		<nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center bg-blue-800 text-2xl text-white">
			<Link href="/">
			<PiTreePalmFill />
			</Link>
			<ul className="flex space-x-6">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={classnames({
							"text-yellow-600": link.href === currentPath,
							"text-yellow-100": link.href !== currentPath,
							"hover: text-yellow-400 transition-colors": true,
						})}
					>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
