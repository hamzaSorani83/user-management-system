import React, { Dispatch, SetStateAction, useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from "../Formik/FormControl/Controls";
import FormControl from "../Formik/FormControl/FormControl";
import Form from "../Formik/FormComponent";
import axios from '../../axiosInstance/axios'
import { Alert } from '../'
import { IAlert } from "../Alert/Alert";

interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
  setIsSignup: Dispatch<SetStateAction<boolean>>;
}


const SignUp: React.FC<IProps> = ({ setIsSignup }) => {
  const [alert, setAlert] = useState<IAlert>({ varient: 'blue', message: '' })
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState('sign up')
  const initialValues: IRegister = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Enter a valid email!").required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),''], 'Password Do Not Match!').required("Required!"),
  })
  
  const onSubmit = (data: IRegister, actions: any) => {
    setButtonText('please wait...')
    axios.post('http://localhost/react/user-management-system/api/action.php?action=register', data)
      .then(res => {
        if (res.data !== 'register') {
          console.log(res.data)
          setShowAlert(true);
          setAlert({varient: res.data.varient, message: res.data.message})
        } else {
          setShowAlert(true);
          setAlert({varient: 'blue', message: 'Record created successfully!'})
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setButtonText('sign up');
      })
    actions.resetForm();
    actions.setSubmitting(true);
  }
  
  return (
    <div className="Card rounded-left py-9 px-6 grow-1.4">
      {showAlert && <Alert varient={alert.varient} > {alert.message} </Alert>}
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
                name="name" placeholder="Full-Name"
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
              id="register-btn" className="w-full capitalize text-lg"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
