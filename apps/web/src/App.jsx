import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css'
import { Tasks } from "./components/Tasks";


const posts = [ //Implementar API 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/benawad.png',
      name: 'Ben Awad',
      role: 'Software Consultant'
    },
    content: [
      { type: 'paragraph', content: 'Hey people 👋' },
      { type: 'paragraph', content: 'I want to make a video seeing how fast I can spend +$100K on AWS/GCP/Azure 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-24 15:24:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LauraBeatris.png',
      name: 'Laura Beatriz',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey people 👋' },
      { type: 'paragraph', content: 'I want to make a video seeing how fast I can spend +$100K on AWS/GCP/Azure 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-26 15:24:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}

              />
            )
          })}
        </main>
        <Tasks />
      </div>

    </div>
  )
}
