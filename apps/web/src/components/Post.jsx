
import styles from './Post.module.css';
import { Comment } from './Comment'
import { Avatar } from './Avatar';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/benawad.png" />
                    <div className={styles.authorInfo}>
                        <strong>Ben Awad</strong>
                        <span>Software Consultant</span>
                    </div>
                </div>

                <time title='24 de janeiro às 15 horas' dateTime='2023-01-24 15:24:00 '>Pubicado há 1 hora </time>
            </header>
            <div className={styles.content}>
                <p>Hey people 👋</p>

                <p> I want to make a video seeing how fast I can spend +$100K on AWS/GCP/Azure. I want to make a video seeing
                    how fast I can spend +$100K on AWS/GCP/Azure 🚀</p>
                <p>👉 <a href="#"> jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#newvideo</a>{' '}
                    <a href="#">#project</a> {' '}
                    <a href="#">#dev</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                 placeholder='Deixe um comentário' 
                 />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
           <Comment/>
           <Comment/>
           <Comment/>
            </div>
           
        </article>
    )
}