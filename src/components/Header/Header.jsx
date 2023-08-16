import brayanLogo from "../../assets/brayanLogo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <img src={brayanLogo} alt="Logo brayan" className={styles.logo} />
      </nav>
    </>
  );
};

export default Header;
