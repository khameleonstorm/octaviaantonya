import s from './Services.module.css'
import Image from 'next/image'
import natalie from '@/public/assets/octavia-antonya-cephas-3.jpg'
import Link from 'next/link'

export default function Services() {
  return (
    <div className={s.ctn}>
      <div className={`${s.wrp} wrp`}>
        <div className={s.heading}>
          <div className={s.left}>
            <Image src={natalie} alt='octavia-antonya-cephas' width={500}/>
          </div>
          <div className={s.right}>
            <h1>My Services</h1>
            <p>
            Unlock your portfolio&apos;s potential with expert guidance in real estate, gold, agriculture, and cryptocurrency sectors. Leverage my extensive experience and profound market insights to not only amplify returns but also strategically mitigate risks. Seize a proactive stance in safeguarding your financial future by connecting today. With my expert assistance across these domains, you&apos;ll be primed for a dynamic and prosperous tomorrow. Explore these diverse investment avenues and take confident steps towards building your wealth.
            </p>
            <Link href="/contact" className='bigBtn'>Contact Me!</Link>
          </div>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <h3>Real Estate</h3>
            <p>
                Investing in real estate offers long-term wealth, steady income, and portfolio stability.
            </p>
          </div>
          <div className={s.card}>
            <h3>Gold</h3>
            <p>
            Gold provides stable, long-term wealth, diversification, and safeguards against inflation.
            </p>
          </div>
          <div className={s.card}>
            <h3>Agriculture</h3>
            <p>
              Agriculture offers tangible, long-term wealth, sustainable income, and global demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
