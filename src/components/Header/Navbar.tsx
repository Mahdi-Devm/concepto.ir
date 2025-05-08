import Link from "next/link";
import React from "react";

function Navbar() {
  const navlinks = [
    { link: "/", name: "خانه" },
    { link: "/about", name: "درباره ما" },
    { link: "/contact", name: "تماس با ما" },
    { link: "/job", name: "فرصت های شغلی" },
    { link: "/company", name: "شرکت ها" },
  ];

  return (
    <nav className="flex justify-end h-[56px] items-center">
      <ul className="flex space-x-5">
        {navlinks.map((navlink) => (
          <li key={navlink.link} className="text-lg  text-gray-700">
            <Link href={navlink.link}>{navlink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
