import { NAV_LINKS } from "@/constants"
import Logo from '../public/hilink-logo.svg';
import Link from "next/link"
import Button from "./Button"
import Image from "next/image";
import menu from '../public/menu.svg';
import user from '../public/user.svg';

const Navbar = () => {
    return (
        <nav className="flexBetween max-container 
        padding-container relative z-30 py-5">
            <Link href="/">
                <Image src={Logo} alt="logo" width={74} height={29} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter
                    cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon={user}
                    variant="btn_dark_green"
                />
            </div>
            <Image
                src={menu}
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default Navbar