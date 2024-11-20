import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

function Navbar(){
  const redirectTo = (url) => {
    window.location.href = url;
  };
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin onClick={() => redirectTo('https://www.linkedin.com/in/karthick-d-576134302/')}/>
        <FaGithub onClick={() => redirectTo('https://github.com/karthickd018')}/>
        <FaSquareXTwitter onClick={() => redirectTo('https://twitter.com/Karthick327719')}/>
        <FaInstagram onClick={() => redirectTo('https://www.instagram.com/_karxthic_pvt/')}/>
      </div>

    </nav>
  );

}
export default Navbar;