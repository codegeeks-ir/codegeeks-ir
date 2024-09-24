import GithubIcon from "public/icones/social/github.svg";
import InstagramIcon from "public/icones/social/instagram.svg";
import TelegramIcon from "public/icones/social/telegram.svg";
import YoutubeIcon from "public/icones/social/youtube.svg";
import Navigation from "utils/schema/navigation.type";

const socialItems: Navigation = [
  {
    name: "github",
    link: "https://github.com/codegeeks-ir",
    icon: <GithubIcon className="w-7 fill-slate-600" />,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCVHy7Dv9vkf3zt0_P2J5vLw",
    icon: <YoutubeIcon className="w-6 fill-sky-700	" />,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/ceit_uut",
    icon: <InstagramIcon className="w-6 fill-sky-700	" />,
  },
  {
    name: "telegram",
    link: "https://t.me/ceit_uut",
    icon: <TelegramIcon className="w-6 fill-sky-700	" />,
  },
];

export default socialItems;
