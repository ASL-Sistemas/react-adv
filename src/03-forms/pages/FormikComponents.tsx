import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}

                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 caractares o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe tener 15 caractares o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Debe ser un email valido')
                            .required('Requerido')

                    })
                }
            >

                {
                    formik => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name='firstName' type='text'/>
                            <ErrorMessage name='firstName' component='span'/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text'/>
                            <ErrorMessage name='lastName' component='span'/>

                            <label htmlFor="email">Email Address</label>
                            <Field name='email' type='email'/>
                            <ErrorMessage name='email' component='span'/>

                            <button type='submit'>Submit</button>
                        </Form> 
                    )

                }

            </Formik>

        </div>
    )
}
