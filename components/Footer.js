import socialItems from "utils/social-nav-items";

const Footer = () => (
  <footer>
    <ul className="navbar-nav m-0 flex flex-row justify-center p-0">
      {socialItems.map((item) => (
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
