import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container";
import { PostProps } from "@/utils/types/post-type";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina Especializada",
        description: "Oficina em Brasília",
      };
    });

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: ['devmotors', 'troca de oleo', 'devmotors troca de oleo'],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url]
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true
        }
      }
    }
  } catch (error) {
    return {
      title: "DevMotors - Sua oficina Especializada",
      description: "Oficina em Brasília",
    };
  }
}

const ServiceDetails = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { objects }: PostProps = await getItemBySlug(slug);

  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>{objects[0].title}</h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                className={styles.button}
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              src={objects[0].metadata.description.banner.url}
              alt="Imagem ilustrativa"
              priority
              quality={100}
              fill={true}
              className={styles.banner}
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default ServiceDetails;
