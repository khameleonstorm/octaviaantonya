import s from './AboutMe.module.css'

export default function AboutMe() {
  return (
  <div className={s.ctn}>
    <div className={s.moreText}>
      <div className={s.left}>
        <h1><span>Octavia </span> Antonya Cephas </h1>
        <p>
        Throughout my career, I&apos;ve traversed diverse phases, honing a comprehensive skill set both within and beyond the financial realm. This breadth of experience empowers me to effectively oversee your investments, guaranteeing a steadfast path to profitability. I hold esteemed registrations with six leading investment firms, have excelled in six brokerage examinations, and possess licenses across all 53 US states—a testament to my unwavering expertise and commitment.
        </p>
      </div>
      <div className={s.left}>
        <h1><span>Education </span> & Experience</h1>
        <p>
        I&apos;ve worked with over 600 clients, in 20 counties, over 3 continents. What this has shown me is not only that success can happen anywhere, but that the building blocks of success are within everyone, wherever they come from. 
        </p>
        <p>
        I am never satisfied with my work until my clients have achieved all the financial goals that we set out together. It&apos;s this determination and refusal to let anyone down that has become my hallmark in the industry. 
        </p>
        <a href='https://brokercheck.finra.org/individual/summary/6992798' className='bigBtn'>More Details!</a>
      </div>
    </div>
  </div>
  )
}
