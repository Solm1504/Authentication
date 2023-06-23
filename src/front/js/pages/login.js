import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actions } = useContext(Context);
    const login = () => {
        actions.login(email, password);
    }
    return (<>
        <div>
            <input  type='text' placeholder='email' onChange={(event) => setEmail(event.target.value)}/>
            <input  type='text' placeholder='password' onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={login} >login</button>
        </div>
    </>)
}