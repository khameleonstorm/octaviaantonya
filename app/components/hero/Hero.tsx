import { NextPage } from 'next'
import s from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type HeroData = {
  title: React.ReactNode,
  subtitle: React.ReactNode
  image: StaticImport
}

interface IHeroData {
  data: HeroData
}

const Hero: NextPage<IHeroData> = ({ data }) => {
  return (
    <div className={s.ctn}>
      <div className={`${s.wrp} wrp`}>
        <div className={s.left}>
          {data.title}
          {data.subtitle}
          <Link href="/contact" className='bigBtn'>Contact Me!</Link>
        </div>
        <div className={s.right}>
          <Image src={data.image} alt="'Octavia Antonya Cephas" width={400}/>
        </div>
      </div>
    </div>
  )
}


export default Hero
