"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  const [top, setTop] = useState(true);

  function HandlerScroll() {
    window.scrollY > 10 ? setTop(false) : setTop(true)
    
  }

  useEffect(()=> {

    window.addEventListener("scroll", HandlerScroll)

    return ()=> window.removeEventListener("scroll", HandlerScroll)

  }, [top])


  return (
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Logo */}
          <div className={styles.contentLogo}>
            <Link href="/">DevMotors</Link>
          </div>

          {/* Menu Nav */}
          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#servicos">SERVIÇOS</Link>
            <Link href="/#contatos">CONTATOS</Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
