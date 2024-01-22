import Link from "next/link";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import css from "./Footer.module.css";
import background from "./background.svg";

const Footer = () => {
  const navigation = [
    {
      name: "Property Owners",
      href: "/",
      section: "Navigation",
    },
    {
      name: "Investors",
      href: "/",
      section: "Navigation",
    },
    {
      name: "Explore Properties",
      href: "/",
      section: "Navigation",
    },
    {
      name: "Token",
      href: "/ico",
      section: "Navigation",
    },
    {
      name: "Privacy Policy",
      href: "/",
      section: "Support",
    },
    {
      name: "Terms & Conditions",
      href: "/",
      section: "Support",
    },
    {
      name: "Docs",
      href: "/",
      section: "Support",
    },
    {
      name: "Community",
      href: "/",
      section: "Support",
    },
  ];

  const navigationSection1 = navigation
    .filter((item) => item.section === "Navigation")
    .slice(0, 4);
  const navigationSection2 = navigation
    .filter((item) => item.section === "Support" || item.section === "Contact")
    .slice(0, 4);

  return (
    <footer className={css.footer}>
      <Image
        src={background}
        alt="N"
        width="1812"
        height="460"
        // className={css.logo}
      />
      <div className={css.background}>
        <div className={css.footerContainer}>
          <div className={css.footerFirstCol}>
            <Link href="/">
              <Image
                src="/assets/horizontalLogo.svg"
                alt="N"
                width="200"
                height="80"
                className={css.logo}
              />
            </Link>
            <p className={css.firstColInformation}>
              15 CRAMMAVILL STREET <br />
              GRAYS <br />
              ENGLAND <br />
              RM16 2AP
            </p>
            <p className={css.firstColContact}>contact@libertum.io</p>
            <p className={css.firstColContact}>0000 000 0000</p>
            <div>
              <SocialMedia />
            </div>
          </div>

          <div className={css.footerSecondCol}>
            <section className={css.linksContainer}>
              <div className={css.links}>
                {navigationSection1.map((item, index) => (
                  <Link key={index} href={item.href} className={css.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className={css.links}>
                {navigationSection2.map((item, index) => (
                  <Link key={index} href={item.href} className={css.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>

            <div className={css.footerButton}>
              Explore More Investment Opportunities Now
            </div>
          </div>
        </div>
        <div className={css.footerCopyright}>
          <p>Libertum.io 2024. Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
