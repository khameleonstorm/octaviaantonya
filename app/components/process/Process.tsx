import s from './Process.module.css'
import { FaBookReader } from 'react-icons/fa'
import { GiProfit, GiPodiumWinner } from 'react-icons/gi'

export default function Process() {
  return (
    <div className={s.ctn}>
      <div className={`${s.wrp} wrp`}>
        <div className={s.heading}>
          <h1>My Process</h1>
          <p>
            During my 22-year career, I&apos;ve managed a portfolio exceeding $7.9 billion. I lead a team of 650 individuals, offering innovative investment advice. My top priority is safeguarding your investments, reducing risks, and maximizing profits. With my expertise and commitment, your investments are in capable hands, ensuring a prosperous future.
          </p>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <FaBookReader />
            <h2>Learn</h2>
            <p>Understanding clients is vital. By assessing risk, goals, and financial history, we tailor solutions to meet unique needs and objectives effectively.</p>
          </div>

          <div className={s.card}>
            <GiProfit />
            <h2>Strategy</h2>
            <p>We understand clients and personalize strategies through collaborative workshops. Transparent dialogue and pooled expertise result in a success-driven plan.</p>
          </div>

          <div className={s.card}>
            <GiPodiumWinner />
            <h2>Success</h2>
            <p> I carefully evaluate choices, offering viable, actionable wealth strategies. No abstract concepts, just tangible solutions for optimal results in your financial journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
