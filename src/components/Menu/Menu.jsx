import "./Menu.scss"


const DownLink = ({children, icon}) => {
  return (
    <li>
      <a href="#" className="nav-submenu__link">
        {icon && <img src={icon} alt={`icon ${children.toLowerCase()}`} className="nav-submenu__icon" />} 
        {children}
      </a>
    </li>
  )
}


function Menu({showMenu, setShowMenu}) {
  const handleDropdown = (e) => {
    e.target.nextElementSibling.classList.toggle("nav-submenu--show")
  }
  const handleClickNav = (e) => {
    (e.target.classList.contains("nav")) && setShowMenu(!showMenu)
  }
  
  return (
    <nav className={`nav ${showMenu && "nav--show"}`} onClick={handleClickNav}>
      <div className={`nav-container ${showMenu && "nav-container--show"}`}>
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <span 
              className="nav-menu__down"
              onClick={handleDropdown}
            >
              Features <img src="/images/icon-arrow-down.svg" alt="icon arrow down" style={{pointerEvents: "none"}} />
            </span>
            <ul className="nav-submenu nav-submenu--1">
              <DownLink icon={"/images/icon-todo.svg"}>Todo List</DownLink>
              <DownLink icon={"/images/icon-calendar.svg"}>Calendar</DownLink>
              <DownLink icon={"/images/icon-reminders.svg"}>Reminders</DownLink>
              <DownLink icon={"/images/icon-planning.svg"}>Planning</DownLink>
            </ul>
          </li>
          <li className="nav-menu__item">
            <span 
              className="nav-menu__down"
              onClick={handleDropdown}
            >
              Company <img src="/images/icon-arrow-down.svg" alt="icon arrow down" style={{pointerEvents: "none"}} />
            </span>
            <ul className="nav-submenu nav-submenu--2">
              <DownLink>History</DownLink>
              <DownLink>Our Team</DownLink>
              <DownLink>Blog</DownLink>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-menu__link">Careers</a>
          </li>
          <li>
            <a href="#" className="nav-menu__link">About</a>
          </li>
        </ul>
        <div className="nav-user">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-register">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Menu