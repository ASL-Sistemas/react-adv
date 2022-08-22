import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

interface RegisterData {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState<RegisterData>({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(data => ({
            ...data,
            [event.target.name]: event.target.value
        }));
    }

    const { name, email, password1, password2 } = registerData;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);
        
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>

                <input type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange} />

                <input type="text"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange} />

                <input type="password"
                    placeholder='Password'
                    name='password1'
                    value={password1}
                    onChange={onChange} />

                <input type="password"
                    placeholder='Repeat Password'
                    name='password2'
                    value={password2}
                    onChange={onChange} />

                <button type='submit'>
                    Create
                </button>
            </form>
        </div>
    )
}
