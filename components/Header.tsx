"use client"
import { useEffect } from 'react';



const Header = () => {


  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Okoro Godwin Chinedu";
  }, []);

  return (
    <div id="header">
    </div>
  )
}

export default Header;


