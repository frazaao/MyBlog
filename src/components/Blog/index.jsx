import styles from './styles.module.css'
import Post from '../Post'
import { useState, useEffect } from 'react'
import { useQuery, createClient } from 'urql'



const query = `
query Posts {
  posts(orderBy: createdAt_DESC) {
    id
    slug
    title
    coverImage {
      url
    }
    content {
      html
    }
  }
}`;



export default function Blog(){

  const [posts, setPosts] = useState([]);

  const [result] = useQuery({query})

  const { data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

    return(
        <div className={styles.blogContainer}>
            <h2>
                Últimas postagens
            </h2>

            {data.posts.map((post)=>{
              return (<Post data={post} key={post.id}/>)
            })}
            
        </div>

    )
}

