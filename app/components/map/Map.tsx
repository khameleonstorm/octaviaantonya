import Image from "next/image";
import map from "@/public/assets/map.png"

export default function Map() {
  return (
    <div className="wrp imgCtn">
      <Image src={map} alt="map" quality={100} width={1100}/>
    </div>
  )
}
