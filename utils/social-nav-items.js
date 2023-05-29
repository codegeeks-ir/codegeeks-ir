import GithubIcon from "public/icones/social/github.svg";
import InstagramIcon from "public/icones/social/instagram.svg";
import TelegramIcon from "public/icones/social/telegram.svg";
import YoutubeIcon from "public/icones/social/youtube.svg";

const socialItems = [
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCVHy7Dv9vkf3zt0_P2J5vLw",
    icon: <YoutubeIcon className="fill-gray-400 w-4 h-auto" />,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/ceit_uut",
    icon: <InstagramIcon className="fill-gray-400 w-4 h-auto" />,
  },
  {
    name: "telegram",
    link: "https://t.me/ceit_uut",
    icon: <TelegramIcon className="fill-gray-400 w-4 h-auto" />,
  },
  {
    name: "github",
    link: "https://github.com/ceituut",
    icon: <GithubIcon className="fill-gray-400 w-4 h-auto" />,
  },
];

export default socialItems;
