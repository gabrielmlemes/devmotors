import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeDataProps } from "@/utils/types/home-type";

export default async function Home() {
  const data: HomeDataProps = await getDataHome()

  console.log(data.object.title)

  return (
    <main>
      <div>
        <Submenu/>
      </div>
    </main>
  );
}
