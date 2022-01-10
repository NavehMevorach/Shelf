import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import firebase from "./../../firebase"
import Checkbox from "./Checkbox"

const options = ["aaaa", "bbbb", "cccc", "dddd"]

const HeaderPopupForm = () => {
  const ref = firebase.firestore().collection("potentialProviders")
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  )
  const [isSent, setIsSent] = useState(false)
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
    const items = options.filter((_, i) => checkedState[i])
    data["items"] = [...items]
    console.log(data)
    ref
      .doc()
      .set(data)
      .catch((err) => {
        console.log(err)
      })
    e.target.reset()
    setCheckedState(new Array(options.length).fill(false))
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
    }, 2000)
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)
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
        <div className="col-12 grid-checkbox">
          {options.map((val, i) => (
            <Checkbox
              key={i}
              index={i}
              name={val}
              isChecked={checkedState[i]}
              handleCheckboxChange={handleOnChange}
            />
          ))}
        </div>

        <div className="col-12">
          <button className="theme-btn-seven demo-button w-100">
            {isSent ? "Thanks!" : "Send"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default HeaderPopupForm
