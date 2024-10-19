import Image from "next/image";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";

interface ServicesProps {
  title: string;
  text: string;
  imageUrl: string;
  imageDescription: string;
}

const Services = async ({
  title,
  text,
  imageUrl,
  imageDescription,
}: ServicesProps) => {
  const data: HomeDataProps = await getDataHome();

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className={styles.containerBanner}>
            <Image
              src={imageUrl}
              alt={imageDescription}
              priority
              quality={100}
              fill={true}
              className={styles.banner}
            />
          </div>
        </div>
      </section>

      <h2 className={styles.titleServices}>Conheça nossos serviços</h2>

      <section className={styles.services}>

        {data.object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.containerService}>
              <Image
                src={service.image.url}
                alt={service.description}
                priority
                quality={100}
                fill={true}
                className={styles.imageService}
              />
            </div>

            <p className={styles.description}>{service.description}</p>
          </article>
        ))}

      </section>
    </>
  );
};

export default Services;
