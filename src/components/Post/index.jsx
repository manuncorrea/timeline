import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState ([
    'Post muito bacana!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publushedDateFormatted = format(publishedAt, "d 'de' LLLL, 'ás' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();

    const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText]);

    setNewCommentText('') // limpar a text area depois de comentar

  };

  function handleNewCommentChange(){
    event.target.setCustomValidity('');
   setNewCommentText(event.target.value);
  };

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };
  
  function deleteComment(commentToDelete){
    const commentsWithoutDeleteOnde = comments.filter(comment => {
      return comment !== commentToDelete
    });
    setComments(commentsWithoutDeleteOnde);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publushedDateFormatted} dataTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
       {content.map(line => {
        if(line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>
        }else {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
       })}

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder='Deixe seu comentario' 
            name="comment" 
            value={newCommentText} 
            onChange={handleNewCommentChange} 
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment 
                key={comment} 
                content={comment} 
                onDeleteComment={deleteComment}
            />
            )
          })}
        </div>
      </div>
    </article>
  );
}