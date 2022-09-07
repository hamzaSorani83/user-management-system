import { ErrorMessage } from "formik";


interface IProps {
  name: string;
}

const Input: React.FC<IProps> = ({ name }) => {
  return (
    <ErrorMessage name={name} >
      {
        message => {
          return <a href={'#' + name} className="Alert AlertIndigo font-medium mt-3 underline" >
            {message}
          </a>
        }
      }
    </ErrorMessage>
  )
}

export default Input;