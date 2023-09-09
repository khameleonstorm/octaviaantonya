import Hero from "./components/hero/Hero";
import Map from "./components/map/Map";
import Process from "./components/process/Process";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import { homeHero } from "./utils/heroDetails"
import { testimonies } from "./utils/sec"

export default function Home() {
  return (
    <>
    <Hero data={homeHero}/>
    <Services />
    <Process />
    <Testimonials data={testimonies}/>
    <Map />
    </>
  )
}
