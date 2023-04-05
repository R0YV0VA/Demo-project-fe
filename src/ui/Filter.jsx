import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UncontrolledDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, Alert } from 'reactstrap';
import routes from '../routes';
import { useDispatch } from 'react-redux';
import { setUsersAsync, setUsersFilterAsync } from '../redux/actions';
import './Filter.css'

const Filter = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('')
    const toggle = () => setDropdownOpen(prevState => !prevState)
    const [idText, setIdText] = useState('')
    const [nicknameText, setNicknameText] = useState('')
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeValue = (e) => {
        setFilter(e.currentTarget.textContent)
        if(e.currentTarget.textContent === 'Id') {
            setInput(idText)
        }
        if(e.currentTarget.textContent === 'Nickname') {
            setInput(nicknameText)
        }
        if(e.currentTarget.textContent === 'Login') {
            setInput(loginText)
        }
        if(e.currentTarget.textContent === 'Password') {
            setInput(passwordText)
        }
      }

    const changeInput = (e) => {
        if(filter === 'Id') {
            setIdText(e.target.value)
        }
        if(filter === 'Nickname') {
            setNicknameText(e.target.value)
        }
        if(filter === 'Login') {
            setLoginText(e.target.value)
        }
        if(filter === 'Password') {
            setPasswordText(e.target.value)
        }
        setInput(e.target.value)
    }

     const sendFilter = () => {
        const params = {
            id: idText,
            nickname: nicknameText,
            login: loginText,
            password: passwordText
        }
         dispatch(setUsersFilterAsync(params))
        }

        const clear = () => {
            setIdText('')
            setNicknameText('')
            setLoginText('')
            setPasswordText('')
            setInput('')
            setFilter('')
            dispatch(setUsersAsync())
          }
    return (
        <div className='full-width'>
        <div>
        <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} group>
            <DropdownToggle caret color="secondary">
                { filter === '' ? 'Filter' : filter}
            </DropdownToggle>
            <DropdownMenu container="body">
                <DropdownItem onClick={changeValue}>Id</DropdownItem>
                <DropdownItem onClick={changeValue}>Nickname</DropdownItem>
                <DropdownItem onClick={changeValue}>Login</DropdownItem>
                <DropdownItem onClick={changeValue}>Password</DropdownItem>
            </DropdownMenu>
            <Input type="text" name="text" id="exampleText" value={input} onChange={changeInput}/>
            <Button color="primary" onClick={sendFilter}>Search</Button>
            <Button color="danger" onClick={clear}>Clear</Button>
        </UncontrolledDropdown>
        <Button className='button-right' color="primary" onClick={() => navigate(routes.user_create)}>Create</Button>
        </div>
        {(idText === '') && (nicknameText === '') && (loginText === '') && (passwordText === '') ? 
            null
        : 
        <Alert color="primary">
                Filter: { idText === '' ? null : ('Id=' + idText)} { nicknameText === '' ? null : (', Nickname=' + nicknameText)} { loginText === '' ? null : (', Login=' + loginText)} { passwordText === '' ? null : (', Password=' + passwordText)}
            </Alert>
        }
        </div>
    );
}

export default Filter