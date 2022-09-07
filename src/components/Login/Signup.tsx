import React, { Dispatch, SetStateAction } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from "../Formik/FormControl/Controls";
import FormControl from "../Formik/FormControl/FormControl";
import Form from "../Formik/FormComponent";

interface IRegister {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
  setIsSignup: Dispatch<SetStateAction<boolean>>;
}

const SignUp: React.FC<IProps> = ({setIsSignup}) => {
  const initialValues: IRegister = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required!"),
    email: Yup.string().email("Enter a valid email!").required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),''], 'Password Do Not Match!').required("Required!"),
  })
  
  const onSubmit = (data: IRegister, actions: any) => {
    console.log(data);
    actions.resetForm();
    actions.setSubmitting(true);
    setIsSignup(false);
  }
  
  return (
    <div className="Card rounded-left py-9 px-6 grow-1.4">
      <h1 className="text-center text-3xl font-bold text-blue-600 tracking-tight">
        Create Acount
      </h1>
      <hr className="my-1" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form varient="blue" className="w-full m-0" id="register-form">
              <FormControl
                control="input" type="text"
                name="fullName" placeholder="Full-Name"
                className="w-full"
              />
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
              <FormControl
                control="input" type="password"
                name="confirmPassword" placeholder="Confirm Password"
                className="w-full"
              />
            <Button 
              type="submit" varient="blue"
              id="register-btn" className="w-full capitalize text-lg myBtn"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
