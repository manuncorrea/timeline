import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './styles/global.css';
import styles from './styles/App.module.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web Developer'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
      { type: 'link', content: 'jane.design/doctorcare', }

    ],

    publishedAt: new Date('2022-08-02 10:42:00')

  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Desenvolvedor Full Stack'
    },

    content: [
      { type: 'paragraph', content: 'Boa tarde meu povo 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
      { type: 'link', content: 'jane.design/doctorcare', }

    ],

    publishedAt: new Date('2022-08-05 13:02:00')

  },

]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            console.log(post)
            return <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
           />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
