import Image from "next/image";
import img from "../public/Img.png"
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function Home() {

  return (
    <div  >
      <div className="home_container">
        <div className="home_container_sub">
          <h1 className="home_container_sub_text">
            My name
            is <span>Godwin Chinedu...</span>
          </h1>
          <h6 className="home_container_sub_text_h6">Software Developer <span>based in</span> Lagos</h6>
          <div className="home_container_small_bg_container">
            <p>Let’s talk with me</p>
            <div><PiArrowUpRightBold size={20} /></div>
          </div>
          <div className="home_container_small_bg_container_sub">
            <div className="home_container_small_bg_container_sub1"><MdOutlinePhone /><p>+77 022 444 05 05</p></div>
            <div className="home_container_small_bg_container_sub2"><TfiEmail /><p>chinedu.go@gmail.com</p></div>
          </div>
        </div>
        <div className="home_container_sub1">
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
