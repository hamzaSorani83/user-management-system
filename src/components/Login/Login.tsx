import React from "react";
import "./Login.css";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from "../Formik/FormComponent";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import FormControl from "../Formik/FormControl/FormControl";
import { Button } from "../Formik/FormControl/Controls";
import { InputField } from "../";

interface ILogin {
  email: string;
  password: string;
  rem: string;
}

const Login = () => {
  const initialValues: ILogin = {
    email: '',
    password: '',
    rem: '',
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().email("").required(""),
    password: Yup.string().required(""),
    rem: Yup.string().required(""),
  })
  
  const onSubmit = (data: ILogin, actions: any) => {
    console.log(data);
    actions.resetForm();
    actions.setSubmitting(false);
  }
  
  return (
    <div className="h-screen flex justify-center m-7 md:m-0" id="login-box">
      <div className="w-full lg:w-10/12 my-auto">
        <div className="flex custom-shadow custom-card">
          <div className="Card rounded-left p-3 grow-1.4">
            <h1 className="text-center text-3xl font-bold text-blue-600 tracking-tight">
              Sign in to Account
            </h1>
            <hr className="my-1" />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {
                formik => (
                  <Form varient="blue" className="px-3" id="login-form">
                    {/* email */}
                    <InputField name="email" icon={faEnvelope}>
                      <FormControl control="input" type="email"
                        name="email" placeholder="E-Mail" className="w-full"
                      />
                    </InputField>
                    {/* password */}
                    <InputField name="password" icon={faKey}>
                      <FormControl control="input" type="password"
                        name="password" placeholder="Password" className="w-full"
                      />
                    </InputField>
                    {/* checkbox */}
                    <div className="flex justify-between">
                      <FormControl control="checkbox" name="rem"
                        options={[{key: 'remember me', value:'rememberMe'}]}
                      />
                      <div className="forgot">
                        <a href="#forget" id="forgot-link">Forgot Passowrd?</a>
                      </div>
                    </div>
                    <Button type='submit' varient="blue" id='login-btn' className="w-full capitalize text-lg">
                      sign in
                    </Button>
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
