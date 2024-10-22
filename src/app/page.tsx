import Submenu from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";
import { MenuProps } from "@/utils/types/menu-type";
import Hero from "@/components/hero";
import Services from "@/components/home/services";
import Container from "@/components/container";
import Footer from "@/components/home/footer";

export default async function Home() {
  const data: HomeDataProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      <div>
        {menu.objects.length > 0 && (
          <Submenu menu={menu}/>
        )}

        <Hero
          heading={data.object.metadata.heading}
          buttonTitle={data.object.metadata.cta_button.title}
          buttonUrl={data.object.metadata.cta_button.url}
          bannerUrl={data.object.metadata.banner.url}
        
        />

        <Container>
          <Services
            imageDescription={data.object.metadata.services[0].description}
            imageUrl={data.object.metadata.services[0].image.url}
            text={data.object.metadata.about.description}
            title="Sobre"
          />
        <Footer object={data.object}/>
        </Container>

      </div>
    </main>
  );
}
