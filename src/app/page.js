'use client'
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

const roteUsers = "https://jsonplaceholder.typicode.com/users";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(roteUsers)
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Exemplo do fetch com html: https://github.com/mdn/fetch-examples/blob/main/fetch/fetch-json/index.html

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Lista de usuários do jsonplaceholder</h1>
        <ol>
          {users && users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
