import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Services from "@/components/home/services";
import Container from "@/components/container";

export default async function Home() {
  const data: HomeDataProps = await getDataHome();

  return (
    <main>
      <div>
        <Submenu />

        <Hero
          heading={data.object.metadata.heading}
          buttonTitle={data.object.metadata.cta_button.title}
          buttonUrl={data.object.metadata.cta_button.url}
          bannerUrl={data.object.metadata.banner.url}
          icon={<Phone size={24} color="#fff" />}
        />

        <Container>
          <Services
            imageDescription={data.object.metadata.services[0].description}
            imageUrl={data.object.metadata.services[0].image.url}
            text={data.object.metadata.about.description}
            title="Sobre"
          />
        </Container>
      </div>
    </main>
  );
}
