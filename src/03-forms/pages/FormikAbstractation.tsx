import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput, MyCheckbox } from '../components';
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

export const FormikAbstrataction = () => {

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
                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='...'/>

                            <MyTextInput 
                                label='Last Name' 
                                name='lastName'/>

                            <MyTextInput 
                                label='Email Addres' 
                                name='email' 
                                type='email'/>
                            
                            <MyCheckbox label='Terms and conditions' name='terms'/>

                            <MySelect label='Job Type' name='jobType'>
                                {
                                    jobTypes.map(type => (
                                        <option key={type} value={type}>{type.toLocaleUpperCase()}</option>
                                    ))
                                }
                            </MySelect>
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                        </Form> 
                    )

                }

            </Formik>

        </div>
    )
}
