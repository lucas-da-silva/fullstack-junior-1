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
        <ul className="flex space-x-5 text-primary font-normal text-lg">
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

      <h1 className="font-title font-bold text-4xl text-primary">
        Arc<span className="text-secondary">ane</span>
      </h1>

      <div className="flex space-x-6 text-primary">
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
