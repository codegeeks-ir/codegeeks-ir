import { socialLinkProperties } from "utils/config";

const Footer = () => (
  <footer>
    <ul className="flex flex-row navbar-nav justify-center p-0 m-0">
      {socialLinkProperties.map((item) => (
        <li className="social-item" key={item.name}>
          <a href={item.link}>{item.icon}</a>
        </li>
      ))}
    </ul>
    <p className="text-2xs">
      تمامی حقوق متعلق به انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه می‌باشد.
    </p>
  </footer>
);

export default Footer;
