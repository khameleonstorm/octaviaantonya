"use client"
import s from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo.svg'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react'

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  const closeMenu = () => {
    setMenu(false)
  }
  const openMenu = () => {
    setMenu(true)
  }


  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <Link href='/' className={s.logo}>
          <Image src={logo} alt="Octavia Antonya Cephas" width={30} quality={100}/>
          <h1>Octavia</h1>
        </Link>

        <div className={s.menu} onClick={closeMenu} style={menu? {right: '0'} : {}}>
          <GrClose className={s.close}/>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/service'>service</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <HiMenuAlt3 className={s.open} onClick={openMenu}/>
      </div>
    </div>
  )
}
