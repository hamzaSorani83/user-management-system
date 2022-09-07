import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from "../Formik/FormControl/Controls";
import FormControl from "../Formik/FormControl/FormControl";
import Form from "../Formik/FormComponent";

interface IForgot {
  email: string;
}

const Forgot = () => {
  const initialValues: IForgot = {
    email: '',
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email!").required("Required!"),
  })
  
  const onSubmit = (data: IForgot, actions: any) => {
    console.log(data);
    actions.resetForm();
    actions.setSubmitting(true);
  }
  
  return (
    <div className="Card rounded-left py-9 px-6 grow-1.4">
      <h1 className="text-center text-3xl font-bold text-blue-600 tracking-tight">
        Forgot Your Password
      </h1>
      <hr className="my-3" />
      <p className="text-gray-500 my-3 text-center">To reset your password. enter the registered e-mail address and we will send you the rest instructions on your e-mail!</p>
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
            <Button
              type="submit" varient="blue"
              id="login-btn" className="w-full capitalize text-lg myBtn"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forgot;
