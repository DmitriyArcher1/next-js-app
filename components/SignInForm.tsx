'use client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from 'react';
import type { FormEventHandler } from 'react';

const SignInForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        })

        if (res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }

    return (
        <form className='auth__form' onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Введите email...' required /> 
            <input type="password" name='password' placeholder='Введите пароль...' required />
            <div className="submit__button">
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export default SignInForm;