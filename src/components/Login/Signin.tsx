import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from "../Formik/FormControl/Controls";
import FormControl from "../Formik/FormControl/FormControl";
import Form from "../Formik/FormComponent";
import Alert, { IAlert } from "../Alert/Alert";
import axios from "../../axiosInstance/axios";
import { useNavigate } from "react-router-dom";
interface ILogin {
  email: string;
  password: string;
  rem: string | null;
}

interface IProps {
}

const Signin: React.FC<IProps> = () => {
  const [alert, setAlert] = useState<IAlert>({ varient: 'blue', message: '' })
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState('sign in');
  const navigate = useNavigate();
  
  const initialValues: ILogin = {
    email: '',
    password: '',
    rem: null,
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email!").required("Required!"),
    password: Yup.string().required("Required!"),
  })
  
  
  const onSubmit = (data: ILogin, actions: any) => {
    setButtonText('please wait...')
    axios.post('action.php?action=login', data)
      .then(res => {
        if (res.data !== 'login') {
          setShowAlert(true);
          if (res.data.varient && res.data.message) {
            setAlert({ varient: res.data.varient, message: res.data.message })
          } else {
            console.log(res.data)
            setAlert({varient: 'danger', message: 'Something went wrong! try again later!'})
          }
        } else {
          setShowAlert(true);
          setAlert({ varient: 'blue', message: 'Logged in successfully!' });
          localStorage.setItem('email', data.email);
          actions.resetForm();
          actions.setSubmitting(true);
          navigate('home');
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setButtonText('sign in');
      })
  }
  
  return (
    <div className="Card rounded-left py-9 px-6 grow-1.4">
      {showAlert && <Alert varient={alert.varient} > {alert.message} </Alert>}
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
            </div>
            <Button
              type="submit" varient="blue"
              id="login-btn" className="w-full capitalize text-lg myBtn"
              disabled={!formik.isValid}
            >
              { buttonText }
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
