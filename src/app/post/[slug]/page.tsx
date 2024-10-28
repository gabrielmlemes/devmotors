import { Suspense } from "react";
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/types/post-type";
import { Metadata } from "next";
import Content from "./components/content/content";
import LoadingPost from "./components/loading/loading";

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
  return (
    <>
      <Suspense fallback={<LoadingPost/>}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
};

export default ServiceDetails;
