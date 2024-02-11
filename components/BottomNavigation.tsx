"use client"
import { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiHome } from 'react-icons/bi';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const BottomNavigation = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);




  function NavLink({ href, children }: any) {
    const pathname = usePathname();

    return (
      <Link href={href}>
        {children}
      </Link>
    );
  }





  return (
    <footer id="footer">
      <div className="footer_container">

        <div className={pathname === "/" ? 'footerOption-active' : "footerOption"}>
          <NavLink href="/" >
            <BiHome size={25} className={pathname === "/" ? 'footerOption_icon_active' : 'footerOption_icon'} />
          </NavLink>
          <h4 className="footerOption_title">Home</h4>
        </div>

        <div className={pathname === "/about" ? 'footerOption-active' : "footerOption"}>
          <NavLink href="/about" >
            <FaRegUser size={25} className={pathname === "/about" ? 'footerOption_icon_active' : 'footerOption_icon'} />
          </NavLink>
          <h4 className="footerOption_title">About</h4>
        </div>

        <div className={pathname === "/services" ? 'footerOption-active' : "footerOption"}>
          <NavLink href="/services" >
            <MdMiscellaneousServices size={25} className={pathname === "/services" ? 'footerOption_icon_active' : 'footerOption_icon'} />
          </NavLink>
          <h4 className="footerOption_title">Services</h4>
        </div>

        <div className={pathname === "/works" ? 'footerOption-active' : "footerOption"}>
          <NavLink href="/works" >
            <MdOutlineWorkspacePremium size={25} className={pathname === "/works" ? 'footerOption_icon_active' : 'footerOption_icon'} />
          </NavLink>
          <h4 className="footerOption_title">Works</h4>
        </div>

        <div className={pathname === "/contact" ? 'footerOption-active' : "footerOption"}>
          <NavLink href="/contact" >
            <TiContacts size={25} className={pathname === "/contact" ? 'footerOption_icon_active' : 'footerOption_icon'} />
          </NavLink>
          <h4 className="footerOption_title">Contact</h4>
        </div>

      </div>
    </footer>
  )
}

export default BottomNavigation