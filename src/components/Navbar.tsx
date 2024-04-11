import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex mt-12 justify-between">
      <nav>
        <ul className="flex space-x-14 text-primary-color font-normal text-lg/[19.94px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>

      <h2 className="mr-44 font-title font-bold text-4xl/[53.35px] text-primary-color text-center">
        Arc<span className="text-secondary-color">ane</span>
      </h2>

      <div className="flex space-x-8 text-primary-color">
        <Link href="/">
          <IoLogoInstagram className="w-6 h-6" />
        </Link>
        <Link href="/">
          <IoLogoFacebook className="w-6 h-6" />
        </Link>
        <Link href="/">
          <IoLogoTwitter className="w-6 h-6" />
        </Link>
        <Link href="/">
          <IoLogoLinkedin className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
