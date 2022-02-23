import { useParams } from "react-router-dom";
import getPost from '../../services/getPost'
import { useState } from "react";
import SinglePost from "../../components/SinglePost";
import Header from "../../components/Header";
import styles from './styles.module.css'

export default function PostPage() {
    let params = useParams();

    const [posts , setPosts] = useState([]);

    getPost(params.postsSlug).then((result)=>{
        setPosts(result.posts);
    })  

    return(
      <>
        <Header />
        <div className={styles.blogContainer} id="blog">            
          {posts.map((post)=>{
            return (<SinglePost data={post} key={post.id} isSinglePage={true}/>)
          })}
        </div>
      </>
    )
    
  ;
}