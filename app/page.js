import FeaturedDevelopers from "./components/Home/FeaturedDevelopers";
import HeroSec from "./components/Home/HeroSec";
import LatestProperties from "./components/Home/LatestProperties";
import LatestProjects from "./components/Home/LatestProjects";
import HotDeal from "./components/Home/HotDeal";
import FeaturedAreas from "./components/Home/FeaturedAreas";
import OffPlanProject from "./components/Home/OffPlanProject";

export default function Home() {
  return (
    <>
      <HeroSec />
      <LatestProperties />
      <LatestProjects />
      <FeaturedAreas />
      <OffPlanProject />
      <HotDeal />
      <FeaturedDevelopers />
    </>
  );
}
