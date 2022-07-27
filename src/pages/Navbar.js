import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false)
  const toggle = () => setIsActive(!isActive);

 

  return (
<div>
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </img>
      </a>
      <a role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggle}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <a className="navbar-item">
          <Link to="/">Home</Link>
        </a>
        <a className="navbar-item">
          <Link to="/About">About</Link>
        </a>
        <a className="navbar-item">
        <Link to="/Resources">Resources</Link>
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
          More
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">
            <Link to="/Jobs">Jobs</Link>
            </a>
            <a className="navbar-item">
            <Link to="/Contact">Schedule a Session</Link>
            </a>
            <a className="navbar-item">
            <Link to="/FAQ">FAQ</Link>
            </a>
            <hr className="navbar-divider">
            </hr>
            <a className="navbar-item">
            <a href="mailto:your@email.com">Report an Issue</a>
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
            <strong><Link to="/Contact">Schedule a Session</Link></strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
  )
}

export default Navbar