import React from 'react'
import './header.css'
import logo from './../../assets/images/logo.png'
import { nav } from './../../assets/data/data'
import { Link } from 'react-router-dom'
import { User } from './User'

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  return (
    <header className='header'>
      <div className="scontainer flex">
        <div className="logo">
          <img src={logo} alt="" width='80px' />
        </div>

        {/*----- Nav Bar-----*/}
        <nav>
          <ul>
            {nav.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*-----Account-----*/}
        <div className="account flex__center">
          <User />
        </div>
      </div>
    </header>
  )
}
