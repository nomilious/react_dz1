import React, { useState } from 'react';
import "./LoginForm.css"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("", {
                method:"POST",
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({ email, password }),
            })
            const data = await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
            // setResponseMessage('Что-то пошло не так...');
        }
    }
    return (
        <div className="container">
            <h1>Форма аутентификации</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default LoginForm;