import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button, FormControl, Form } from '../Tools/Formik'

import axios from '../../axiosInstance/axios'
import { Alert } from '../Tools'
import { IAlert } from "../Tools/Alert/Alert";
import { useNavigate } from "react-router-dom";

interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
}


const SignUp: React.FC<IProps> = () => {
  const [alert, setAlert] = useState<IAlert>({ varient: 'blue', message: '' })
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState('sign up');
  const navigate = useNavigate();
  
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
    axios.post('action.php?action=register', data)
      .then(res => {
        if (res.data !== 'register') {
          setShowAlert(true);
          if (res.data.varient && res.data.message) {
            setAlert({ varient: res.data.varient, message: res.data.message })
          } else {
            console.log(res.data)
            setAlert({varient: 'danger', message: 'Something went wrong! try again later!'})
          }
        } else {
          setShowAlert(true);
          setAlert({ varient: 'blue', message: 'Record created successfully!' });
          localStorage.setItem('email', data.email);
          navigate('/home');
          actions.resetForm();
          actions.setSubmitting(true);
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setButtonText('sign up');
      })
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
              disabled={!formik.isValid}
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
