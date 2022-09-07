import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from "../Formik/FormControl/Controls";
import FormControl from "../Formik/FormControl/FormControl";
import Form from "../Formik/FormComponent";

interface ILogin {
  email: string;
  password: string;
  rem: string;
}

const Signin = () => {
  const initialValues: ILogin = {
    email: '',
    password: '',
    rem: '',
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email!").required("Required!"),
    password: Yup.string().required("Required!"),
  })
  
  const onSubmit = (data: ILogin, actions: any) => {
    console.log(data);
    actions.resetForm();
    actions.setSubmitting(true);
  }
  
  return (
    <div className="Card rounded-left py-9 px-6 grow-1.4">
      <h1 className="text-center text-3xl font-bold text-blue-600 tracking-tight">
        Sign in to Account
      </h1>
      <hr className="my-1" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form varient="blue" className="w-full m-0" id="login-form">
              <FormControl
                control="input" type="email"
                name="email" placeholder="E-Mail"
                className="w-full"
              />
              <FormControl
                control="input" type="password"
                name="password" placeholder="Password"
                className="w-full"
              />
            <div className="flex justify-between">
              <FormControl
                control="checkbox" name="rem"
                options={[{ key: "remember me", value: "rememberMe" }]}
              />
              <div className="forgot">
                <a href="#forget" id="forgot-link">
                  Forgot Passowrd?
                </a>
              </div>
            </div>
            <Button
              type="submit" varient="blue"
              id="login-btn" className="w-full capitalize text-lg myBtn"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              sign in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
