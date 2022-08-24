import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

interface RegisterData {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register formik Page</h1>

            <Formik

                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}

                onSubmit={async (values: RegisterData) => {
                    await sleep(500);
                    console.log(values);

                }}

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Debe tener 15 caractares o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Debe ser un email valido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, "debe ser de al menos 6 caracteres")
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                            .required('Requerido'),
                    })
                }

            >
                {
                    ({ isSubmitting, handleReset }) => (
                        <Form>
                            <MyTextInput
                                label=' Name'
                                name='name'
                                />

                            <MyTextInput
                                label='Email Addres'
                                name='email'
                                type='email' />

                            <MyTextInput
                                label='Password'
                                type='password'
                                name='password1'
                                 />

                            <MyTextInput
                                label='Confirm Password'
                                type='password'
                                name='password2'
                                />
                            <button type='submit' disabled={isSubmitting}>Create</button>
                            <button onClick={handleReset}>Reset</button>
                        </Form>

                    )
                }

            </Formik>


        </div>
    )
}
