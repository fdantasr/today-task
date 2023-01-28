import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css'
import { Tasks } from "./components/Tasks";


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
          <Post/>
       
        </main>
       <Tasks/>
      </div>
      
    </div>
  )
}
