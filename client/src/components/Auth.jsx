import '../assets/Auth.css'
import { useRef } from 'react'
import api from "../http/index";
import { useNavigate } from 'react-router-dom';

export default function Auth({ newUser }) {
    const navigate = useNavigate();
    const inputUsername = useRef(null);
    const inputPassword = useRef(null);


    async function submit(e) {
        e.preventDefault();
        const endpoint = 'api/auth/' + (newUser ? 'signup' : 'login');
        try {
            const response = await api.post(endpoint, { username: inputUsername.current.value, password: inputPassword.current.value });
            const data = await response.data;
            // navigate('/')
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    function apiCall() {
        fetch('http://localhost:3000/test');
      }

    return (
        <>
        <form className={"input-form"} onSubmit={(e) => submit(e)}>
            <div><label htmlFor="name">Username</label></div>
            <div><input ref={inputUsername} type="text" name="name" /></div>
            <div><label htmlFor="password">Password</label></div>
            <div><input ref={inputPassword} type="password" name="password" /></div>
            <button type='submit'>{newUser ? "Create Account" : "Log in"}</button>
        </form>

        <button onClick={() => apiCall()}>Test</button>
        </>
    )
}
