import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";

export default async function Home() {
  const data: HomeDataProps = await getDataHome();

  console.log(data.object.title);

  return (
    <main>
      <div>
        <Submenu />
        <Hero
          heading={data.object.metadata.heading}
          buttonTitle={data.object.metadata.cta_button.title}
          buttonUrl={data.object.metadata.cta_button.url}
          bannerUrl={data.object.metadata.banner.url}
          icon= {<Phone size={24} color="#fff"/>}
        />
      </div>
    </main>
  );
}
