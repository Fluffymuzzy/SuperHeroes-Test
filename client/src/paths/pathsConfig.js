import HomePage from "../pages/HomePage/HomePage";
import HeroPage from "../pages/HeroPage/HeroPage";
const paths = [
  { path: "/", exact: true, element: HomePage },
  { path: "/superheroes/:id", exact: true, element: HeroPage },
];

export default paths;
