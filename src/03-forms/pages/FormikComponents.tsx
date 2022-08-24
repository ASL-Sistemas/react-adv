import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms: boolean;
    jobType: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const jobTypes: string[] = ['','developer', 'designer', 'it-senior'];

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}

                onSubmit={async (values: FormValues) => {
                    await sleep(500);
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
                            .required('Requerido'),
                        terms:Yup.boolean()
                                  .oneOf([true], 'Debe aceptar los terminos y condiciones'),
                        jobType: Yup.string()
                                     .oneOf(jobTypes, 'Debe seleccionar algun valor')
                                     .required('Requerido')
                            

                    })
                }
            >

                {
                    ({isSubmitting}) => (
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
                            
                            <label>
                                <Field name='terms' type='checkbox'/>
                                Terms and conditions
                            </label>
                            <ErrorMessage name='terms' component='span'/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                {
                                    jobTypes.map(type => (
                                        <option key={type} value={type}>{type.toLocaleUpperCase()}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name='jobType' component='span'/>
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                        </Form> 
                    )

                }

            </Formik>

        </div>
    )
}
