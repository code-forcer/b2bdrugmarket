import React from 'react'
import Link from "next/link"
export default function Footer() {
  return (
   <footer className="footer">
    <div className="container-fluid d-flex justify-content-between">
      <nav className="pull-left">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href="#">
              B2BDrugStore
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#"> Help </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#"> Licenses </Link>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        2024, made with <i className="fa fa-heart heart text-danger"></i> by
        <Link href="http://codeforcer.netlify.app">Codeforcerdev</Link>
      </div>
      <div>
        Distributed by
        <Link target="_blank" href="#">It360media.ng.com</Link>.
      </div>
    </div>

  </footer>
  )
}
