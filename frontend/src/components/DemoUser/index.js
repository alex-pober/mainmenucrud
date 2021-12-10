import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function Demo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('demo');
    const [password, setPassword] = useState('1851011');

    const handleSubmit = (e) => {
      e.preventDefault();
      return dispatch(sessionActions.login({ credential, password }))
    }

    return (
      <button onClick={handleSubmit}> <NavLink to="/menu/1">DEMO</NavLink></button>
      );
}

export default Demo;
