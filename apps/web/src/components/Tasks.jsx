import { Plus } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Tasks.module.css'

export function Tasks(props) {
    return (
        <>
        <div className={styles.container}>
            <header>
                <div className={styles.headeritems}>
                    <h1>Your Tasks</h1>
                    <button title="Add new Task">
                        <Plus size={25} weight="bold" />
                    </button>
                </div>
            </header>
            <div className={styles.boxItem}>
            <div className={styles.taskItem}>
                <p>5 DAYS LEFT</p>
                
                <strong>Create user registration page</strong>

                <div className={styles.author}>
                    <img src="https://github.com/timsuchanek.png" />
                    <p>Tim Suchanek</p>
                </div>
            </div>
        </div>
        <footer>
          <div className={styles.exploreMore}>
          <strong>Explore more Tasks</strong>
          </div>
      </footer>
        </div>
      </>
    )
}