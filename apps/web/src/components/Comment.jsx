import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder = {false} src="https://github.com/LauraBeatris.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Laura Beatriz</strong>
                            <time title='24 de janeiro às 15 horas'
                             dateTime='2023-01-24 15:24:00 '>Cerca de 1 hora atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Well done Ben,congratulations!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp  />
                        Apoiar <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}