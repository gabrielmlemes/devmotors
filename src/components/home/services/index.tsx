import Image from "next/image";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";

const Services = async () => {
  const data: HomeDataProps = await getDataHome();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Sobre</h2>
          <p>{data.object.metadata.about.description}</p>
        </div>

        <div className={styles.containerBanner}>
          <Image
            src={data.object.metadata.services[0].image.url}
            alt={data.object.metadata.services[0].description}
            priority
            quality={100}
            fill={true}
            className={styles.banner}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
