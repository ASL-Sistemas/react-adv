import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

interface RegisterData {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

export const RegisterPage = () => {

    const { 
        formData, 
        onChange, 
        resetForm, 
        isValidEmail, 
        isEmpty,
        isValidLength,
        areEqual,
        name, 
        email, 
        password1, 
        password2} = useForm<RegisterData>({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>

                <input type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${isEmpty(name) && 'has-error'}`} />
                {isEmpty(name) && <span>* Este campo es necesario</span>}

                <input type="text"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${ !isValidEmail(email) && 'has-error'}`} />
                { !isValidEmail(email) && <span>* Este email no es valido</span>}

                <input type="password"
                    placeholder='Password'
                    name='password1'
                    value={password1}
                    onChange={onChange}
                    className={`${!isValidLength(password1, 6) && 'has-error'}`} />
                {!isValidLength(password1, 6) && <span>* La contraseña debe ser de 6 caracteres por lo menos</span>}

                <input type="password"
                    placeholder='Repeat Password'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    className={`${!areEqual(password1, password2) && 'has-error'}`} />
                {!areEqual(password1, password2) && <span>Las contreseñas no coinciden</span>}

                <button type='submit'>
                    Create
                </button>

                <button onClick={resetForm}>
                    Reset
                </button>
            </form>
        </div>
    )
}
