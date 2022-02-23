import styles from './styles.module.css'
import SinglePost from '../SinglePost'
import { useState, useEffect } from 'react'
import getPosts from '../../services/getPosts'

export default function Blog(){

  const [posts, setPosts] = useState([]);

  getPosts().then((result)=>{
    setPosts(result.posts);
  })

    return(
        <div className={styles.blogContainer} id="blog">
            <h2>
                Lastest posts
            </h2>

            {posts.map((post)=>{
              return (<SinglePost data={post} key={post.id} isSInglePage={false}/>)
            })}            
        </div>

    )
}

