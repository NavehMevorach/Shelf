import React, { useState } from "react"
import Scrollspy from "react-scrollspy"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import HeaderPopupForm from "../form/HeaderPopupForm"
import logo from "./../../assets/images/logo.svg"
import close from "./../../assets/images/icon/close.svg"
import plus from "./../../assets/images/icon/plus.svg"

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
    if (window.scrollY >= 30) {
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
                      "why",
                      "items",
                      "how-it-works",
                      "Insurance",
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
                      <a href="#why" className="nav-link">
                        Why
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#items" className="nav-link">
                        items
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#how-it-works" className="nav-link">
                        How it works
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#Insurance" className="nav-link">
                        Insurance
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            <button className="demo-button" onClick={toggleModalOne}>
              <span>Try it now</span>
              <img src={plus} alt="icon" />
            </button>
          </div>
        </div>
      </div>

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
          items={["home", "about", "why", "items", "how-it-works", "Insurance"]}
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
            <a href="#why" className="nav-link" onClick={handleClick}>
              Why
            </a>
          </li>
          <li className="nav-item">
            <a href="#items" className="nav-link" onClick={handleClick}>
              Items
            </a>
          </li>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-link" onClick={handleClick}>
              How it works
            </a>
          </li>
          <li className="nav-item">
            <a href="#Insurance" className="nav-link" onClick={handleClick}>
              Insurance
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
                      “I think our obsession with ownership is at a tipping
                      point and the sharing economy is part of the antidote for
                      that.”
                    </blockquote>
                    <span className="bio">—Richard Branson</span>
                  </div>
                </div>
                {/* <img src={ils} alt="" className="illustration mt-auto" /> */}
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Start Access More</h2>
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
