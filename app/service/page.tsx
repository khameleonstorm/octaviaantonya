import Hero from "../components/hero/Hero";
import Sec from "../components/sec/Sec";
import { servicesHero } from "../utils/heroDetails";
import { secData } from "../utils/sec";

export default function page() {
  return (
    <>
      <Hero data={servicesHero}/>
      {secData.map(data => <Sec data={data} key={data.title}/> )}
    </>
  )
}
