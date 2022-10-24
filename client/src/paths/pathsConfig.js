import HomePage from "../pages/HomePage/HomePage";
import HeroPage from "../pages/HeroPage/HeroPage";
import CreateHeroPage from "../pages/CreateHeroPage/CreateHeroPage";

const paths = [
  { path: "/", exact: true, element: HomePage },
  { path: "/superheroes/:id", exact: true, element: HeroPage },
  { path: "/create", exact: true, element: CreateHeroPage },
];

export default paths;
