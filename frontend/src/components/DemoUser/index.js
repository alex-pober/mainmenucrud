import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function Demo() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('demo');
    const [password, setPassword] = useState('1851011');

    if (sessionUser) return (
      <Redirect to="/menu/1" />
    );


    const handleSubmit = (e) => {
      e.preventDefault();
      return dispatch(sessionActions.login({ credential, password }))
    }

    return (
      <button onClick={handleSubmit}>DEMO</button>
      );
}

export default Demo;
