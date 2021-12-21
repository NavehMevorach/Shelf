import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

function LastCta() {
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
    <div className=" mt-150 md-mt-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-11 m-auto">
            <div className="title-style-six text-center">
              <h2>
                Love our Vision? <br /> stay <span>Updated</span>
              </h2>
            </div>
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
                <button className="demo-button">Hell ya</button>
              </div>
            </form>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  )
}

export default LastCta
