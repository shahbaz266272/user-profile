import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import UserList from './components/userList/UserList';
import { users } from './constants/data';
 
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? styles.dark : '';
  }, [darkMode]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.themeToggle}>

        <button onClick={() => setDarkMode(!darkMode)} className={styles.toggle}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
        </div>
        <h1>User Profiles</h1>
      </header>
      <UserList users={users} />
    </div>
  );
};

export default App;
