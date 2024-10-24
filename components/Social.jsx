import Link from "next/link";

import{FaGithub, FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/jaks17'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/g-jagankmr17/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/jagan_kumr17/'},
    {icon: <FaTwitter />, path: 'https://x.com/GaddapuJagan'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
    );
};

export default Social;
