import React, { useState } from 'react';
import "./LoginForm.css"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                // console.log(data)
                setMessage("Удача! У нас получилось !!");
            })
            .catch(error => {
                console.error('Ошибка:', error);
                setError(true);
                setMessage("Ошибка: " + error.message);
            });
    }
    const messageClass = error ? "danger" : "success"; // Определение класса в зависимости от ошибки
    return (
        <div className="container">
            <h1>Форма аутентификации</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Войти</button>
                <p id="message" className={messageClass}>{message}</p>
            </form>
        </div>
    )
}

export default LoginForm;