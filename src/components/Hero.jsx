import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import bg from "./../assets/images/assets/bgHero.svg"
import firebase from "./../firebase"

function Hero() {
  const ref = firebase.firestore().collection("potentialusers")
  // for validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(data, e) {
    // display form data on success
    console.log(data)
    ref
      .doc()
      .set(data)
      .catch((err) => {
        console.log(err)
      })
    e.target.reset()
  }
  return (
    <div className="client-feedback-slider-five mt-200 md-mt-10" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
            <div className="title-style-six text-center mt-25">
              <h2>
                Get <span>Whatever</span> you need <br />
                To your <span>Front door</span>
                in <span>Two</span> Hours
              </h2>
              <p>
                We deliver you everything that you don't have to your front
                door. <br />
                Forget about the things you could have had. <br />
                Now you can get everything you want!
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
                  <button className="demo-button">I'm Interested</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img alt="dots bg" className="hero-bg" src={bg} />
    </div>
  )
}

export default Hero
