import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import firebase from "./../../firebase"

const HeaderPopupForm = () => {
  const ref = firebase.firestore().collection("potentialProviders")

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" Name is required"),
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
    <form
      className="font-gordita"
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <label>Name</label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Your Name"
              name="name"
              {...register("name")}
              className={`${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name?.message}</div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <label>Email</label>
            <input
              autoComplete="off"
              placeholder="Email Address"
              name="email"
              type="text"
              {...register("email")}
              className={` ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email?.message}</div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>Escooter / Ebike / Bike</label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Your Model"
              name="model"
              {...register("name")}
              className={`${errors.name ? "is-invalid" : ""}`}
            />
            {errors.model && (
              <div className="invalid-feedback">{errors.model?.message}</div>
            )}
          </div>
        </div>

        <div className="col-12">
          <button className="theme-btn-seven demo-button w-100">Send</button>
        </div>
      </div>
    </form>
  )
}

export default HeaderPopupForm
