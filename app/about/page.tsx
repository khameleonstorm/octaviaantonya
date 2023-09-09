import AboutMe from "../components/aboutMe/AboutMe";
import Hero from "../components/hero/Hero";
import { aboutHero } from "../utils/heroDetails";

export default function page() {
  return (
    <>
    <Hero data={aboutHero}/>
    <AboutMe />
    </>
  )
}
