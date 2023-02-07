import styles from './Header.module.css';
import { MagnifyingGlass, Chats } from "phosphor-react";
import logoTeste from '../assets/teste.svg';


export function Header(props) {
    return (
        <header className={styles.header}>
            <img src={logoTeste} alt="Ignite Logo" />
            <div className={styles.searchIcon}>
                <span><MagnifyingGlass weight="bold" /></span>
                <input type="text" className={styles.search} placeholder=" Search for topics, users or categories" />
            </div>
            <img className={styles.avatar} src="https://github.com/fdantasr.png" />
        </header>
    )
}