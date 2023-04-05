import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersAsync } from '../redux/actions';

import Table from '../ui/Table';
import Filter from '../ui/Filter';
import Loading from '../ui/Loading';

import './Home.css'

export const Home = () => {
  const cookies = new Cookies();
  const spreadsheetTitles = ['ID', 'Nickname', 'Login', 'Password', 'Status']
  const fieldsName = ['id', 'nickname', 'login', 'password', 'status']
  const users = useSelector(state => state.home.users)
  const loading = useSelector(state => state.loading.isLoading)
  const dispatch = useDispatch();

  const getUsers = async () => {
    dispatch(setUsersAsync())
  }
  useEffect(() => {
    if (cookies.get('token') !== undefined) {
      getUsers()
    }
  }, [])

  return (
    <>
    {loading ? <Loading /> : null}
    {cookies.get('token') !== undefined ?
    <div>
      <div className='in-one-line'>
      <Filter/>
      </div>
      <div>
        <div>
          <Table results={users} fieldsName={fieldsName} spreadsheetTitles={spreadsheetTitles} editRoutes={routes.user_edit} />
        </div>
      </div>
    </div>
    :
    <div>
      <h1>You are not authorized!</h1>
    </div>
  }
  </>
  );
}