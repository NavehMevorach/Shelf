import React, { useState } from "react"
import Modal from "react-modal"
import HeaderPopupForm from "./form/HeaderPopupForm"
import close from "./../assets/images/icon/close.svg"
Modal.setAppElement("#root")

function LastCta() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModalOne() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className=" mt-150 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Love our Vision? <br /> <span>Join</span> Now.
                </h2>
              </div>

              <div className="form-input-updated">
                <button onClick={toggleModalOne} className="demo-button">
                  Join
                </button>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
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

export default LastCta
