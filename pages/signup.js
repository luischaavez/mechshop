import { useState } from 'react';
import axios from 'axios';
import Form from '../components/styles/Form';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('https://afse2jq821.execute-api.us-east-1.amazonaws.com/v1/signup', { firstName, lastName, email, password })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3>Sign Up!</h3>
            <label htmlFor="first_name">First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>

            <label htmlFor="last_name">Last Name:
                <input 
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>

            <label htmlFor="email">Email:
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label htmlFor="password">Password: 
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Sign Up</button>
        </Form>
    )
}

export default SignUp;