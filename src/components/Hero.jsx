import React, { useState } from "react"
import Modal from "react-modal"
import bg from "./../assets/images/assets/bgHero.svg"
import HeaderPopupForm from "./form/HeaderPopupForm"
import ils from "./../assets/images/assets/ils_19.svg"
import close from "./../assets/images/icon/close.svg"

Modal.setAppElement("#root")

function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModalOne() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="client-feedback-slider-five mt-200 md-mt-10" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
              <div className="title-style-six text-center mt-25">
                <h2>
                  <span>Anything</span> you need <br />
                  To your Front door
                  <br />
                  in <span>Two</span> Hours
                </h2>
                <p>
                  We deliver you everything that you don't have to your front
                  door. <br />
                  Forget about the things you could have had. <br />
                  Now you can get everything you want!
                </p>
                <div className="form-input-updated">
                  <button onClick={toggleModalOne} className="demo-button">
                    Start now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="dots bg" className="hero-bg" src={bg} />
      </div>
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
    </>
  )
}

export default Hero
