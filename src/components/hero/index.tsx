import Image from "next/image";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon?: ReactNode
}

const Hero = async ({
  heading,
  bannerUrl,
  buttonTitle,
  buttonUrl,
  icon
}: HeroProps) => {
  const data: HomeDataProps = await getDataHome();
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>

      <div className={styles.containerBanner}>
        <Image
            src={bannerUrl}
            alt={heading}
            priority
            quality={100}
            fill={true}
            className={styles.banner}
        />
      </div>
    </main>
  );
};

export default Hero;
