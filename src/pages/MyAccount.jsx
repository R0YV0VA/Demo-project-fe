import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Input, Label } from 'reactstrap'

export const MyAccount = () => {
    const ServerApi = axios.create({
        baseURL: "https://localhost:7003/" 
      });
    const cookies = new Cookies();
    const [idText, setIdText] = useState('')
    const [nicknameText, setNicknameText] = useState('')
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [statusText, setStatusText] = useState('')
    const getUser = async () => {
        const response = await ServerApi.get(`/users/myaccount`, {
            headers: {
                'Authorization': `Bearer ${cookies.get('token')}`
            }
        })
        if(response.status === 200) {
            setIdText(response.data.id)
            setNicknameText(response.data.nickname)
            setLoginText(response.data.login)
            setPasswordText(response.data.password)
            setStatusText(response.data.status)
        }
        else if(response.status === 401) {
            alert('You are not authorized!')
        }
        else {
            alert('Something went wrong!')
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
        {cookies.get('token') ? 
        <div>
            <h1>My Account</h1>
            <Label>Id</Label>
            <Input type="text" name="id" id="id" value={idText} disabled />
            <Label>Nickname</Label>
            <Input type="text" name="nickname" id="nickname" value={nicknameText} />
            <Label>Login</Label>
            <Input type="text" name="login" id="login" value={loginText} />
            <Label>Password</Label>
            <Input type="text" name="password" id="password" value={passwordText} />
            <Label>Status</Label>
            <Input type="text" name="status" id="status" value={statusText} />
        </div>
        : 
        <div>
            <h1>You are not authorized!</h1>
        </div>
        }
        </>
    )
}