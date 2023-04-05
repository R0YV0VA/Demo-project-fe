import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import routes from '../routes'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { signinAsync } from '../redux/actions'

import { FlatButton } from '../ui/Button'
import { LogInput } from '../ui/Input'
import LoginDiv from '../ui/LoginDiv'
import ButtonsDiv from '../ui/ButtonsDiv'
import Loading from '../ui/Loading';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const cookies = new Cookies();

    const handleRegister = () => {
        navigate(routes.register)
    }

    const makeLogin = () => {
        const credentials = {
            login: email,
            password: password
        }
        dispatch(signinAsync(credentials))
    }   

    const handelLogout = () => {
        cookies.remove('token', { path: '/' });
        window.location.reload();
    }

    return (
        <>
        {isLoading ? <Loading /> : null}
        {cookies.get('token') === undefined ? 
            <LoginDiv>
                <LogInput for="email" label='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="mymail@mail.com" />
                <LogInput for="password" label='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <ButtonsDiv>
                    <FlatButton onPress={makeLogin} color="primary" text='Log in' />
                    <FlatButton onPress={handleRegister} color="secondary" text='Don`t have an account? Sing up here.' />
                </ButtonsDiv>
            </LoginDiv>
        :
            <LoginDiv>
                <h1>You are logged in!</h1>
                <FlatButton onPress={handelLogout} text='Log out' />
            </LoginDiv>
        }
        </>
    )
}