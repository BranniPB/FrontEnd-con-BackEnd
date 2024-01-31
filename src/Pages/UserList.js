import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const Api_URL = "https://jsonplaceholder.typicode.com";
        
        fetch(`${Api_URL}/users`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ✉️ {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
