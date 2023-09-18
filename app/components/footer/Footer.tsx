import { FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail, IoLogoTwitter } from 'react-icons/io'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>

        <div className={s.contacts}>
          <div className={s.contact}>
            <div className={s.contactWrp}>
              <div><a href="mailto: help@octaviaantony.com"><IoMdMail /></a><p>help@octaviaantony.com</p></div>
            </div>

            <div className={s.contactWrp}>
              <div><a href="https://t.me/Octavia_AntonyaCephas"><FaTelegramPlane /></a><p>Telegram</p></div>
              <div><a href="https://x.com/octaviaantonya/"><IoLogoTwitter /></a><p>Twitter</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.copyright}>
        <p>© 2022 Octavia Antonya Cephas</p>
      </div>
    </div>
  )
}
