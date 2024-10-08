"use client"
import Link from 'next/link';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from 'next/navigation'

// Create a NavLink component
const NavLink = ({ href, label }: any) => {
  const pathname = usePathname()
  const isActive = pathname === href;

  return (

    <Link href={href} className={isActive ? 'parent_link_container' : 'parent_link_container_none'}>
      <span className={isActive ? 'active-link' : 'active-none'}>{label}</span>
    </Link>
  );
};
const SideNav = () => {


  return (
    <div id="side-nav">
      <div className="logo-area">
        <h2>Godwin.</h2>
      </div>
      <div className='nav_container'>
        <nav >
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/works" label="Works" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <div className='nav_bottom_icon_container'>
          <div className='nav_bottom_icon'>
            <FaLinkedinIn />
          </div>
          <div className='nav_bottom_icon'>
            <FiGithub />
          </div>
          <div className='nav_bottom_icon'>
            <FaXTwitter />
          </div>
          <p className='nav_bottom_icon_p'>Copyright © 2023 Godwin. All right reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default SideNav;