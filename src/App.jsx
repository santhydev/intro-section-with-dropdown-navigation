import { Fragment, useState } from "react"
import Menu from "./components/Menu/Menu"
import "./App.scss"


function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <Fragment>
      {/* Header */}
      <header className="header">
        {/* Topbar */}
        <img src="/images/logo.svg" alt="logo snap"/>
        <img 
          src={`/images/icon-${showNav ? "close-menu" : "menu"}.svg`} 
          alt={`icon ${showNav ? "close menu" : "menu"}`}
          className="header__icon"
          onClick={() => setShowNav(!showNav)}
        />
        {/* Navigation */}
        <Menu showMenu={showNav} setShowMenu={setShowNav}/>
      </header>




      {/* Hero */}
      <section className="hero">
        {/* Background */}
        <picture className="hero-image">
          <source srcSet="/images/image-hero-desktop.png" media="(min-width: 1200px)" className="hero-image__item" />
          <img src="/images/image-hero-mobile.png" alt="hero images" className="hero-image__item" />
        </picture>
        {/* Text */}
        <article className="hero-text">
          <h1 className="hero-text__title">Make <span className="hero-text__title--br">remote work</span></h1>
          <p className="hero-text__description">
            Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
          </p>
          <button className="btn btn-hero">Learn more</button>
          <section className="hero-clients">
            <img src="/images/client-databiz.svg" alt="databiz" className="hero-clients__logo" />
            <img src="/images/client-audiophile.svg" alt="audiophile" className="hero-clients__logo" />
            <img src="/images/client-meet.svg" alt="meet" className="hero-clients__logo" />
            <img src="/images/client-maker.svg" alt="maker" className="hero-clients__logo" />
          </section>
        </article>
      </section>
    </Fragment>
  )
}

export default App
