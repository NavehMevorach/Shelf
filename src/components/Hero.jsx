import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import bg from "./../assets/images/assets/bgHero.svg"

function Hero() {
  // for validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    sendMessage: Yup.string().required("Please,leave us a message."),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data))
    e.target.reset()
  }
  return (
    <div className="client-feedback-slider-five mt-200 md-mt-10" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
            <div className="title-style-six text-center mt-25">
              <h2>
                <span>Micro</span>-Mobility <br />
                Powered by <span>You</span>
              </h2>
              <p>
                Access e-Scooters and Bikes <br />
                wherever and whenever you need
              </p>
              <form
                className="contact-form-updated mt-30"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input-updated">
                  <input
                    autoComplete="off"
                    placeholder="Email Address"
                    name="email"
                    type="text"
                    {...register("email")}
                    className={` ${errors.email ? "is-invalid" : ""}`}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  )}
                  <button className="demo-button">Join Beta</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img className="hero-bg" src={bg} />
    </div>
  )
}

export default Hero
