import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const PostList = () => {
    //?_limit=50
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const fetchPosts = async () => { 
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
            const posts = await response.json();
            setPosts(posts);
        }
        catch(error){
            console.log("Error", error);
        }
        setLoading(false);
    }
    useEffect(() => {fetchPosts() },[] )
    return (
    <div>
      {loading ? <p>Loading...</p> :(
        posts.map((post) => (
            <div key={post.id} className='text-copmponent'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link to={`/posts/${post.id}`}>Read More</Link>
            </div>
        ))
      )}
    </div>
  )
}

export default PostList;
