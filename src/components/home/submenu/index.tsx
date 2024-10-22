"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { MenuProps } from "@/utils/types/menu-type";

import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface SubMenuProps {
  menu: MenuProps;
}

const Submenu = ({ menu }: SubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu se a tela não for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Abre/Fecha o menu
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Serviços
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        {menu.objects.map((item) => (
          <li>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Submenu;
