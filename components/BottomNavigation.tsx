"use client"
import { FaRegUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiHome } from 'react-icons/bi';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const BottomNavigation = () => {
  const pathname = usePathname();

  function NavLink({ href, children }: any) {


    return (
      <Link href={href}>
        {children}
      </Link>
    );
  }


  const navItems = [
    { href: "/", icon: BiHome, title: "Home" },
    { href: "/about", icon: FaRegUser, title: "About" },
    { href: "/services", icon: MdMiscellaneousServices, title: "Services" },
    { href: "/works", icon: MdOutlineWorkspacePremium, title: "Works" },
    { href: "/contact", icon: TiContacts, title: "Contact" }
  ];


  return (
    <footer id="footer">
      <div className="footer_container">
        {navItems.map(({ href, icon: Icon, title }) => (
          <div key={href} className={pathname === href ? 'footerOption-active' : 'footerOption'}>
            <NavLink href={href}>
              <Icon size={25} className={pathname === href ? 'footerOption_icon_active' : 'footerOption_icon'} />
            </NavLink>
            <h4 className="footerOption_title">{title}</h4>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default BottomNavigation