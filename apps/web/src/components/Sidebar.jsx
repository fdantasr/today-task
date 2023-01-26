import styles from '../components/Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import Cargo from '../assets/Group 85.svg'

export function Sidebar(props) {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb- 
             4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/fdantasr.png" />
                <strong>Felipe Dantas</strong>
                <span>Software Developer</span>
                <div className={styles.cargo}>
                    {/* <label className ={styles.label}>1</label>
                    <label className ={styles.label}>2</label>
                    <label className ={styles.label}>3</label> */}
                    <img src={Cargo} alt="" srcset="" />
                </div>
                <div className={styles.infoTasks}>
               <p><b>10</b>  atribuídas</p>
               <p><b>06</b>  concluídas</p>
                </div>
                
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}
