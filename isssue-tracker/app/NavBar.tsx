import Link from "next/link";
import React from "react";
import { PiTreePalmFill } from "react-icons/pi";

const NavBar = () => {

    const links = [{label:'Dashboard', href:'/'},
    {label:'Issues', href:'/issues'}

]
	return (
		<nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center bg-blue-800 text-2xl text-white">
			<Link href="/">
				<PiTreePalmFill />
			</Link>
			<ul className="flex space-x-6">
                {links.map(link =><Link key={link.href} href={link.href} className="hover:text-yellow-200 transition-colors">{link.label}</Link>)}
				
			</ul>
		</nav>
	);
};

export default NavBar;
