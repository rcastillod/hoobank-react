// Styles
import styles from "../style";
// Assets
import { logo } from "../assets";
// Data
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-8 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col my-4 ss:my-0 min-w-[150px]">
            <h5 className="text-white text-[18px] leading-[27px] mb-5">
              {footerLink.title}
            </h5>
            <ul className="flex flex-col gap-2">
              {footerLink.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-dimWhite font-light hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center py-5 border-t-[1px] border-dimWhite/20 w-full mt-0 md:mt-5">
      <p className={`${styles.paragraph}`}>
        Copyright &copy; 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex gap-7 mt-4 md:mt-0">
        {socialMedia.map((social) => (
          <a
            href={social.link}
            key={social.id}
            className="social__link relative z-[1]"
          >
            <img src={social.icon} alt="" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
