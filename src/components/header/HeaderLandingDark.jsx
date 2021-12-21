import React, { useState } from "react"
import Scrollspy from "react-scrollspy"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import HeaderPopupForm from "../form/HeaderPopupForm"
import logo from "./../../assets/images/logo.svg"
import ils from "./../../assets/images/assets/ils_19.svg"
import close from "./../../assets/images/icon/close.svg"
import user from "./../../assets/images/icon/user.svg"

Modal.setAppElement("#root")

const HeaderLandingDark = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [navbar, setNavbar] = useState(false)

  function toggleModalOne() {
    setIsOpen(!isOpen)
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }>
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Shelf" />
            </Link>
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent">
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "home",
                      "about",
                      "user-flow",
                      "providers",
                      "partnerships",
                    ]}
                    currentClassName="active"
                    offset={-90}>
                    <li className="nav-item">
                      <a href="#home" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#user-flow" className="nav-link">
                        Borrowers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#providers" className="nav-link">
                        Providers
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#partnerships" className="nav-link">
                        Partnerships
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            <button className="demo-button" onClick={toggleModalOne}>
              <span>List item</span>
              <img src={user} alt="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/doc-landing">
            <img src={logo} alt="Shelf" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src={close} alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav  "
          items={["home", "about", "user-flow", "providers", "partnerships"]}
          currentClassName="active"
          offset={-90}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#user-flow" className="nav-link" onClick={handleClick}>
              Borrowers
            </a>
          </li>
          <li className="nav-item">
            <a href="#providers" className="nav-link" onClick={handleClick}>
              Providers
            </a>
          </li>

          <li className="nav-item">
            <a href="#partnerships" className="nav-link" onClick={handleClick}>
              Partnerships
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one dark-style"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}>
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src={close} alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “We’re living in a world where people can become
                      businesses in 60 seconds”
                    </blockquote>
                    <span className="bio">—Brian Chesky</span>
                  </div>
                </div>
                <img src={ils} alt="" className="illustration mt-auto" />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">List your Item</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </>
  )
}

export default HeaderLandingDark
