import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Button, Input, Label } from 'reactstrap'
import routes from '../routes'

export const UserCreate = () => {
    const ServerApi = axios.create({
        baseURL: "https://localhost:7003/" 
      });
    const cookies = new Cookies();
    const [nicknameText, setNicknameText] = useState('')
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [statusText, setStatusText] = useState('')
    const navigate = useNavigate()

    const createUser = async () => {
        const response = await ServerApi.post('/users', {
            nickname: nicknameText,
            login: loginText,
            password: passwordText,
            status: statusText
        },
        {
            headers: {
                'Authorization': `Bearer ${cookies.get('token')}`
            }
        })
        if(response.status === 200) {
            alert('User created!')
            navigate(routes.home)
        }
        else if(response.status === 401) {
            alert('You are not authorized!')
        }
        else if(response.status === 400){
            alert('You don`t have a premission!')
        }
    }

    return (
        <div>
            <Label>Nickname</Label>
            <Input type="text" name="nickname" id="nickname" value={nicknameText} onChange={(e) => setNicknameText(e.target.value)}/>
            <Label>Login</Label>
            <Input type="text" name="login" id="login" value={loginText} onChange={(e) => setLoginText(e.target.value)}/>
            <Label>Password</Label>
            <Input type="text" name="password" id="password" value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
            <Label>Status</Label>
            <Input type="text" name="status" id="status" value={statusText} onChange={(e) => setStatusText(e.target.value)}/>
            <Button color="primary" onClick={createUser}>Save</Button>
        </div>
    )
}