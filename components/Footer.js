import Link from "next/link";
import { useRouter } from "next/router";
import HeartIcon from "public/icones/heart.svg";
import GithubIcon from "public/icones/social/github.svg";
import InstagramIcon from "public/icones/social/instagram.svg";
import TelegramIcon from "public/icones/social/telegram.svg";
import YoutubeIcon from "public/icones/social/youtube.svg";

function SocialIcon({ social }) {
  switch (social) {
    case "github":
      return <GithubIcon className="fill-gray-400 w-4 h-auto" />;
    case "instagram":
      return <InstagramIcon className="fill-gray-400 w-4 h-auto" />;
    case "telegram":
      return <TelegramIcon className="fill-gray-400 w-4 h-auto" />;
    case "youtube":
      return <YoutubeIcon className="fill-gray-400 w-4 h-auto" />;
    default:
      break;
  }
}

export default function Footer({ footerMenu, socialMenu }) {
  function isSponsorPage() {
    const router = useRouter();
    return router.pathname == "/sponsor";
  }
  return (
    <footer>
      <ul className="flex flex-row navbar-nav justify-center p-0 m-0 mb-2">
        {socialMenu.map((item) => (
          <li className="social-item" key={item.name}>
            <a href={item.link}>
              <SocialIcon social={item.name} />
            </a>
          </li>
        ))}
      </ul>
      <hr className="mt-0 visible" />
      <ul className="flex flex-row justify-center list-none w-full p-0 m-0 mt-2">
        {footerMenu.map((item) => (
          <li className="p-2 pt-0 pb-0" key={item.name}>
            <Link href={item.path} className="non-important">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-2xs">
        تمامی حقوق متعلق به انجمن علمی کامپیوتر و فناوری اطلاعات دانشگاه صنعتی
        ارومیه می‌باشد.
      </p>
      <Link
        href="/sponsor"
        className={`sponsor-link ${isSponsorPage() ? "invisible" : ""}`}
      >
        <HeartIcon className="icon" />
      </Link>
    </footer>
  );
}
