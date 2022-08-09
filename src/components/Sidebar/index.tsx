import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />

      <div className={styles.profile}>
       <Avatar src="https://github.com/manuncorrea.png"/>
        <strong>Emanuele Correa</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Eidtar seu perfil
        </a>
      </footer>
    </aside>
  );
}