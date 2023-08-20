import { Link } from "react-router-dom";
import brayanLogo from "../../assets/brayanLogo.png";
import styles from "./Header.module.css";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <Link to={"/professional-portfolio"}>
          <img src={brayanLogo} alt="Logo brayan" className={styles.logo} />
        </Link>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/BrayanASS"
            className={styles.iconDiv}
            target="_blank"
          >
            <SiGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/brayanamaralss/"
            className={styles.iconDiv}
            target="_blank"
          >
            <SiLinkedin className={styles.icon} />
          </a>
          <a
            href="https:/www.instagram.com/brayan_amarals"
            className={styles.iconDiv}
            target="_blank"
          >
            <SiInstagram className={styles.icon} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
