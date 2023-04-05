import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import routes from '../routes'
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../redux/actions';
import Cookies from 'universal-cookie'

import { FlatButton } from '../ui/Button'
import { LogInput } from '../ui/Input'
import LoginDiv from '../ui/LoginDiv'
import ButtonsDiv from '../ui/ButtonsDiv'
import Loading from '../ui/Loading';

export const Register = () => {
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)

    const cookies = new Cookies();
    
    const handleLogin = () => {
        navigate(routes.login)
    }

    const makeSignup = () => {
        const credentials = {
            nickname: nickname,
            login: email,
            password: password
        }
        dispatch(signupAsync(credentials))
    }

    const handelLogout = () => {
        cookies.remove('token', { path: '/' });
        navigate(routes.login)
    }

    return (
        <>
        {isLoading ? <Loading /> : null}
        {cookies.get('token') === undefined && (
            <LoginDiv>
                <LogInput for="nickname" label='Nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} type="text" placeholder="Nickname" />
                <LogInput for="email" label='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="mymail@mail.com" />
                <LogInput for="password" label='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <ButtonsDiv>
                    <FlatButton onPress={makeSignup} color="primary" text='Sign up' />
                    <FlatButton onPress={handleLogin} color="secondary" text='You have an account? Log in here.' />
                </ButtonsDiv>
            </LoginDiv>
        )}
        {cookies.get('token') !== undefined && (
            <LoginDiv>
                <h1>You are logged in!</h1>
                <FlatButton onPress={handelLogout} text='Log out' />
            </LoginDiv>
        )}
        </>
    )
}