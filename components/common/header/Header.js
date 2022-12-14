import Link  from "next/link"
import { useEffect, useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBg)
    return () => window.removeEventListener('scroll', changeBg)
  })

  return <nav className={navbar ? 'nav nav-bg' : 'nav'}>
    <div className="container">
      <Link href="/">
        <a className="nav-logo">Solid Academy</a>
      </Link>
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item btn--call">
            <a href="tel:+996707629617" className="nav-link btn btn-brighred animate-y ">Позвонить</a>
          </li>
        </ul>
        <div className="menu-bars" id="toggle">
          <input type="checkbox" id="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>;
}
