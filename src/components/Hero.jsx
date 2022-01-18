import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import useEventListener from "@use-it/event-listener"
import ReactSpritz from "react-spritz"
import bg from "./../assets/images/assets/bgHero.svg"
import HeaderPopupForm from "./form/HeaderPopupForm"
import close from "./../assets/images/icon/close.svg"

const data =
  "Hi! we know you're used to a catchy slogan, but we thought to be honest and tell you about Shelf without unnecessary bullshit. Shelf is an on-demand service that lets you access items, tools, and equipment, which are delivered to your door, and we will collect them when you're done. It's that simple! with just a few taps on your phone, you can access infinite products whenever you want and wherever you are."
Modal.setAppElement("#root")

function Hero() {
  const [playing, setPlaying] = useState(true)
  const [stopedPlaying, setStopedPlaying] = useState(false)
  const [restart, setRestart] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {}, [])

  function handleKeyPress(e) {
    e.preventDefault()
    if (e.keyCode === 32) {
      setPlaying(!playing)
    }
  }

  function handleTapToPause() {
    setPlaying(!playing)
  }

  function handleStop() {
    setRestart(false)
    setStopedPlaying(true)
  }

  function handleRestart(e) {
    e.preventDefault()
    setRestart(true)
    setStopedPlaying(false)
  }

  function toggleModalOne() {
    setIsOpen(!isOpen)
  }

  useEventListener("keydown", handleKeyPress)

  return (
    <>
      <div className="client-feedback-slider-five mt-200 md-mt-10" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
              <div className="title-style-six text-center mt-25">
                <div onKeyDown={handleKeyPress} className="spritz-container">
                  <h1>
                    {restart && (
                      <ReactSpritz
                        text={data}
                        wpm={230}
                        playing={playing}
                        startTimeout={2000}
                        onStop={handleStop}
                      />
                    )}
                    {stopedPlaying && (
                      <div className="form-input-updated">
                        <button
                          onClick={toggleModalOne}
                          className="demo-button">
                          Try it now
                        </button>
                      </div>
                    )}
                  </h1>
                  {stopedPlaying ? (
                    <p onClick={handleRestart}>Click Here to repeat</p>
                  ) : (
                    <p onClick={handleTapToPause}>
                      {playing
                        ? "Press Space or Click to Pause"
                        : "Press Space or Click to Continue"}
                    </p>
                  )}
                </div>
                {/* <h1>
                  Replacing Shopping <br /> With <span>Access.</span>
                </h1>
                <p>
                  A new way of thinking about 'stuff' - instead of physical
                  ownership, <br /> we provide instant access to what you need
                  when you need it.
                </p>
                <div className="form-input-updated">
                  <button onClick={toggleModalOne} className="demo-button">
                    Try it now
                  </button>
                </div> */}
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
    </>
  )
}

export default Hero
