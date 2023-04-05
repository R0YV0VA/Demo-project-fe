import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Button, Input, Label } from 'reactstrap'
import routes from '../routes'

export const UserEdit = () => {
    const { id } = useParams()
    const ServerApi = axios.create({
        baseURL: "https://localhost:7003/" 
      });
    const cookies = new Cookies();
    const [idText, setIdText] = useState('')
    const [nicknameText, setNicknameText] = useState('')
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [statusText, setStatusText] = useState('')
    const navigate = useNavigate()
    const getUser = async () => {
        const response = await ServerApi.get(`/user/${id}`, {
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

    const updateUser = async () => {
        const response = await ServerApi.put(`/users`, {
            id: idText,
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
            alert('User updated!')
            getUser()
        }
        if(response.status === 401) {
            alert('You are not authorized!')
        }
        if(response.status === 400){
            alert('You don`t have a premission!')
        }
    }

    const deleteUser = async () => {
        const response = await ServerApi.delete(`/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${cookies.get('token')}`
            }
        })
        if(response.status === 200) {
            alert('User deleted!')
            navigate(routes.home)
        }
        if(response.status === 401) {
            alert('You are not authorized!')
        }
        if(response.status === 400){
            alert('You don`t have a premission!')
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div>
            <Label>Id</Label>
            <Input type="text" name="id" id="id" value={idText} disabled />
            <Label>Nickname</Label>
            <Input type="text" name="nickname" id="nickname" value={nicknameText} onChange={(e) => setNicknameText(e.target.value)}/>
            <Label>Login</Label>
            <Input type="text" name="login" id="login" value={loginText} onChange={(e) => setLoginText(e.target.value)}/>
            <Label>Password</Label>
            <Input type="text" name="password" id="password" value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
            <Label>Status</Label>
            <Input type="text" name="status" id="status" value={statusText} onChange={(e) => setStatusText(e.target.value)}/>
            <Button color="primary" onClick={updateUser}>Save</Button>
            <Button color="danger" onClick={deleteUser}>Delete</Button>
        </div>
    )
}