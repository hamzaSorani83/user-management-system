// import React from 'react'
// import { Field } from "formik";
// import DateView from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

interface IDate {
  name: string;
  [rest: string]: any;
}

// const DatePicker: React.FC<IDate> = ({name, ...rest}) => {
//   return (
//     <div className=''>
//       <Field name={name}>
//         {({ form, field }: any) => {
//           const { setFieldValue } = form
//           const { value } = field
//           return (
//             <div className="relative ">
//               <div className="flex z-50 absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                 <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
//               </div>
//               <DateView
//                 id={name} className="Form-date"
//                 {...field}
//                 {...rest}
//                 selected={value}
//                 onChange={val => setFieldValue(name, val)}
//               />
//             </div>
//           )
//         }}
//       </Field>
//     </div>
//   )
// }

// export default DatePicker



// to dont install date-picker 

const Date: React.FC<IDate> = ({name, ...rest}) => {
  return (
    <div>Date</div>
  )
}

export default Date