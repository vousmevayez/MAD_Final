import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../src/styles.css";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Signup = ({ registerUser }) => {
  return (
    <>
      <h1 class="h1style">Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          npiNum: "",
          email: "",
          address: "",
          phoneNum: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          npiNum: Yup.string()
            .min(10, "Must be 10 digits long")
            .max(10, "Must be 10 digits long")
            .matches(/^[0-9]+$/, "Must be only digits")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          address: Yup.string().required("Business Address Required"),
          phoneNum: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Digits only"
            )
            .required("Phone number required")
        })}
        onSubmit={(values, FormikBag) => {
          registerUser(values);
          FormikBag.resetForm({});
        }}
      >
        <Form class="formstyle">
          <FormInput
            class="inputstyle"
            label="First Name "
            name="firstName"
            type="text"
            placeholder="Eva"
          />{" "}
          <br />
          <FormInput
            class="inputstyle"
            label="Last Name "
            name="lastName"
            type="text"
            placeholder="Yeh"
          />{" "}
          <br />
          <FormInput
            class="inputstyle"
            label="Email Address "
            name="email"
            type="email"
            placeholder="yhyeh.st11@nycu.edu.tw"
          />{" "}
          <br />
          <FormInput
            class="inputstyle"
            label="Phone Number "
            name="phoneNum"
            type="text"
            placeholder="0925-123-456"
          />{" "}
          <br />
          <button type="submit" class="button-16">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Signup;
